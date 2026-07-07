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

const currentTabUrl = "https://checks.example/products/current";

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

const draft = {
  title: "Image Check Product",
  handle: "image-check-product",
  description: "Image check description",
  vendor: "Check Vendor",
  type: "",
  tags: "",
  status: "draft",
  published: "false",
  sku: "IMG-CHECK",
  price: "29.99",
  compareAtPrice: "",
  images: [
    {
      url: "https://cdn.example/valid-large.jpg",
      position: 1,
      altText: "Large image"
    },
    {
      url: "https://cdn.example/valid-small.jpg",
      position: 2,
      altText: "Small image"
    },
    {
      url: "https://cdn.example/broken.jpg",
      position: 3,
      altText: "Broken image"
    }
  ],
  variants: [
    {
      sku: "IMG-CHECK",
      barcode: "",
      option1Name: "Default Title",
      option1Value: "Default Title",
      option2Name: "",
      option2Value: "",
      option3Name: "",
      option3Value: "",
      price: "29.99",
      compareAtPrice: "",
      variantImageUrl: "https://cdn.example/valid-large.jpg"
    }
  ],
  source: "fallback",
  page: {
    title: "Image Check Product",
    url: currentTabUrl
  }
};

async function run() {
  let browser;
  browser = await chromium.launch({ headless: true });

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
      ({ currentTabUrl: tabUrl, draftStorageKey, draft }) => {
        const storage = {
          [draftStorageKey]: {
            draft: structuredClone(draft),
            normalizedPageUrl: tabUrl,
            savedAt: new Date().toISOString()
          }
        };

        window.confirm = () => true;

        class MockImage {
          constructor() {
            this.onload = null;
            this.onerror = null;
            this.width = 0;
            this.height = 0;
            this.naturalWidth = 0;
            this.naturalHeight = 0;
          }

          set src(value) {
            this._src = value;
            setTimeout(() => {
              if (String(value).includes("broken")) {
                this.onerror?.(new Error("broken image"));
                return;
              }

              const isSmall = String(value).includes("valid-small");
              this.naturalWidth = isSmall ? 120 : 900;
              this.naturalHeight = isSmall ? 120 : 700;
              this.width = this.naturalWidth;
              this.height = this.naturalHeight;
              this.onload?.();
            }, 5);
          }

          get src() {
            return this._src || "";
          }
        }

        Object.defineProperty(window, "Image", {
          configurable: true,
          value: MockImage
        });

        window.chrome = {
          runtime: { lastError: null },
          tabs: {
            query(_query, callback) {
              const result = [{ id: 1, title: "Image Check Product", url: tabUrl }];
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
        draft
      }
    );

    await page.goto(popupUrl);
    await page.waitForSelector(".image-item", { timeout: 8000 });
    await page.locator("#checkImagesButton").click();
    await page.waitForFunction(() =>
      Array.from(document.querySelectorAll(".image-check-status")).some(
        (item) => item.dataset.checkStatus === "invalid"
      )
    );

    const statuses = await page.locator(".image-check-status").evaluateAll((items) =>
      items.map((item) => ({
        status: item.dataset.checkStatus,
        text: item.textContent
      }))
    );

    assert(statuses[0].status === "valid", "第一张图片应为有效大图");
    assert(statuses[0].text.includes("900x700"), "第一张图片应显示尺寸");
    assert(statuses[1].status === "small", "第二张图片应提示小图");
    assert(statuses[2].status === "invalid", "第三张图片应提示加载失败");

    const downloadPromise = page.waitForEvent("download");
    await page.locator("#exportCsvButton").click();
    const download = await downloadPromise;
    await download.delete().catch(() => {});

    const validationText = await page.locator("#validationList").textContent();

    assert(validationText.includes("尺寸偏小"), "导出校验应提示小图风险");
    assert(validationText.includes("检查失败"), "导出校验应提示失败图片风险");
    assert(pageErrors.length === 0, `页面不应有运行时错误：${pageErrors.join("; ")}`);

    await browser.close();
    browser = null;
    console.log(
      JSON.stringify(
        {
          ok: true,
          statuses
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
