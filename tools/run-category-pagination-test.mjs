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
  playwrightModuleDir
    ? path.join(playwrightModuleDir, "__playwright_loader__.js")
    : import.meta.url
);
const { chromium } = requirePlaywright("playwright");

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

async function run() {
  let browser = await launchBrowser();

  try {
    const context = await browser.newContext({
      viewport: { width: 460, height: 900 }
    });
    const page = await context.newPage();
    const pageErrors = [];

    page.on("pageerror", (error) => {
      pageErrors.push(error.message);
    });

    await page.addInitScript(() => {
      const storage = {};
      const tabUrls = new Map();
      const updateListeners = new Set();
      const createdUrls = [];
      let nextTabId = 10;

      window.__createdCategoryTabs = createdUrls;
      window.confirm = () => true;

      function getDiscoveryResponse(url) {
        const parsedUrl = new URL(url);
        const pageNumber = Number(parsedUrl.searchParams.get("page") || 1);

        if (pageNumber === 1) {
          return {
            urls: ["https://shop.test/products/alpha"],
            items: [
              {
                url: "https://shop.test/products/alpha",
                title: "Alpha Product",
                previewImageUrl: "https://cdn.shop.test/alpha.jpg"
              }
            ],
            paginationUrls: ["https://shop.test/collections/all?page=2"],
            nextPageUrl: "https://shop.test/collections/all?page=2"
          };
        }

        if (pageNumber === 2) {
          return {
            urls: ["https://shop.test/products/beta"],
            items: [
              {
                url: "https://shop.test/products/beta",
                title: "Beta Product",
                previewImageUrl: "https://cdn.shop.test/beta.jpg"
              }
            ],
            paginationUrls: ["https://shop.test/collections/all?page=3"],
            nextPageUrl: "https://shop.test/collections/all?page=3"
          };
        }

        return {
          urls: [],
          items: [],
          paginationUrls: ["https://shop.test/collections/all?page=4"],
          nextPageUrl: "https://shop.test/collections/all?page=4"
        };
      }

      const chromeMock = {
        runtime: {
          lastError: null
        },
        tabs: {
          query(_query, callback) {
            const result = [
              {
                id: 1,
                title: "Current Collection",
                url: "https://shop.test/collections/all"
              }
            ];
            callback?.(result);
            return Promise.resolve(result);
          },
          create(options, callback) {
            const tab = {
              id: nextTabId++,
              url: options?.url || ""
            };

            tabUrls.set(tab.id, tab.url);
            createdUrls.push(tab.url);
            callback?.(tab);
            window.setTimeout(() => {
              updateListeners.forEach((listener) =>
                listener(tab.id, { status: "complete" })
              );
            }, 0);
            return Promise.resolve(tab);
          },
          remove(tabId, callback) {
            tabUrls.delete(tabId);
            callback?.();
            return Promise.resolve();
          },
          sendMessage(tabId, message, callback) {
            if (message?.type === "SPC_DISCOVER_PRODUCT_URLS") {
              const tabUrl = tabUrls.get(tabId) || "https://shop.test/collections/all";
              const data = getDiscoveryResponse(tabUrl);

              callback?.({
                ok: true,
                data: {
                  ...data,
                  sourceLabel: "Collection page",
                  anchorCount: data.urls.length,
                  page: {
                    title: "All Products",
                    url: tabUrl
                  }
                }
              });
              return Promise.resolve();
            }

            callback?.({ ok: true });
            return Promise.resolve();
          },
          onUpdated: {
            addListener(listener) {
              updateListeners.add(listener);
            },
            removeListener(listener) {
              updateListeners.delete(listener);
            }
          }
        },
        scripting: {
          executeScript(_options, callback) {
            callback?.([]);
            return Promise.resolve([]);
          }
        },
        storage: {
          local: {
            get(key, callback) {
              if (typeof key === "string") {
                callback({ [key]: storage[key] });
                return;
              }

              callback({ ...storage });
            },
            set(values, callback) {
              Object.assign(storage, values);
              callback?.();
            },
            remove(key, callback) {
              [].concat(key).forEach((item) => delete storage[item]);
              callback?.();
            }
          }
        }
      };

      Object.defineProperty(window, "chrome", {
        configurable: true,
        value: chromeMock
      });
    });

    await page.goto(popupUrl);
    await page.locator('[data-workspace-tab="batch"]').click();
    await page.locator("#batchCategoryUrlInput").fill("https://shop.test/collections/all");
    await page.locator("#discoverCategoryUrlsButton").click();
    await page.waitForFunction(() =>
      document.querySelector("#batchUrlInput")?.value.includes("https://shop.test/products/beta")
    );

    const batchUrls = await page.locator("#batchUrlInput").inputValue();
    const statusText = await page.locator("#statusText").textContent();
    const createdTabs = await page.evaluate(() => window.__createdCategoryTabs || []);

    assert(batchUrls.includes("https://shop.test/products/alpha"), "page 1 product missing");
    assert(batchUrls.includes("https://shop.test/products/beta"), "page 2 product missing");
    assert(!batchUrls.includes("page=4"), "empty page pagination url should not be queued");
    assert(
      createdTabs.length === 3 &&
        createdTabs[0] === "https://shop.test/collections/all" &&
        createdTabs[1] === "https://shop.test/collections/all?page=2" &&
        createdTabs[2] === "https://shop.test/collections/all?page=3",
      `expected 3 discovery pages, got ${createdTabs.join(", ")}`
    );
    assert(statusText.includes("已扫描 3 页"), "status should show scanned page count");
    assert((await page.locator("#batchList .batch-item").count()) === 2, "queue should have 2 products");
    assert(pageErrors.length === 0, `page errors: ${pageErrors.join("; ")}`);

    await browser.close();
    browser = null;
    console.log(
      JSON.stringify(
        {
          ok: true,
          createdTabs,
          batchUrls: batchUrls.split("\n"),
          statusText
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
