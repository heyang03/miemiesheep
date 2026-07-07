import fs from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const contentScriptPath = path.join(projectRoot, "shopify-product-collector", "content.js");
const playwrightModuleDir = process.env.PLAYWRIGHT_NODE_MODULE_DIR || "";
const requirePlaywright = createRequire(
  playwrightModuleDir
    ? path.join(playwrightModuleDir, "__playwright_loader__.js")
    : import.meta.url
);
const { chromium } = requirePlaywright("playwright");

const urls = [
  "https://www.raworganicwhey.com/collections/raw-organic-whey/products/raw-organic-whey",
  "https://shop.truvani.com/pages/plant-based-protein",
  "https://trybloomin.com/products/bloomin-shelajit-gummies-coc",
  "https://www.musclemilk.com/powders/genuine-protein/chocolate/4.94lb",
  "https://necessaire.com/collections/best-sellers/products/the-body-retinol"
];

function isStrictPrice(value) {
  return /^\d+(\.\d{1,2})?$/.test(String(value || "").trim());
}

function validateProduct(product) {
  const errors = [];
  const warnings = [];
  const images = Array.isArray(product?.images) ? product.images : [];

  if (!String(product?.title || "").trim()) {
    errors.push("商品标题不能为空");
  }

  if (!String(product?.handle || "").trim()) {
    errors.push("URL handle 不能为空");
  }

  if (!String(product?.variants?.[0]?.option1Name || "Default Title").trim()) {
    errors.push("Option1 name 不能为空");
  }

  if (!String(product?.variants?.[0]?.option1Value || "Default Title").trim()) {
    errors.push("Option1 value 不能为空");
  }

  if (!String(product?.price || "").trim()) {
    warnings.push("价格为空，导出将使用 0.00");
  } else if (!isStrictPrice(product.price)) {
    warnings.push("价格格式不是纯数字");
  }

  if (!images.length) {
    warnings.push("没有图片");
  }

  images.forEach((image, index) => {
    const url = String(image.url || "").trim();

    if (!/^https?:\/\//i.test(url)) {
      warnings.push(`第 ${index + 1} 张图片不是 http/https URL`);
      return;
    }

    if (!/^https:\/\//i.test(url)) {
      warnings.push(`第 ${index + 1} 张图片不是 https`);
    }
  });

  return { errors, warnings };
}

async function injectCollector(page, contentScript) {
  await page.evaluate((script) => {
    Object.defineProperty(window, "chrome", {
      configurable: true,
      value: {
        runtime: {
          lastError: null,
          onMessage: {
            addListener(listener) {
              window.__spcMessageListener = listener;
            }
          },
          sendMessage(message, callback) {
            callback?.({ ok: true, ignored: message?.type || "" });
          }
        },
        storage: {
          local: {
            get(key, callback) {
              callback(typeof key === "string" ? { [key]: "" } : {});
            },
            set(values, callback) {
              callback?.(values);
            },
            remove(key, callback) {
              callback?.(key);
            }
          }
        }
      }
    });

    window.__SHOPIFY_PRODUCT_COLLECTOR_CONTENT_READY__ = false;
    new Function(script)();
  }, contentScript);
}

async function collectFromPage(page) {
  return page.evaluate(
    () =>
      new Promise((resolve) => {
        if (!window.__spcMessageListener) {
          resolve({ ok: false, error: "content listener not registered" });
          return;
        }

        const timeout = window.setTimeout(() => {
          resolve({ ok: false, error: "collection timeout" });
        }, 8000);

        window.__spcMessageListener({ type: "SPC_COLLECT_PRODUCT" }, {}, (response) => {
          window.clearTimeout(timeout);
          resolve(response);
        });
      })
  );
}

async function gotoWithRetries(page, url, attempts = 3) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 60000
      });
    } catch (error) {
      lastError = error;
      await page.waitForTimeout(2000 * attempt);
    }
  }

  throw lastError;
}

async function run() {
  const contentScript = await fs.readFile(contentScriptPath, "utf8");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1365, height: 900 },
    locale: "en-US",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
  });
  const results = [];

  for (const url of urls) {
    const page = await context.newPage();
    const consoleErrors = [];

    page.on("console", (message) => {
      if (message.type() === "error") {
        consoleErrors.push(message.text());
      }
    });

    try {
      const response = await gotoWithRetries(page, url);

      await page.waitForLoadState("networkidle", { timeout: 12000 }).catch(() => {});
      await page.waitForTimeout(2500);
      await injectCollector(page, contentScript);

      const collected = await collectFromPage(page);
      const product = collected?.data || {};
      const validation = validateProduct(product);

      results.push({
        url,
        httpStatus: response?.status() || 0,
        ok: Boolean(collected?.ok),
        error: collected?.error || "",
        pageTitle: await page.title(),
        source: product.source || "",
        title: product.title || "",
        price: product.price || "",
        compareAtPrice: product.compareAtPrice || "",
        sku: product.sku || "",
        vendor: product.vendor || "",
        handle: product.handle || "",
        descriptionLength: String(product.description || "").length,
        imageCount: Array.isArray(product.images) ? product.images.length : 0,
        firstImages: (product.images || []).slice(0, 3).map((image) => image.url),
        validation,
        consoleErrorCount: consoleErrors.length
      });
    } catch (error) {
      results.push({
        url,
        ok: false,
        error: error?.message || "unknown error",
        consoleErrorCount: consoleErrors.length
      });
    } finally {
      await page.close().catch(() => {});
    }
  }

  await browser.close();

  const outputPath = path.join(projectRoot, "docs", "v16-site-test-results.json");
  await fs.writeFile(outputPath, `${JSON.stringify(results, null, 2)}\n`, "utf8");

  console.log(JSON.stringify(results, null, 2));
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
