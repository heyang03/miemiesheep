# 咩咩羊采集 1.0

咩咩羊采集 1.0 是一个 Chrome 扩展，用于从商品页和分类页采集商品信息，整理成 Shopify CSV 可导入的数据。

## 主要功能

- 采集当前商品页的标题、价格、原价/对比价、SKU、条码、图片和变体信息。
- 支持 Shopify、Amazon 以及可通过通用规则识别的商品页面。
- 支持分类页/集合页批量发现商品链接，并生成待采集队列。
- 支持分类页跨页发现，默认最多扫描 5 页，可在高级设置中调整。
- 支持图片管理、手动选择图片区域、质量检查、Alt 补全、域名替换和选中图片下载。
- 支持多变体管理、变体检查、Default Title 风险提示和 Shopify CSV 导出。
- 支持站点规则和手动选择区域，适配不同站点结构。

## 安装方式

1. 打开 Chrome，进入 `chrome://extensions/`。
2. 打开右上角的“开发者模式”。
3. 点击“加载已解压的扩展程序”。
4. 选择 `shopify-product-collector` 目录。
5. 打开商品页或分类页后，点击扩展图标或侧边栏开始采集。

## 使用说明

- “采集当前商品”用于当前页面的单品采集。
- “图片”区域用于管理、检查和下载采集到的图片。
- “变体”区域用于查看和编辑 Shopify 变体数据。
- “批量”区域用于从分类页发现商品链接、生成队列并批量采集。
- “工具”和“校验”区域用于规则配置、数据检查和导出前处理。

## 开发与验证

常用检查命令：

```bash
node --check shopify-product-collector/content.js
node --check shopify-product-collector/popup.js
node tools/run-p0-batch-ui-test.mjs
```

部分 Playwright 测试需要本机已安装或指定 Playwright 运行环境。

## 项目结构

```text
shopify-product-collector/
  manifest.json
  popup.html
  popup.js
  content.js
  background.js
  csv.js
tools/
  run-*.mjs
docs/
  项目文档与任务清单
```

