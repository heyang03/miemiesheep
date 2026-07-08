import { createRequire } from "node:module";
import fs from "node:fs/promises";
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

const batchStorageKey = "spc:batch-queue:v1";
const currentTabUrl = "https://store.test/products/current";

function createSuccessItem(id, title, handle, price, images) {
  return {
    id,
    url: `https://store.test/products/${handle || id}`,
    status: "success",
    title,
    source: "Shopify API",
    handle,
    error: "",
    warningCount: images.length ? 0 : 1,
    rowCount: 1,
    updatedAt: new Date().toISOString(),
    product: {
      title,
      handle,
      description: `${title} description`,
      vendor: "Test Vendor",
      type: "Test Type",
      tags: "p0, batch",
      status: "draft",
      published: "false",
      sku: `${id}-SKU`,
      price,
      compareAtPrice: "",
      images: images.map((url, index) => ({
        url,
        position: index + 1,
        altText: title
      })),
      variants: [
        {
          sku: `${id}-SKU`,
          barcode: "",
          option1Name: "Title",
          option1Value: "Default Title",
          option2Name: "",
          option2Value: "",
          option3Name: "",
          option3Value: "",
          price,
          compareAtPrice: "",
          variantImageUrl: images[0] || ""
        }
      ],
      source: "shopify-api",
      page: {
        title,
        url: `https://store.test/products/${handle || id}`
      }
    }
  };
}

const seedBatch = {
  items: [
    createSuccessItem("batch-a", "Alpha No Image", "duplicate-handle", "10.00", []),
    createSuccessItem("batch-b", "Beta No Price", "duplicate-handle", "", [
      "https://cdn.store.test/beta.jpg"
    ]),
    {
      id: "batch-c",
      url: "https://store.test/products/recover",
      status: "error",
      title: "Recover Product",
      source: "",
      handle: "",
      error: "timeout",
      categoryName: "Eyeshadow",
      categoryType: "Makeup",
      categoryTags: "eye, shimmer",
      warningCount: 0,
      rowCount: 0,
      product: null,
      updatedAt: new Date().toISOString()
    },
    {
      id: "batch-d",
      url: "https://store.test/products/pending",
      status: "pending",
      title: "Pending Product",
      source: "",
      handle: "",
      error: "",
      warningCount: 0,
      rowCount: 0,
      product: null,
      updatedAt: new Date().toISOString()
    }
  ],
  selectedIds: ["batch-a"],
  logs: [
    {
      id: "log-seed",
      level: "info",
      message: "seeded batch",
      title: "",
      url: "",
      time: new Date().toISOString()
    }
  ],
  savedAt: new Date().toISOString()
};

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
  let browser;
  browser = await launchBrowser();
  try {
  const context = await browser.newContext({
    acceptDownloads: true,
    viewport: { width: 460, height: 900 }
  });
  const page = await context.newPage();
  const pageErrors = [];
  const consoleMessages = [];

  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });
  page.on("console", (message) => {
    consoleMessages.push(`${message.type()}: ${message.text()}`);
  });

  await page.addInitScript(
    ({ batchStorageKey: storageKey, seedBatch: seed, currentTabUrl: tabUrl }) => {
      const storage = {
        [storageKey]: structuredClone(seed)
      };
      const recoveredProduct = {
        title: "Recovered Product",
        handle: "recovered-product",
        vendor: "Recovered Vendor",
        type: "Recovered Type",
        tags: ["recovered"],
        description: "Recovered description",
        variants: [
          {
            id: 1,
            sku: "REC-1",
            barcode: "",
            option1: "Default Title",
            price: 1299,
            compare_at_price: 1599,
            featured_image: "https://cdn.store.test/recovered.jpg"
          }
        ],
        images: ["https://cdn.store.test/recovered.jpg"],
        options: ["Title"]
      };
      const originalFetch = window.fetch.bind(window);
      const createdTabs = [];
      let lastCreatedTabId = 0;

      window.confirm = () => true;
      window.__batchCreatedTabs = createdTabs;
      window.fetch = async (input, init) => {
        const url = String(typeof input === "string" ? input : input?.url || "");

        if (url.endsWith("/products/recover.js")) {
          return new Response(JSON.stringify(recoveredProduct), {
            status: 200,
            headers: { "Content-Type": "application/json" }
          });
        }

        return originalFetch(input, init);
      };

      const chromeMock = {
        runtime: {
          lastError: null
        },
        tabs: {
          query(_query, callback) {
            const result = [{ id: 1, title: "Mock Product Page", url: tabUrl }];
            callback?.(result);
            return Promise.resolve(result);
          },
          create(options, callback) {
            createdTabs.push(options?.url || "");
            const result = { id: 20 + createdTabs.length, url: options?.url || "" };
            lastCreatedTabId = result.id;
            callback?.(result);
            return Promise.resolve(result);
          },
          remove(_tabId, callback) {
            callback?.();
            return Promise.resolve();
          },
          sendMessage(_tabId, message, callback) {
            if (message?.type === "SPC_DISCOVER_PRODUCT_URLS") {
              callback?.({
                ok: true,
                data: {
                  urls: ["https://joyspringvitamins.com/products/detox-drops"],
                  items: [
                    {
                      url: "https://joyspringvitamins.com/products/detox-drops",
                      title: "Detox Drops",
                      previewImageUrl: "https://joyspringvitamins.com/cdn/shop/files/detox.jpg"
                    }
                  ],
                  sourceLabel: "Collection 页面",
                  page: {
                    title: "Shop By Benefit Detox",
                    url: "https://joyspringvitamins.com/collections/shop-by-benefit-detox"
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
              window.setTimeout(() => {
                listener?.(lastCreatedTabId, { status: "complete" });
              }, 0);
            },
            removeListener() {}
          }
        },
        scripting: {
          executeScript(_options, callback) {
            callback?.();
          }
        },
        storage: {
          local: {
            get(key, callback) {
              if (typeof key === "string") {
                callback({ [key]: storage[key] });
                return;
              }

              if (Array.isArray(key)) {
                callback(
                  key.reduce((result, item) => {
                    result[item] = storage[item];
                    return result;
                  }, {})
                );
                return;
              }

              callback({ ...storage });
            },
            set(values, callback) {
              Object.assign(storage, values);
              callback?.();
            },
            remove(key, callback) {
              [].concat(key).forEach((item) => {
                delete storage[item];
              });
              callback?.();
            }
          }
        }
      };

      try {
        Object.defineProperty(window, "chrome", {
          configurable: true,
          value: chromeMock
        });
      } catch (error) {
        Object.assign(window.chrome, chromeMock);
      }
    },
    { batchStorageKey, seedBatch, currentTabUrl }
  );

  await page.goto(popupUrl);
  await page.locator('[data-workspace-tab="batch"]').click();
  try {
    await page.waitForSelector("#batchList .batch-item", { timeout: 8000 });
  } catch (error) {
    console.error(
      JSON.stringify(
        {
          pageErrors,
          consoleMessages,
          status: await page.locator("#statusText").textContent().catch(() => ""),
          batchText: await page.locator("#batchList").textContent().catch(() => ""),
          bodyText: (await page.locator("body").textContent().catch(() => "")).slice(0, 1200)
        },
        null,
        2
      )
    );
    await browser.close();
    browser = null;
    throw error;
  }

  assert((await page.locator("#batchList .batch-item").count()) === 4, "应恢复 4 个批量项");
  assert(
    (await page.locator('.batch-item[data-batch-id="batch-c"] .batch-item-meta').textContent()).includes("分类：Eyeshadow / Makeup"),
    "带分类的批量项应显示分类信息"
  );
  assert(
    !(await page.locator("#batchReportPanel").count()),
    "批量汇总面板已从批量操作主流程移除"
  );
  const batchBodyOrder = await page.evaluate(() =>
    Array.from(document.querySelectorAll("#batchBody > *")).map((element) => ({
      id: element.id || "",
      className: element.className || ""
    }))
  );
  const batchListIndex = batchBodyOrder.findIndex((item) => item.id === "batchList");
  const batchSearchIndex = batchBodyOrder.findIndex((item) =>
    String(item.className).includes("batch-search-control")
  );
  const batchEditIndex = batchBodyOrder.findIndex((item) => item.id === "batchEditPanel");
  assert(
    batchSearchIndex >= 0 && batchListIndex === batchSearchIndex + 1,
    "产品队列应紧跟搜索区域"
  );
  assert(
    batchListIndex >= 0 && batchEditIndex >= 0 && batchListIndex < batchEditIndex,
    "批量编辑应放在产品队列后面"
  );
  assert(
    (await page.locator('.batch-risk-badge[data-risk="images"]').count()) === 1,
    "应高亮 1 个无图商品"
  );
  assert(
    (await page.locator('.batch-risk-badge[data-risk="price"]').count()) === 1,
    "应高亮 1 个无价格商品"
  );
  assert(
    await page.locator("#exportSelectedBatchCsvButton").isEnabled(),
    "已有选中成功商品时应允许导出所选"
  );
  await page.locator("#batchVendorInput").fill("Batch Vendor");
  await page.locator("#batchTypeInput").fill("Batch Type");
  await page.locator("#batchTagsInput").fill("batch-edited, p0");
  await page.locator("#batchStatusSelect").selectOption("active");
  await page.locator("#batchPublishedSelect").selectOption("true");
  await page.waitForFunction(() => !document.querySelector("#applyBatchEditButton")?.disabled);
  await page.locator("#applyBatchEditButton").click();
  await page.waitForFunction(() =>
    document.querySelector("#statusText")?.textContent.includes("已批量编辑")
  );

  const downloadPromise = page.waitForEvent("download");
  await page.locator("#exportSelectedBatchCsvButton").click();
  const download = await downloadPromise;
  assert(
    download.suggestedFilename().includes("selected"),
    "导出所选应使用 selected 文件名"
  );
  const downloadPath = await download.path();
  const csvText = await fs.readFile(downloadPath, "utf8");
  assert(csvText.includes("Batch Vendor"), "批量编辑品牌应写入导出 CSV");
  assert(csvText.includes("Batch Type"), "批量编辑类型应写入导出 CSV");
  assert(csvText.includes("batch-edited, p0"), "批量编辑标签应写入导出 CSV");
  assert(
    csvText.includes('"batch-edited, p0",true,active'),
    "批量编辑发布状态和商品状态应写入导出 CSV"
  );
  await download.delete().catch(() => {});

  assert(await page.locator("#fixDuplicateHandlesButton").isEnabled(), "重复 handle 应可修复");
  await page.locator("#fixDuplicateHandlesButton").click();
  await page.waitForFunction(() =>
    document.querySelector("#fixDuplicateHandlesButton")?.disabled
  );

  await page.locator('.batch-select-checkbox[data-batch-id="batch-a"]').uncheck();
  await page.locator('.batch-select-checkbox[data-batch-id="batch-d"]').check();
  await page.locator("#deleteSelectedBatchButton").click();
  await page.waitForFunction(() =>
    !document.querySelector('.batch-item[data-batch-id="batch-d"]')
  );
  assert(
    (await page.locator("#batchList .batch-item").count()) === 3,
    "删除所选后应剩余 3 个批量项"
  );

  await page.locator("#retryFailedBatchButton").click();
  await page.waitForSelector('.batch-item-title:text("Recovered Product")', {
    timeout: 8000
  });
  assert(
    (await page.locator("#batchProgressText").textContent()).includes("3/3 成功"),
    "失败项重试后应全部成功"
  );
  await page.locator('.batch-select-checkbox[data-batch-id="batch-c"]').check();
  const categoryDownloadPromise = page.waitForEvent("download");
  await page.locator("#exportSelectedBatchCsvButton").click();
  const categoryDownload = await categoryDownloadPromise;
  const categoryCsvText = await fs.readFile(await categoryDownload.path(), "utf8");
  assert(categoryCsvText.includes("Makeup"), "分类采集应写入商品类型");
  assert(
    categoryCsvText.includes("recovered, Eyeshadow, eye, shimmer"),
    "分类采集应合并商品原标签和分类标签"
  );
  await categoryDownload.delete().catch(() => {});
  assert(
    (await page.locator(".batch-log-item").count()) >= 5,
    "采集日志应记录关键操作"
  );

  await page.locator("#batchCategoryUrlInput").fill(
    "https://joyspringvitamins.com/collections/shop-by-benefit-detox"
  );
  await page.locator("#batchCategoryNameInput").fill("");
  await page.locator("#batchCategoryTypeInput").fill("");
  await page.locator("#batchCategoryTagsInput").fill("");
  await page.locator("#discoverCategoryUrlsButton").click();
  await page.waitForFunction(() =>
    document
      .querySelector("#batchUrlInput")
      ?.value.includes("https://joyspringvitamins.com/products/detox-drops")
  );
  assert(
    (await page.locator("#batchUrlInput").inputValue()).includes(
      "https://joyspringvitamins.com/products/detox-drops"
    ),
    "分类页 URL 发现应写入 Shopify 商品链接"
  );
  assert(
    (await page.evaluate(() => window.__batchCreatedTabs?.[0] || "")) ===
      "https://joyspringvitamins.com/collections/shop-by-benefit-detox",
    "分类页 URL 发现应使用后台标签页扫描指定 URL"
  );
  const detoxItem = page.locator(".batch-item").filter({ hasText: "Detox Drops" });
  assert((await detoxItem.count()) === 1, "分类页 URL 发现应添加 Shopify 商品到队列");
  assert(
    (await detoxItem.locator(".batch-item-meta").textContent()).includes(
      "分类：Shop By Benefit Detox"
    ),
    "分类页 URL 发现应从 URL 推断分类名称"
  );
  assert(pageErrors.length === 0, `页面不应有运行时错误：${pageErrors.join("; ")}`);

  await browser.close();
  browser = null;
  console.log(
    JSON.stringify(
      {
        ok: true,
        checks: [
          "恢复批量队列",
          "无图/无价格高亮",
          "批量汇总移除",
          "产品队列紧跟操作区",
          "导出所选",
          "批量编辑品牌、类型、标签、状态和发布设置",
          "重复 handle 修复",
          "多选删除",
          "失败项一键重试",
          "分类采集写入类型和标签",
          "分类 URL 后台发现 Shopify 商品",
          "采集日志"
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
