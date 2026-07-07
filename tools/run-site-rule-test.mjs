import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const contentScriptPath = path.join(projectRoot, "shopify-product-collector", "content.js");
const playwrightModuleDir = process.env.PLAYWRIGHT_NODE_MODULE_DIR || "";
const requirePlaywright = createRequire(
  playwrightModuleDir ? path.join(playwrightModuleDir, "__loader__.js") : import.meta.url
);
const { chromium } = requirePlaywright("playwright");

const productUrl = "https://rules.example/products/odd-product";
const storageKey = "spc:site-rule:rules.example";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const html = String.raw`<!doctype html>
<html>
  <head>
    <title>Odd PDP</title>
  </head>
  <body>
    <main>
      <div class="odd-name">Rule Only Product</div>
      <span class="odd-price" data-price="$42.50"></span>
      <span class="odd-compare">$59.00</span>
      <section class="odd-copy">A description captured only by a domain rule.</section>
      <span class="odd-brand">Rule Brand</span>
      <span class="odd-sku" data-sku="RULE-SKU-1"></span>
      <div class="odd-gallery">
        <img src="https://cdn.rules.example/products/rule-1_200x200.jpg" alt="Rule image 1">
        <img data-src="https://cdn.rules.example/products/rule-2_200x200.jpg" alt="Rule image 2">
      </div>
    </main>
  </body>
</html>`;

const siteRule = {
  domain: "rules.example",
  selectors: {
    title: ".odd-name",
    price: ".odd-price",
    compareAtPrice: ".odd-compare",
    description: ".odd-copy",
    vendor: ".odd-brand",
    sku: ".odd-sku",
    images: ".odd-gallery"
  },
  updatedAt: new Date().toISOString()
};

async function sendSpcMessage(page, message) {
  return page.evaluate(
    (payload) =>
      new Promise((resolve) => {
        window.__spcMessageListener(payload, {}, resolve);
      }),
    message
  );
}

async function run() {
  let browser;
  browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();
    const pageErrors = [];

    page.on("pageerror", (error) => {
      pageErrors.push(error.message);
    });

    await page.route(productUrl, (route) => {
      route.fulfill({
        status: 200,
        contentType: "text/html; charset=utf-8",
        body: html
      });
    });
    await page.addInitScript(
      ({ storageKey: key, siteRule: rule }) => {
        const storage = {
          [key]: structuredClone(rule)
        };

        window.chrome = {
          runtime: {
            onMessage: {
              addListener(listener) {
                window.__spcMessageListener = listener;
              }
            }
          },
          storage: {
            local: {
              get(keyOrKeys, callback) {
                if (typeof keyOrKeys === "string") {
                  callback?.({ [keyOrKeys]: storage[keyOrKeys] });
                  return;
                }

                callback?.({ ...storage });
              },
              set(values, callback) {
                Object.assign(storage, values);
                callback?.();
              },
              remove(keyOrKeys, callback) {
                [].concat(keyOrKeys).forEach((item) => {
                  delete storage[item];
                });
                callback?.();
              }
            }
          }
        };
      },
      { storageKey, siteRule }
    );

    await page.goto(productUrl);
    await page.addScriptTag({ path: contentScriptPath });

    const testResponse = await sendSpcMessage(page, {
      type: "SPC_TEST_SITE_RULE",
      rule: siteRule
    });

    assert(testResponse.ok, testResponse.error || "站点规则测试失败");
    assert(testResponse.data.fields.title === "Rule Only Product", "测试应命中标题");
    assert(testResponse.data.fields.price === "42.50", "测试应命中价格");
    assert(testResponse.data.imageCount === 2, "测试应命中 2 张图片");

    const pickerResponse = await sendSpcMessage(page, {
      type: "SPC_START_SITE_RULE_PICKER",
      field: "vendor"
    });

    assert(pickerResponse.ok, pickerResponse.error || "站点规则取点器应启动成功");
    await page.locator(".odd-brand").click({ force: true });

    const storedRuleResponse = await sendSpcMessage(page, {
      type: "SPC_GET_SITE_RULE"
    });

    assert(storedRuleResponse.ok, storedRuleResponse.error || "应能读取取点后的站点规则");
    assert(
      storedRuleResponse.data.rule.selectors.vendor.includes("odd-brand"),
      "取点后品牌规则应保存为可命中 .odd-brand 的选择器"
    );

    const collectResponse = await sendSpcMessage(page, {
      type: "SPC_COLLECT_PRODUCT"
    });

    assert(collectResponse.ok, collectResponse.error || "站点规则采集失败");

    const product = collectResponse.data;
    assert(product.source === "custom-rule", "采集来源应显示专属规则");
    assert(product.title === "Rule Only Product", "采集标题应来自站点规则");
    assert(product.price === "42.50", "采集价格应来自站点规则");
    assert(product.compareAtPrice === "59.00", "采集原价应来自站点规则");
    assert(product.vendor === "Rule Brand", "采集品牌应来自站点规则");
    assert(product.sku === "RULE-SKU-1", "采集 SKU 应来自站点规则");
    assert(product.images.length === 2, "采集图片应来自站点规则");
    assert(pageErrors.length === 0, `页面不应有运行时错误：${pageErrors.join("; ")}`);

    await browser.close();
    browser = null;
    console.log(
      JSON.stringify(
        {
          ok: true,
          source: product.source,
          title: product.title,
          imageCount: product.images.length
        },
        null,
        2
      )
    );
  } finally {
    await browser?.close().catch(() => {});
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
