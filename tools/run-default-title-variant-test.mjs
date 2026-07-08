import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const popupUrl = pathToFileURL(
  path.join(projectRoot, "shopify-product-collector", "popup.html")
).href;
const playwrightModuleDir = process.env.PLAYWRIGHT_NODE_MODULE_DIR || "";
const requirePlaywright = createRequire(
  playwrightModuleDir ? path.join(playwrightModuleDir, "__loader__.js") : import.meta.url
);
const { chromium } = requirePlaywright("playwright");

const batchStorageKey = "spc:batch-queue:v1";
const currentTabUrl = "https://default-title.example/products/single-default";

function hashString(value) {
  let hash = 0;
  const text = String(value || "");

  for (let index = 0; index < text.length; index += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(index);
    hash |= 0;
  }

  return Math.abs(hash).toString(36);
}

function getDraftStorageKey(url) {
  const parsedUrl = new URL(url);
  parsedUrl.hash = "";
  parsedUrl.search = "";
  return `spc:product-draft:${hashString(parsedUrl.href)}`;
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function launchBrowser() {
  const launchCandidates = [
    { headless: true },
    { channel: "chrome", headless: true },
    { channel: "msedge", headless: true }
  ];
  let lastError;

  for (const options of launchCandidates) {
    try {
      return await chromium.launch(options);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}

const product = {
  title: "Default Title Product",
  handle: "default-title-product",
  description: "A product whose source only exposed Shopify's default variant.",
  vendor: "Default Vendor",
  type: "",
  tags: "",
  status: "draft",
  published: "false",
  sku: "DEFAULT-1",
  price: "19.99",
  compareAtPrice: "",
  images: [
    {
      url: "https://cdn.example/default-title-product.jpg",
      position: 1,
      altText: "Default Title Product"
    }
  ],
  variants: [
    {
      sku: "DEFAULT-1",
      barcode: "",
      option1Name: "Title",
      option1Value: "Default Title",
      option2Name: "",
      option2Value: "",
      option3Name: "",
      option3Value: "",
      price: "19.99",
      compareAtPrice: "",
      variantImageUrl: "https://cdn.example/default-title-product.jpg"
    }
  ],
  source: "shopify-api",
  page: {
    title: "Default Title Product",
    url: currentTabUrl
  }
};

const batchState = {
  items: [
    {
      id: "batch-default-title",
      url: currentTabUrl,
      status: "success",
      title: product.title,
      source: "Shopify API",
      handle: product.handle,
      error: "",
      warningCount: 0,
      rowCount: 1,
      updatedAt: new Date().toISOString(),
      product
    }
  ],
  selectedIds: [],
  logs: [],
  savedAt: new Date().toISOString()
};

async function run() {
  let browser;
  browser = await launchBrowser();

  try {
    const context = await browser.newContext({
      acceptDownloads: true,
      viewport: { width: 460, height: 900 }
    });
    const page = await context.newPage();
    const pageErrors = [];

    page.on("pageerror", (error) => {
      pageErrors.push(error.message);
    });

    await page.addInitScript(
      ({ currentTabUrl: tabUrl, draftStorageKey, batchStorageKey, product, batchState }) => {
        const storage = {
          [draftStorageKey]: {
            draft: structuredClone(product),
            normalizedPageUrl: tabUrl,
            savedAt: new Date().toISOString()
          },
          [batchStorageKey]: structuredClone(batchState)
        };

        window.confirm = () => true;
        window.chrome = {
          runtime: { lastError: null },
          tabs: {
            query(_query, callback) {
              const result = [{ id: 1, title: product.title, url: tabUrl }];
              callback?.(result);
              return Promise.resolve(result);
            }
          },
          storage: {
            local: {
              get(key, callback) {
                if (typeof key === "string") {
                  callback?.({ [key]: storage[key] });
                  return Promise.resolve({ [key]: storage[key] });
                }

                if (Array.isArray(key)) {
                  const result = key.reduce((values, item) => {
                    values[item] = storage[item];
                    return values;
                  }, {});
                  callback?.(result);
                  return Promise.resolve(result);
                }

                callback?.({ ...storage });
                return Promise.resolve({ ...storage });
              },
              set(values, callback) {
                Object.assign(storage, values);
                callback?.();
                return Promise.resolve();
              },
              remove(keyOrKeys, callback) {
                [].concat(keyOrKeys).forEach((item) => {
                  delete storage[item];
                });
                callback?.();
                return Promise.resolve();
              }
            }
          }
        };
      },
      {
        currentTabUrl,
        draftStorageKey: getDraftStorageKey(currentTabUrl),
        batchStorageKey,
        product,
        batchState
      }
    );

    await page.goto(popupUrl);
    await page.locator('[data-workspace-tab="variants"]').click();
    await page.waitForSelector(".variant-item", { timeout: 8000 });
    await page.locator('[data-workspace-tab="batch"]').click();
    await page.waitForSelector('.batch-risk-badge[data-risk="variants"]', {
      timeout: 8000
    });

    await page.locator('[data-workspace-tab="variants"]').click();
    await page.locator("#checkVariantsButton").click();
    await page.waitForFunction(() =>
      document.querySelector(".variant-item")?.classList.contains("has-validation-warning")
    );

    const validationText = await page.locator("#validationList").textContent();
    const statusText = await page.locator("#statusText").textContent();
    const batchVariantRiskText = await page
      .locator('.batch-risk-badge[data-risk="variants"]')
      .textContent();

    assert(validationText.includes("Default Title"), "变体校验应展示 Default Title 提示");
    assert(validationText.includes("单规格商品"), "单变体默认标题应说明会按单规格导出");
    assert(statusText.includes("变体风险"), "状态栏应提示发现变体风险");
    assert(batchVariantRiskText === "默认变体", "批量队列应显示默认变体风险徽标");

    const downloadPromise = page.waitForEvent("download");
    await page.locator("#exportCsvButton").click();
    const download = await downloadPromise;
    await download.delete().catch(() => {});

    const exportValidationText = await page.locator("#validationList").textContent();
    assert(
      exportValidationText.includes("Default Title"),
      "导出前校验应继续展示 Default Title 风险"
    );
    assert(pageErrors.length === 0, `页面不应有运行时错误：${pageErrors.join("; ")}`);

    await browser.close();
    browser = null;
    console.log(
      JSON.stringify(
        {
          ok: true,
          checks: [
            "Default Title 变体校验提示",
            "变体卡片 warning 标记",
            "批量默认变体风险徽标",
            "导出前风险保留"
          ]
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
