# Shopify Product Collector 多网站测试记录

版本：V1.8
用途：记录不同商品详情页的采集表现、问题和后续规则增强方向。

---

## 测试方法

1. 打开商品详情页。
2. 重新加载扩展后打开插件。
3. 点击“采集当前商品”。
4. 检查标题、价格、原价/对比价、SKU、品牌、描述、图片数量。
5. 必要时使用“选择区域”手动指定图片区域。
6. 点击“导出 CSV”，查看导出前校验结果。
7. 将实际结果记录到下方表格。

---

## 当前覆盖能力

| 能力 | 状态 | 说明 |
| --- | --- | --- |
| JSON-LD Product 递归识别 | 已增强 | 支持数组、@graph 和更深层嵌套对象 |
| JSON-LD Product 选择 | 已增强 | 优先选择标题、价格、图片、描述更完整的 Product |
| JSON-LD offers | 已增强 | 支持 offers 数组、AggregateOffer 和 priceSpecification |
| JSON-LD image | 已增强 | 支持字符串、数组、ImageObject、url、contentUrl、thumbnailUrl、image、src |
| Meta 图片 | 已增强 | 支持读取多个 og:image / twitter:image |
| DOM 价格兜底 | 已增强 | 增加 data-testid、data-test、money、price__regular、sale price 等常见选择器 |
| DOM 描述兜底 | 已增强 | 增加 data-testid、data-test、#description 等常见选择器 |
| 图片懒加载属性 | 已增强 | 增加 data-image、data-image-url、data-zoom-image、data-src-large、data-full 等 |
| 图片误采过滤 | 已增强 | 增加 loader、spinner、avatar、payment、rating、badge 等过滤关键词 |
| Shopify 图片 URL 标准化 | 已增强 | 自动升级 http 为 https，并去除 _100x100、_large、_grande 等尺寸后缀 |
| Amazon 列表页链接发现 | 已增强 | 支持 `/dp/{ASIN}`、`/sspa/click?url=...`、`/gp/slredirect/...` 并统一归一化为 `/dp/{ASIN}` |
| 当前域名专属采集规则 | 已新增 | 可保存标题、价格、原价、描述、品牌、SKU、图片区域 CSS 选择器，采集时优先应用 |
| 图片有效性与尺寸检测 | 已新增 | 支持加载检测、宽高读取、小图风险、失败图片风险，并写入导出前校验 |
| 批量编辑品牌和标签 | 已新增 | 支持对已选成功商品批量覆盖 Vendor 和 Tags，并写入多品 CSV |

---

## 多页面测试矩阵

| 序号 | 站点/页面类型 | 商品 URL | 标题 | 价格 | 描述 | 图片 | 导出校验 | 结果 | 备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Shopify 商品页 | https://www.raworganicwhey.com/collections/raw-organic-whey/products/raw-organic-whey | 通过：Raw Organic Whey Protein - 12 oz | 通过：29.99 | 通过：1156 字符 | 通过：2 张 | 通过：无错误/风险 | 通过 | source=json-ld；图片已标准化为 https 原图 |
| 2 | Shopify 落地页 | https://shop.truvani.com/pages/plant-based-protein | 通过：Truvani Plant Based Protein | 通过：49.99 | 通过：134 字符 | 通过：10 张 | 通过：无错误/风险 | 通过 | source=fallback；页面偏营销落地页，靠 DOM/Meta 兜底 |
| 3 | Shopify 商品页 | https://trybloomin.com/products/bloomin-shelajit-gummies-coc | 通过：Bloomin Shelajit Gummies. | 通过：49.95，原价 100 | 通过：94 字符 | 通过：9 张 | 通过：无错误/风险 | 通过 | source=json-ld；SKU=BL-GUM-JAR-60-MB，Vendor=Bloomin |
| 4 | 品牌产品页 | https://www.musclemilk.com/powders/genuine-protein/chocolate/4.94lb | 通过：Genuine Protein Powder Chocolate 4.94 lb | 风险：未采集到价格 | 通过：73 字符 | 通过：10 张 | 风险：价格为空，导出将使用 0.00 | 部分通过 | source=fallback；页面更像品牌信息页，未暴露购买价格 |
| 5 | Shopify 商品页 | https://necessaire.com/collections/best-sellers/products/the-body-retinol | 通过：The Body Retinol \| 0.1% Retinol | 通过：65.0 | 通过：1156 字符 | 通过：6 张 | 通过：无错误/风险 | 通过 | source=json-ld；SKU=6850619375729，Vendor=Nécessaire |

---

## 问题记录

| 日期 | 页面 | 问题 | 临时处理 | 后续规则 |
| --- | --- | --- | --- | --- |
| 2026-07-06 | Muscle Milk Genuine Protein Powder | 页面未暴露明确商品价格，采集价格为空 | 导出校验提示风险，CSV 价格兜底为 0.00 | 如后续需要，可针对无价格品牌页提示“需手动补价” |
| 2026-07-06 | Truvani Plant Based Protein | 页面是营销落地页，未命中标准 JSON-LD Product | DOM/Meta 兜底可采标题、价格、描述和图片 | 后续可增加落地页专区块识别和图片排序优化 |

---

## 最近一次自动测试结果

测试日期：2026-07-06

测试方式：Playwright 打开真实页面，注入当前扩展 `content.js`，调用 `SPC_COLLECT_PRODUCT`。

结果文件：`docs/v16-site-test-results.json`

## 最近一次列表页发现测试

测试日期：2026-07-06

测试方式：Playwright 构造 Amazon 搜索页 DOM，注入当前扩展 `content.js`，调用 `SPC_DISCOVER_PRODUCT_URLS`。

覆盖结果：

- 普通 `/dp/{ASIN}` 商品链接：通过
- Sponsored `/sspa/click?url=...` 商品链接：通过
- `/gp/slredirect/...` 商品链接：通过
- 重复 ASIN 去重：通过
- 商品标题和预览图提取：通过

## 最近一次站点规则测试

测试日期：2026-07-06

测试方式：Playwright 构造非标准商品页 DOM，在 `chrome.storage.local` 写入当前域名专属规则，注入 `content.js` 后调用 `SPC_TEST_SITE_RULE` 和 `SPC_COLLECT_PRODUCT`。

覆盖结果：

- 专属规则测试命中标题、价格和图片：通过
- 专属规则参与正式采集：通过
- 标题、价格、原价、描述、品牌、SKU、图片按规则覆盖：通过
- 采集来源显示为 `custom-rule`：通过

## 最近一次图片检测测试

测试日期：2026-07-06

测试方式：Playwright 恢复一个含 3 张图片的缓存草稿，mock 图片加载结果，点击“检查图片”，再触发 CSV 导出校验。

覆盖结果：

- 可加载大图显示宽高：通过
- 可加载但尺寸偏小图片显示小图风险：通过
- 加载失败图片显示失败风险：通过
- 导出前校验提示小图和失败图片风险：通过

## 最近一次批量编辑测试

测试日期：2026-07-07

测试方式：Playwright 恢复批量队列，选择成功商品，填写批量品牌、类型、标签、商品状态和网店发布设置，点击“应用到所选成功商品”，再导出所选 CSV 并读取文件内容。

覆盖结果：

- 批量设置 Vendor / 品牌：通过
- 批量设置 Type：通过
- 批量设置 Tags：通过
- 批量设置 Status：通过
- 批量设置 Published：通过
- 编辑后重新计算批量导出数据：通过
- 导出所选 CSV 包含批量编辑后的 Vendor、Type、Tags、Status 和 Published：通过

## 最近一次 Default Title 变体提示测试

测试日期：2026-07-07

测试方式：Playwright 恢复一个只有 Shopify `Default Title` 变体的缓存草稿和批量队列，点击“检查变体”，再触发 CSV 导出校验。

覆盖结果：

- 变体校验提示 `Default Title` 默认占位：通过
- 对应变体卡片显示 warning 标记：通过
- 批量队列显示“默认变体”风险徽标：通过
- 导出前校验继续保留 `Default Title` 风险：通过
