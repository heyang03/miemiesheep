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

const collectionUrl = "https://example.test/collections/immune";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const html = String.raw`<!doctype html>
<html>
  <head>
    <title>Immune Collection</title>
    <script type="application/json" id="collection-data">
      {
        "props": {
          "initialProducts": {
            "nodes": [
              {
                "__typename": "Product",
                "title": "Alpha Drops",
                "handle": "alpha-drops",
                "featuredImage": {
                  "url": "https://cdn.example.test/alpha.jpg"
                }
              },
              {
                "@type": "Product",
                "name": "Beta Gummies",
                "url": "/products/beta-gummies",
                "image": "https://cdn.example.test/beta.webp"
              }
            ]
          }
        }
      }
    </script>
  </head>
  <body>
    <header>
      <a href="/products/nav-only">Navigation Product</a>
    </header>
    <main>
      <article class="product-card">
        <a href="/products/dom-capsules">
          <img src="https://cdn.example.test/dom.jpg" alt="DOM Capsules">
          <h3>DOM Capsules</h3>
        </a>
      </article>
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

    await page.route(collectionUrl, (route) => {
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

    await page.goto(collectionUrl);
    await page.addScriptTag({ path: contentScriptPath });
    const response = await page.evaluate(
      () =>
        new Promise((resolve) => {
          window.__spcMessageListener({ type: "SPC_DISCOVER_PRODUCT_URLS" }, {}, resolve);
        })
    );

    assert(response.ok, response.error || "通用内嵌商品发现失败");

    const { urls, items, sourceLabel } = response.data;

    assert(sourceLabel === "Collection 页面", "应识别为 Collection 页面");
    assert(urls.length === 3, `应发现 3 个商品链接，实际 ${urls.length}`);
    assert(urls.includes("https://example.test/products/alpha-drops"), "应从 handle 生成商品链接");
    assert(urls.includes("https://example.test/products/beta-gummies"), "应从 JSON-LD url 生成商品链接");
    assert(urls.includes("https://example.test/products/dom-capsules"), "应保留 main 内 DOM 商品链接");
    assert(!urls.includes("https://example.test/products/nav-only"), "应过滤页头导航商品链接");
    assert(
      items.some(
        (item) =>
          item.title === "Alpha Drops" &&
          item.previewImageUrl === "https://cdn.example.test/alpha.jpg"
      ),
      "内嵌商品应带标题和预览图"
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
