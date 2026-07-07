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

const amazonSearchUrl = "https://www.amazon.com/s?k=fiber";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const html = String.raw`<!doctype html>
<html>
  <head>
    <title>Amazon.com : fiber</title>
  </head>
  <body>
    <main>
      <div data-component-type="s-search-result" data-asin="B0AAA111AA">
        <a class="a-link-normal s-no-outline" href="/dp/B0AAA111AA/ref=sr_1_1?keywords=fiber">
          <img src="https://m.media-amazon.com/images/I/51direct._AC_UL320_.jpg" alt="Direct Fiber Gummies">
        </a>
        <h2><a href="/dp/B0AAA111AA/ref=sr_1_1"><span>Direct Fiber Gummies</span></a></h2>
      </div>

      <div data-component-type="s-search-result" data-asin="B0BBB222BB">
        <a
          aria-label="Sponsored Fiber Powder"
          href="/sspa/click?url=%2Fdp%2FB0BBB222BB%2Fref%3Dsr_1_2_sspa%3Fpsc%3D1%26keywords%3Dfiber&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY"
        >
          <img data-src="https://m.media-amazon.com/images/I/52sponsored._AC_UL320_.jpg" alt="Sponsored Fiber Powder">
        </a>
        <h2><span>Sponsored Fiber Powder</span></h2>
      </div>

      <div class="s-result-item sg-col-inner" data-asin="B0CCC333CC">
        <a
          class="a-link-normal"
          href="/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf?url=%2Fdp%2FB0CCC333CC%3Fkeywords%3Dfiber%26psc%3D1"
        >
          <img src="https://m.media-amazon.com/images/I/53redirect._AC_UL320_.jpg" alt="Redirect Fiber Capsules">
        </a>
        <div data-cy="title-recipe"><h2><span>Redirect Fiber Capsules</span></h2></div>
      </div>

      <a href="/dp/B0AAA111AA/ref=sr_1_1_duplicate">Duplicate direct link</a>
      <a href="/stores/page/ABCDEF">Store page, not a product</a>
      <a href="/gp/help/customer/display.html">Help page</a>
    </main>
  </body>
</html>`;

async function run() {
  let browser;
  browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();
    const pageErrors = [];

    page.on("pageerror", (error) => {
      pageErrors.push(error.message);
    });

    await page.route(amazonSearchUrl, (route) => {
      route.fulfill({
        status: 200,
        contentType: "text/html; charset=utf-8",
        body: html
      });
    });
    await page.addInitScript(() => {
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
            get(_key, callback) {
              callback?.({});
            },
            set(_values, callback) {
              callback?.();
            },
            remove(_key, callback) {
              callback?.();
            }
          }
        }
      };
    });

    await page.goto(amazonSearchUrl);
    await page.addScriptTag({ path: contentScriptPath });
    const response = await page.evaluate(
      () =>
        new Promise((resolve) => {
          window.__spcMessageListener({ type: "SPC_DISCOVER_PRODUCT_URLS" }, {}, resolve);
        })
    );

    assert(response.ok, response.error || "Amazon 商品链接发现失败");

    const { urls, items, sourceLabel } = response.data;

    assert(sourceLabel === "Amazon 页面", "应识别为 Amazon 页面");
    assert(urls.length === 3, `应发现并去重 3 个商品链接，实际 ${urls.length}`);
    assert(urls.includes("https://www.amazon.com/dp/B0AAA111AA"), "应识别普通 /dp 链接");
    assert(urls.includes("https://www.amazon.com/dp/B0BBB222BB"), "应识别 Sponsored 跳转链接");
    assert(urls.includes("https://www.amazon.com/dp/B0CCC333CC"), "应识别 slredirect 跳转链接");
    assert(
      items.some(
        (item) =>
          item.url === "https://www.amazon.com/dp/B0BBB222BB" &&
          item.title.includes("Sponsored Fiber Powder") &&
          item.previewImageUrl.includes("52sponsored")
      ),
      "Sponsored 商品应带标题和预览图"
    );
    assert(pageErrors.length === 0, `页面不应有运行时错误：${pageErrors.join("; ")}`);

    await browser.close();
    browser = null;
    console.log(
      JSON.stringify(
        {
          ok: true,
          sourceLabel,
          urls,
          itemCount: items.length
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
