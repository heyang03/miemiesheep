const collectButton = document.getElementById("collectButton");
const exportCsvButton = document.getElementById("exportCsvButton");
const selectImageAreaButton = document.getElementById("selectImageAreaButton");
const addImageButton = document.getElementById("addImageButton");
const resetImageModeButton = document.getElementById("resetImageModeButton");
const addVariantButton = document.getElementById("addVariantButton");
const clearDraftButton = document.getElementById("clearDraftButton");
const resetAllButton = document.getElementById("resetAllButton");
const regenerateHandleButton = document.getElementById("regenerateHandleButton");
const batchTitleToggle = document.getElementById("batchTitleToggle");
const batchToggleButton = document.getElementById("batchToggleButton");
const batchBody = document.getElementById("batchBody");
const batchHeader = batchTitleToggle.closest(".accordion-header");
const batchSummary = document.getElementById("batchSummary");
const batchCount = document.getElementById("batchCount");
const batchUrlInput = document.getElementById("batchUrlInput");
const discoverBatchUrlsButton = document.getElementById("discoverBatchUrlsButton");
const prepareBatchButton = document.getElementById("prepareBatchButton");
const precheckBatchButton = document.getElementById("precheckBatchButton");
const startBatchButton = document.getElementById("startBatchButton");
const stopBatchButton = document.getElementById("stopBatchButton");
const exportBatchCsvButton = document.getElementById("exportBatchCsvButton");
const exportSelectedBatchCsvButton = document.getElementById("exportSelectedBatchCsvButton");
const retryFailedBatchButton = document.getElementById("retryFailedBatchButton");
const selectAllBatchButton = document.getElementById("selectAllBatchButton");
const deleteSelectedBatchButton = document.getElementById("deleteSelectedBatchButton");
const fixDuplicateHandlesButton = document.getElementById("fixDuplicateHandlesButton");
const clearBatchButton = document.getElementById("clearBatchButton");
const batchTimeoutInput = document.getElementById("batchTimeoutInput");
const batchProgressText = document.getElementById("batchProgressText");
const batchProgressBar = document.getElementById("batchProgressBar");
const batchEditPanel = document.getElementById("batchEditPanel");
const batchEditSummary = document.getElementById("batchEditSummary");
const batchVendorInput = document.getElementById("batchVendorInput");
const batchTagsInput = document.getElementById("batchTagsInput");
const applyBatchEditButton = document.getElementById("applyBatchEditButton");
const batchReportPanel = document.getElementById("batchReportPanel");
const batchReportSummary = document.getElementById("batchReportSummary");
const batchReportStats = document.getElementById("batchReportStats");
const batchValidationPanel = document.getElementById("batchValidationPanel");
const batchValidationSummary = document.getElementById("batchValidationSummary");
const batchValidationList = document.getElementById("batchValidationList");
const batchLogPanel = document.getElementById("batchLogPanel");
const batchLogList = document.getElementById("batchLogList");
const clearBatchLogButton = document.getElementById("clearBatchLogButton");
const batchList = document.getElementById("batchList");
const statusDot = document.getElementById("statusDot");
const statusText = document.getElementById("statusText");
const pageTitleInput = document.getElementById("pageTitle");
const pageUrlInput = document.getElementById("pageUrl");
const pageDomainInput = document.getElementById("pageDomain");
const siteRuleTitleToggle = document.getElementById("siteRuleTitleToggle");
const siteRuleToggleButton = document.getElementById("siteRuleToggleButton");
const siteRuleBody = document.getElementById("siteRuleBody");
const siteRuleHeader = siteRuleTitleToggle.closest(".accordion-header");
const siteRuleSummary = document.getElementById("siteRuleSummary");
const siteRuleDomain = document.getElementById("siteRuleDomain");
const siteRuleTitleSelectorInput = document.getElementById("siteRuleTitleSelector");
const siteRulePriceSelectorInput = document.getElementById("siteRulePriceSelector");
const siteRuleCompareAtPriceSelectorInput = document.getElementById("siteRuleCompareAtPriceSelector");
const siteRuleDescriptionSelectorInput = document.getElementById("siteRuleDescriptionSelector");
const siteRuleVendorSelectorInput = document.getElementById("siteRuleVendorSelector");
const siteRuleSkuSelectorInput = document.getElementById("siteRuleSkuSelector");
const siteRuleImageSelectorInput = document.getElementById("siteRuleImageSelector");
const siteRuleVariantSelectorInput = document.getElementById("siteRuleVariantSelector");
const siteRulePickButtons = Array.from(document.querySelectorAll("[data-site-rule-field]"));
const siteRuleClearButtons = Array.from(document.querySelectorAll("[data-site-rule-clear-field]"));
const testSiteRuleButton = document.getElementById("testSiteRuleButton");
const saveSiteRuleButton = document.getElementById("saveSiteRuleButton");
const clearSiteRuleButton = document.getElementById("clearSiteRuleButton");
const siteRuleTestPanel = document.getElementById("siteRuleTestPanel");
const siteRuleTestSummary = document.getElementById("siteRuleTestSummary");
const siteRuleTestList = document.getElementById("siteRuleTestList");
const productPanel = document.getElementById("productPanel");
const productTitleInput = document.getElementById("productTitle");
const productPriceInput = document.getElementById("productPrice");
const productCompareAtPriceInput = document.getElementById("productCompareAtPrice");
const productSkuInput = document.getElementById("productSku");
const productVendorInput = document.getElementById("productVendor");
const productTypeInput = document.getElementById("productType");
const productTagsInput = document.getElementById("productTags");
const productStatusSelect = document.getElementById("productStatus");
const productPublishedSelect = document.getElementById("productPublished");
const productHandleInput = document.getElementById("productHandle");
const productDescriptionInput = document.getElementById("productDescription");
const sourceBadge = document.getElementById("sourceBadge");
const imageCount = document.getElementById("imageCount");
const imageSourceInfo = document.getElementById("imageSourceInfo");
const imageGrid = document.getElementById("imageGrid");
const cacheHint = document.getElementById("cacheHint");
const validationPanel = document.getElementById("validationPanel");
const validationSummary = document.getElementById("validationSummary");
const validationList = document.getElementById("validationList");
const resultTitleToggle = document.getElementById("resultTitleToggle");
const resultToggleButton = document.getElementById("resultToggleButton");
const resultBody = document.getElementById("resultBody");
const resultHeader = resultTitleToggle.closest(".accordion-header");
const variantCount = document.getElementById("variantCount");
const variantList = document.getElementById("variantList");
const variantTitleToggle = document.getElementById("variantTitleToggle");
const variantToggleButton = document.getElementById("variantToggleButton");
const variantSelectAllButton = document.getElementById("variantSelectAllButton");
const deleteSelectedVariantsButton = document.getElementById("deleteSelectedVariantsButton");
const excludeSelectedVariantsButton = document.getElementById("excludeSelectedVariantsButton");
const includeSelectedVariantsButton = document.getElementById("includeSelectedVariantsButton");
const variantBody = document.getElementById("variantBody");
const variantHeader = variantTitleToggle.closest(".accordion-header");
const imageTitleToggle = document.getElementById("imageTitleToggle");
const imageToggleButton = document.getElementById("imageToggleButton");
const imageSelectAllButton = document.getElementById("imageSelectAllButton");
const checkImagesButton = document.getElementById("checkImagesButton");
const filterSmallImagesButton = document.getElementById("filterSmallImagesButton");
const filterDuplicateImagesButton = document.getElementById("filterDuplicateImagesButton");
const fillImageAltButton = document.getElementById("fillImageAltButton");
const deleteSelectedImagesButton = document.getElementById("deleteSelectedImagesButton");
const imageSourceFilter = document.getElementById("imageSourceFilter");
const imageReplaceFromInput = document.getElementById("imageReplaceFromInput");
const imageReplaceToInput = document.getElementById("imageReplaceToInput");
const replaceImageDomainButton = document.getElementById("replaceImageDomainButton");
const imageBody = document.getElementById("imageBody");
const imageHeader = imageTitleToggle.closest(".accordion-header");

const BATCH_STORAGE_KEY = "spc:batch-queue:v1";
const SITE_RULE_EXPAND_AFTER_PICK_KEY = "spc:ui:site-rule-expand-after-pick";
const SITE_RULE_STORAGE_PREFIX = "spc:site-rule:";
const BATCH_TAB_LOAD_TIMEOUT_MS = 35000;
const MIN_BATCH_TIMEOUT_SECONDS = 8;
const MAX_BATCH_TIMEOUT_SECONDS = 90;
const BATCH_PREVIEW_HYDRATE_CONCURRENCY = 3;
const IMAGE_CHECK_TIMEOUT_MS = 10000;
const MIN_RECOMMENDED_IMAGE_SIDE = 300;
const SITE_RULE_FIELD_LABELS = {
  title: "标题",
  price: "价格",
  compareAtPrice: "原价",
  description: "描述",
  vendor: "品牌",
  sku: "SKU",
  images: "图片区域",
  variants: "变体区域"
};

let currentProductDraft = null;
let currentDraftKey = "";
let currentTabUrl = "";
let currentImagePickerStatus = null;
let saveTimer = null;
let batchItems = [];
let selectedBatchItemIds = new Set();
let batchLogs = [];
let currentSiteRule = null;
let isBatchCollecting = false;
let isBatchPreviewHydrating = false;
let isBatchPrechecking = false;
let isCheckingImages = false;
let shouldStopBatchCollection = false;
let draggedImageIndex = null;

function setStatus(message, type = "idle") {
  statusText.textContent = message;
  statusDot.dataset.status = type;
}

function setCollapsibleState(button, body, isExpanded) {
  if (!body) {
    return;
  }

  body.hidden = !isExpanded;
  body.closest(".collapsible-section")?.classList.toggle("is-collapsed", !isExpanded);
  document
    .querySelectorAll(`[aria-controls="${body.id}"]`)
    .forEach((control) => {
      control.setAttribute("aria-expanded", String(isExpanded));

      if (control.classList.contains("section-toggle-button")) {
        control.textContent = isExpanded ? "收起" : "展开";
      }
    });
}

function bindCollapsibleSection(button, body) {
  if (!button || !body) {
    return;
  }

  button.addEventListener("click", () => {
    setCollapsibleState(button, body, button.getAttribute("aria-expanded") !== "true");
  });
  button.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    setCollapsibleState(button, body, button.getAttribute("aria-expanded") !== "true");
  });
}

function bindCollapsibleHeader(header, body) {
  if (!header || !body) {
    return;
  }

  header.addEventListener("click", (event) => {
    const interactiveTarget = event.target.closest(
      "button, input, select, textarea, a, label, [role='button']"
    );

    if (interactiveTarget && interactiveTarget !== header) {
      return;
    }

    setCollapsibleState(header, body, body.hidden);
  });
}

function getDomain(url) {
  try {
    return new URL(url).hostname;
  } catch (error) {
    return "";
  }
}

function normalizePageUrl(url) {
  try {
    const parsedUrl = new URL(url);
    parsedUrl.hash = "";
    parsedUrl.search = "";

    if (/amazon\./i.test(parsedUrl.hostname)) {
      const asinMatch = parsedUrl.pathname.match(/\/dp\/([A-Z0-9]{10})/i);

      if (asinMatch) {
        parsedUrl.pathname = `/dp/${asinMatch[1].toUpperCase()}`;
      }
    }

    return parsedUrl.href;
  } catch (error) {
    return url || "";
  }
}

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
  return `spc:product-draft:${hashString(normalizePageUrl(url))}`;
}

async function getCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

function renderPageInfo(pageInfo) {
  const title = pageInfo.title || "尚未采集";
  const url = pageInfo.url || "尚未采集";
  const domain = getDomain(pageInfo.url || "") || "尚未识别";

  [
    [pageTitleInput, title],
    [pageUrlInput, url],
    [pageDomainInput, domain]
  ].forEach(([element, value]) => {
    element.textContent = value;
    element.dataset.value = value;
    element.value = value;
    element.title = value;
  });
}

function chromeStorageGet(key) {
  return new Promise((resolve) => {
    chrome.storage.local.get(key, (result) => {
      resolve(result[key]);
    });
  });
}

function chromeStorageSet(values) {
  return new Promise((resolve) => {
    chrome.storage.local.set(values, resolve);
  });
}

function chromeStorageRemove(key) {
  return new Promise((resolve) => {
    chrome.storage.local.remove(key, resolve);
  });
}

function getSiteRuleStorageKey(domain = getDomain(currentTabUrl || pageUrlInput.value || "")) {
  const normalizedDomain = String(domain || "").trim().toLowerCase();
  return normalizedDomain ? `${SITE_RULE_STORAGE_PREFIX}${normalizedDomain}` : "";
}

function normalizeSiteRule(rawRule = {}, domain = getDomain(currentTabUrl || pageUrlInput.value || "")) {
  const sourceRule = rawRule && typeof rawRule === "object" ? rawRule : {};
  const selectors = sourceRule.selectors || sourceRule || {};

  return {
    domain: String(sourceRule.domain || domain || "").trim().toLowerCase(),
    selectors: {
      title: String(selectors.title || "").trim(),
      price: String(selectors.price || "").trim(),
      compareAtPrice: String(selectors.compareAtPrice || "").trim(),
      description: String(selectors.description || "").trim(),
      vendor: String(selectors.vendor || "").trim(),
      sku: String(selectors.sku || "").trim(),
      images: String(selectors.images || "").trim(),
      variants: String(selectors.variants || "").trim()
    },
    updatedAt: sourceRule.updatedAt || ""
  };
}

function getSiteRuleSelectorCount(rule = currentSiteRule) {
  return Object.values(normalizeSiteRule(rule).selectors).filter(Boolean).length;
}

function hasSiteRuleSelectors(rule = currentSiteRule) {
  return getSiteRuleSelectorCount(rule) > 0;
}

function loadCurrentSiteRule() {
  const storageKey = getSiteRuleStorageKey();

  if (!storageKey) {
    return Promise.resolve(null);
  }

  return chromeStorageGet(storageKey);
}

function saveCurrentSiteRule(rule) {
  const storageKey = getSiteRuleStorageKey(rule.domain);

  if (!storageKey) {
    return Promise.reject(new Error("当前页面没有可保存规则的域名"));
  }

  return chromeStorageSet({
    [storageKey]: {
      ...normalizeSiteRule(rule, rule.domain),
      updatedAt: new Date().toISOString()
    }
  });
}

function clearCurrentSiteRule() {
  const storageKey = getSiteRuleStorageKey();

  if (!storageKey) {
    return Promise.resolve();
  }

  return chromeStorageRemove(storageKey);
}

function loadCachedDraft(url) {
  return chromeStorageGet(getDraftStorageKey(url));
}

function saveDraft(draft) {
  if (!currentDraftKey || !draft) {
    return Promise.resolve();
  }

  return chromeStorageSet({
    [currentDraftKey]: {
      draft,
      normalizedPageUrl: normalizePageUrl(currentTabUrl || draft.page?.url),
      savedAt: new Date().toISOString()
    }
  });
}

function getBatchTimeoutSeconds() {
  const value = Number(batchTimeoutInput?.value || BATCH_TAB_LOAD_TIMEOUT_MS / 1000);

  if (!Number.isFinite(value)) {
    return BATCH_TAB_LOAD_TIMEOUT_MS / 1000;
  }

  return Math.max(MIN_BATCH_TIMEOUT_SECONDS, Math.min(MAX_BATCH_TIMEOUT_SECONDS, value));
}

function getBatchTimeoutMs() {
  return getBatchTimeoutSeconds() * 1000;
}

function loadBatchState() {
  return chromeStorageGet(BATCH_STORAGE_KEY);
}

function saveBatchState() {
  return chromeStorageSet({
    [BATCH_STORAGE_KEY]: {
      items: batchItems,
      selectedIds: Array.from(selectedBatchItemIds),
      logs: batchLogs,
      settings: {
        timeoutSeconds: getBatchTimeoutSeconds()
      },
      savedAt: new Date().toISOString()
    }
  });
}

function normalizeBatchUrl(value) {
  const text = String(value || "").trim();

  if (!text) {
    return "";
  }

  try {
    const url = new URL(text);

    if (!/^https?:$/i.test(url.protocol)) {
      return "";
    }

    url.hash = "";
    return url.href;
  } catch (error) {
    return "";
  }
}

function parseBatchUrls(value) {
  const seen = new Set();

  return String(value || "")
    .split(/\r?\n/)
    .map(normalizeBatchUrl)
    .filter((url) => {
      if (!url || seen.has(url)) {
        return false;
      }

      seen.add(url);
      return true;
    });
}

function normalizeDiscoveredBatchItems(itemsOrUrls) {
  return (Array.isArray(itemsOrUrls) ? itemsOrUrls : [])
    .map((item) => {
      const rawItem = typeof item === "string" ? { url: item } : item || {};
      const url = normalizeBatchUrl(rawItem.url);

      if (!url) {
        return null;
      }

      return {
        url,
        title: cleanText(rawItem.title),
        previewImageUrl: String(rawItem.previewImageUrl || "").trim()
      };
    })
    .filter(Boolean);
}

function mergeBatchUrls(itemsOrUrls) {
  const discoveredItems = normalizeDiscoveredBatchItems(itemsOrUrls);
  const existingUrls = parseBatchUrls(
    [batchUrlInput.value, ...batchItems.map((item) => item.url)].join("\n")
  );
  const seen = new Set(existingUrls);
  const newItems = discoveredItems.filter((item) => {
    if (seen.has(item.url)) {
      return false;
    }

    seen.add(item.url);
    return true;
  });
  const mergedUrls = [...existingUrls, ...newItems.map((item) => item.url)];

  batchUrlInput.value = mergedUrls.join("\n");

  let updatedPreviewCount = 0;
  batchItems = batchItems.map((item) => {
    const discoveredItem = discoveredItems.find((candidate) => candidate.url === item.url);

    if (
      !discoveredItem ||
      (!discoveredItem.previewImageUrl && !discoveredItem.title) ||
      (item.previewImageUrl && (!discoveredItem.title || item.title !== "待采集"))
    ) {
      return item;
    }

    updatedPreviewCount += 1;
    return {
      ...item,
      title:
        item.title && item.title !== "待采集"
          ? item.title
          : discoveredItem.title || item.title,
      previewImageUrl: item.previewImageUrl || discoveredItem.previewImageUrl
    };
  });

  if (!newItems.length) {
    if (updatedPreviewCount) {
      renderBatchQueue();
      saveBatchState();
    }

    return {
      added: 0,
      total: mergedUrls.length,
      updated: updatedPreviewCount
    };
  }

  if (batchItems.length) {
    batchItems = [
      ...batchItems,
      ...newItems.map((item, index) =>
        createBatchItem(item.url, batchItems.length + index, item)
      )
    ];
  } else {
    batchItems = [
      ...existingUrls.map(createBatchItem),
      ...newItems.map((item, index) =>
        createBatchItem(item.url, existingUrls.length + index, item)
      )
    ];
  }

  renderBatchQueue();
  saveBatchState();

  return {
    added: newItems.length,
    total: mergedUrls.length,
    updated: updatedPreviewCount
  };
}

function cleanText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function htmlToText(value) {
  const text = String(value || "");

  if (!/[<>]/.test(text)) {
    return cleanText(text);
  }

  const element = document.createElement("div");
  element.innerHTML = text;
  return cleanText(element.textContent);
}

function normalizePriceText(value) {
  const text = cleanText(value);

  if (!text) {
    return "";
  }

  const priceCandidate = text.replace(/\s/g, "").match(/\d[\d.,]*/)?.[0];

  if (!priceCandidate) {
    return "";
  }

  const hasComma = priceCandidate.includes(",");
  const hasDot = priceCandidate.includes(".");
  let compact = priceCandidate;

  if (hasComma && hasDot) {
    const lastComma = priceCandidate.lastIndexOf(",");
    const lastDot = priceCandidate.lastIndexOf(".");
    compact =
      lastComma > lastDot
        ? priceCandidate.replace(/\./g, "").replace(",", ".")
        : priceCandidate.replace(/,/g, "");
  } else if (hasComma) {
    const commaParts = priceCandidate.split(",");
    const lastPart = commaParts[commaParts.length - 1];
    compact =
      lastPart.length > 0 && lastPart.length <= 2
        ? commaParts.slice(0, -1).join("") + "." + lastPart
        : priceCandidate.replace(/,/g, "");
  }

  return compact.match(/\d+(?:\.\d{1,2})?/g)?.[0] || "";
}

function formatShopifyMoney(value, isCents = false) {
  if (value == null || value === "") {
    return "";
  }

  if (typeof value === "object") {
    if (value.amount != null || value.value != null) {
      return formatShopifyMoney(value.amount ?? value.value, false);
    }

    if (value.cents != null) {
      return formatShopifyMoney(value.cents, true);
    }

    return formatShopifyMoney(value.price || "", isCents);
  }

  const text = cleanText(value);
  const numeric = Number(text);

  if (isCents && /^\d+$/.test(text) && Number.isFinite(numeric)) {
    return (numeric / 100).toFixed(2);
  }

  return normalizePriceText(text);
}

function normalizeShopifyBatchImageUrl(value, baseUrl) {
  if (!value) {
    return "";
  }

  const rawUrl =
    typeof value === "string"
      ? value
      : value.src || value.url || value.originalSrc || value.image || "";

  if (!rawUrl) {
    return "";
  }

  try {
    const secureUrl = new URL(rawUrl, baseUrl).href.replace(/^http:\/\//i, "https://");
    return secureUrl.replace(
      /_(?:pico|icon|thumb|small|compact|medium|large|grande|master|\d+x\d+|\d+x|x\d+)(\.(?:jpg|jpeg|png|webp))(\?.*)?$/i,
      "$1$2"
    );
  } catch (error) {
    return "";
  }
}

function getShopifyAjaxUrlFromProductUrl(productUrl) {
  try {
    const url = new URL(productUrl);
    const match = url.pathname.match(/^(.*\/products\/)([^/?#/.]+)(?:\.[^/?#]+)?/i);

    if (!match || /amazon\./i.test(url.hostname)) {
      return "";
    }

    return `${url.origin}${match[1]}${match[2]}.js`;
  } catch (error) {
    return "";
  }
}

function getShopifyBatchOptionName(product, index) {
  const options = product?.options_with_values || product?.options || [];
  const option = Array.isArray(options) ? options[index] : null;
  const name = cleanText(
    typeof option === "string" ? option : option?.name || option?.title
  );

  if (!name || /^(title|default title)$/i.test(name)) {
    return index === 0 ? "Option" : `Option${index + 1}`;
  }

  return name;
}

function getShopifyBatchVariantValue(variant, product, index) {
  return cleanText(
    variant?.[`option${index + 1}`] ||
      (Array.isArray(variant?.options) ? variant.options[index] : "")
  );
}

function collectShopifyBatchImages(product, pageUrl) {
  const images = [];

  (Array.isArray(product?.images) ? product.images : [product?.image])
    .filter(Boolean)
    .forEach((image) => {
      images.push(normalizeShopifyBatchImageUrl(image, pageUrl));
    });

  (Array.isArray(product?.variants) ? product.variants : []).forEach((variant) => {
    images.push(
      normalizeShopifyBatchImageUrl(variant.featured_image || variant.image, pageUrl)
    );
  });

  const seen = new Set();
  return images
    .filter(Boolean)
    .filter((url) => {
      const key = url.replace(/\?.*$/, "").toLowerCase();

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    })
    .map((url, index) => ({
      url,
      position: index + 1,
      altText: cleanText(product?.title || product?.name)
    }));
}

function normalizeShopifyBatchProduct(product, pageUrl) {
  const sourceVariants = Array.isArray(product?.variants) ? product.variants : [];
  const variants = sourceVariants.map((variant, index) => {
    const option1Value = getShopifyBatchVariantValue(variant, product, 0);
    const option2Value = getShopifyBatchVariantValue(variant, product, 1);
    const option3Value = getShopifyBatchVariantValue(variant, product, 2);
    const isDefaultOnly =
      sourceVariants.length === 1 && (!option1Value || /^default title$/i.test(option1Value));

    return {
      sku: cleanText(variant?.sku),
      barcode: cleanText(variant?.barcode),
      option1Name: isDefaultOnly ? "Default Title" : getShopifyBatchOptionName(product, 0),
      option1Value: isDefaultOnly ? "Default Title" : option1Value || `Variant ${index + 1}`,
      option2Name: option2Value ? getShopifyBatchOptionName(product, 1) : "",
      option2Value,
      option3Name: option3Value ? getShopifyBatchOptionName(product, 2) : "",
      option3Value,
      price: formatShopifyMoney(variant?.price, true),
      compareAtPrice: formatShopifyMoney(
        variant?.compare_at_price || variant?.compareAtPrice,
        true
      ),
      variantImageUrl: normalizeShopifyBatchImageUrl(
        variant?.featured_image || variant?.image,
        pageUrl
      )
    };
  });
  const firstVariant = variants[0] || {};
  const title = cleanText(product?.title || product?.name);

  return normalizeDraft({
    title,
    description: htmlToText(product?.description || product?.body_html),
    vendor: cleanText(product?.vendor),
    type: cleanText(product?.type || product?.product_type),
    tags: Array.isArray(product?.tags) ? product.tags.join(", ") : cleanText(product?.tags),
    handle: cleanText(product?.handle) || generateHandle(title),
    sku: firstVariant.sku || cleanText(product?.sku),
    price:
      formatShopifyMoney(product?.price_min || product?.price, true) ||
      firstVariant.price ||
      "",
    compareAtPrice:
      formatShopifyMoney(product?.compare_at_price_min || product?.compare_at_price, true) ||
      firstVariant.compareAtPrice ||
      "",
    images: collectShopifyBatchImages(product, pageUrl),
    variants,
    source: "shopify-api",
    page: {
      title,
      url: pageUrl
    }
  });
}

async function tryCollectShopifyAjaxFromUrl(productUrl, timeoutMs = getBatchTimeoutMs()) {
  const ajaxUrl = getShopifyAjaxUrlFromProductUrl(productUrl);

  if (!ajaxUrl) {
    return null;
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(ajaxUrl, {
      credentials: "omit",
      headers: {
        Accept: "application/json"
      },
      signal: controller.signal
    });

    if (!response.ok) {
      return null;
    }

    const product = await response.json();

    if (!product || !Array.isArray(product.variants)) {
      return null;
    }

    return normalizeShopifyBatchProduct(product, productUrl);
  } catch (error) {
    return null;
  } finally {
    window.clearTimeout(timeout);
  }
}

function createBatchItem(url, index = 0, metadata = {}) {
  return {
    id: `${Date.now()}-${index}-${hashString(url)}`,
    url,
    status: "pending",
    title: metadata.title || "待采集",
    previewImageUrl: metadata.previewImageUrl || "",
    previewStatus: metadata.previewImageUrl ? "loaded" : "",
    source: "",
    handle: "",
    error: "",
    errorType: "",
    precheckStatus: "",
    precheckMessage: "",
    httpStatus: 0,
    warningCount: 0,
    rowCount: 0,
    product: null,
    updatedAt: new Date().toISOString()
  };
}

function normalizeBatchItems(items) {
  return (Array.isArray(items) ? items : [])
    .map((item, index) => {
      const url = normalizeBatchUrl(item?.url);

      if (!url) {
        return null;
      }

      return {
        ...createBatchItem(url, index),
        ...item,
        id: item?.id || `${Date.now()}-${index}-${hashString(url)}`,
        url,
        status:
          item?.status === "running"
            ? "pending"
            : ["pending", "success", "error"].includes(item?.status)
              ? item.status
              : "pending",
        product: item?.product || null,
        error: item?.error || "",
        errorType: item?.errorType || "",
        precheckStatus: ["ok", "warning", "error"].includes(item?.precheckStatus)
          ? item.precheckStatus
          : "",
        precheckMessage: item?.precheckMessage || "",
        httpStatus: Number(item?.httpStatus || 0),
        title: item?.title || item?.product?.title || "待采集",
        previewImageUrl:
          item?.previewImageUrl ||
          item?.product?.images?.find((image) => image?.url)?.url ||
          "",
        previewStatus:
          item?.previewImageUrl || item?.product?.images?.some((image) => image?.url)
            ? "loaded"
            : item?.previewStatus === "error"
              ? "error"
              : "",
        source: item?.source || item?.product?.source || "",
        handle: item?.handle || item?.product?.handle || "",
        warningCount: Number(item?.warningCount || 0),
        rowCount: Number(item?.rowCount || 0)
      };
    })
    .filter(Boolean);
}

function normalizeBatchLogs(logs) {
  return (Array.isArray(logs) ? logs : [])
    .map((log, index) => ({
      id: log?.id || `${Date.now()}-${index}`,
      level: ["info", "success", "warning", "error"].includes(log?.level)
        ? log.level
        : "info",
      message: cleanText(log?.message),
      title: cleanText(log?.title),
      url: cleanText(log?.url),
      time: log?.time || new Date().toISOString()
    }))
    .filter((log) => log.message)
    .slice(-80);
}

function pruneSelectedBatchItems() {
  const existingIds = new Set(batchItems.map((item) => item.id));
  selectedBatchItemIds = new Set(
    Array.from(selectedBatchItemIds).filter((id) => existingIds.has(id))
  );
}

function getSelectedBatchItems() {
  pruneSelectedBatchItems();
  return batchItems.filter((item) => selectedBatchItemIds.has(item.id));
}

function getBatchProductItems(options = {}) {
  const selectedOnly = Boolean(options.selectedOnly);

  return batchItems.filter((item) => {
    if (item.status !== "success" || !item.product) {
      return false;
    }

    return !selectedOnly || selectedBatchItemIds.has(item.id);
  });
}

function getSelectedSuccessfulBatchItems() {
  return getSelectedBatchItems().filter((item) => item.status === "success" && item.product);
}

function normalizeBatchTags(value) {
  return String(value || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .filter((tag, index, tags) => tags.findIndex(
      (candidate) => candidate.toLowerCase() === tag.toLowerCase()
    ) === index)
    .join(", ");
}

function getBatchItemRisks(item) {
  if (item?.status !== "success" || !item.product) {
    return [];
  }

  const product = normalizeDraft(item.product);
  const images = normalizeImages(product.images, product.title).filter((image) =>
    String(image.url || "").trim()
  );
  const variants = normalizeVariants(product, images);
  const hasPrice = variants.some((variant) =>
    String(variant.price || product.price || "").trim()
  );
  const risks = [];

  if (!images.length) {
    risks.push({ type: "images", label: "无图" });
  }

  if (!hasPrice) {
    risks.push({ type: "price", label: "无价格" });
  }

  return risks;
}

function itemHasBatchRisk(item, type) {
  return getBatchItemRisks(item).some((risk) => risk.type === type);
}

function getBatchRiskCount(type) {
  return batchItems.filter((item) => itemHasBatchRisk(item, type)).length;
}

function getBatchDuplicateHandleGroups(items = batchItems) {
  const firstByHandle = new Map();
  const groups = new Map();

  items.forEach((item) => {
    if (item.status !== "success" || !item.product) {
      return;
    }

    const handle = String(item.product.handle || item.handle || "").trim();

    if (!handle) {
      return;
    }

    if (!firstByHandle.has(handle)) {
      firstByHandle.set(handle, item);
      return;
    }

    if (!groups.has(handle)) {
      groups.set(handle, [firstByHandle.get(handle)]);
    }

    groups.get(handle).push(item);
  });

  return Array.from(groups, ([handle, groupItems]) => ({ handle, items: groupItems }));
}

function hasDuplicateBatchHandles() {
  return getBatchDuplicateHandleGroups().length > 0;
}

function getBatchStats() {
  return batchItems.reduce(
    (stats, item) => {
      stats.total += 1;
      stats[item.status] = (stats[item.status] || 0) + 1;
      return stats;
    },
    { total: 0, pending: 0, running: 0, success: 0, error: 0 }
  );
}

function getBatchItemStatusLabel(item) {
  const labels = {
    pending: "待采集",
    running: "采集中",
    success: "已完成",
    error: "失败"
  };

  return labels[item.status] || "待采集";
}

function getBatchErrorTypeLabel(type) {
  const labels = {
    timeout: "超时",
    network: "网络",
    precheck: "预检查",
    api: "API",
    page: "页面",
    blocked: "阻断",
    noProduct: "无商品",
    unknown: "未知"
  };

  return labels[type] || "";
}

function getBatchPrecheckLabel(item) {
  if (item.precheckStatus === "ok") {
    return item.httpStatus ? `链接 ${item.httpStatus}` : "链接可访问";
  }

  if (item.precheckStatus === "warning") {
    return "预检查不确定";
  }

  if (item.precheckStatus === "error") {
    return item.httpStatus ? `链接 ${item.httpStatus}` : "链接异常";
  }

  return "";
}

function addBatchLog(level, message, item = null) {
  batchLogs = [
    ...batchLogs,
    {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      level,
      message,
      title: item?.title || item?.product?.title || "",
      url: item?.url || "",
      time: new Date().toISOString()
    }
  ].slice(-80);

  renderBatchLog();
  saveBatchState();
}

function createBatchStat(label, value, tone = "neutral") {
  const stat = document.createElement("div");
  const labelElement = document.createElement("span");
  const valueElement = document.createElement("strong");

  stat.className = "batch-report-stat";
  stat.dataset.tone = tone;
  labelElement.textContent = label;
  valueElement.textContent = String(value);
  stat.append(labelElement, valueElement);

  return stat;
}

function renderBatchReport() {
  clearElement(batchReportStats);

  if (!batchItems.length) {
    batchReportPanel.hidden = true;
    batchReportSummary.textContent = "等待队列";
    return;
  }

  const stats = getBatchStats();
  const selectedCount = getSelectedBatchItems().length;
  const imageRiskCount = getBatchRiskCount("images");
  const priceRiskCount = getBatchRiskCount("price");
  const riskCount = imageRiskCount + priceRiskCount;

  batchReportPanel.hidden = false;
  batchReportSummary.textContent = riskCount
    ? `${riskCount} 个风险需处理`
    : "当前无关键风险";
  batchReportStats.append(
    createBatchStat("总数", stats.total),
    createBatchStat("成功", stats.success, "success"),
    createBatchStat("失败", stats.error, stats.error ? "danger" : "neutral"),
    createBatchStat("待采集", stats.pending),
    createBatchStat("已选", selectedCount, selectedCount ? "success" : "neutral"),
    createBatchStat("无图", imageRiskCount, imageRiskCount ? "warning" : "neutral"),
    createBatchStat("无价格", priceRiskCount, priceRiskCount ? "warning" : "neutral")
  );
}

function renderBatchExportValidation(products = getBatchProducts()) {
  clearElement(batchValidationList);

  if (!products.length) {
    batchValidationPanel.hidden = true;
    batchValidationSummary.textContent = "等待校验";
    return { errors: [], warnings: [] };
  }

  const validation = getBatchExportValidation(products);
  const issues = [
    ...validation.errors.map((issue) => ({ ...issue, level: "error" })),
    ...validation.warnings.map((issue) => ({ ...issue, level: "warning" }))
  ];

  batchValidationPanel.hidden = false;
  batchValidationSummary.textContent = validation.errors.length
    ? `${validation.errors.length} 错误`
    : validation.warnings.length
      ? `${validation.warnings.length} 风险`
      : "校验通过";

  if (!issues.length) {
    const item = document.createElement("li");
    item.className = "batch-validation-item";
    item.dataset.level = "success";
    item.textContent = "成功商品已通过导出校验。";
    batchValidationList.appendChild(item);
    return validation;
  }

  issues.forEach((issue) => {
    const item = document.createElement("li");
    item.className = "batch-validation-item";
    item.dataset.level = issue.level;
    item.textContent = issue.message;
    batchValidationList.appendChild(item);
  });

  return validation;
}

function updateBatchEditControls() {
  const targetItems = getSelectedSuccessfulBatchItems();
  const hasEditValue = Boolean(batchVendorInput.value.trim() || batchTagsInput.value.trim());

  batchEditSummary.textContent = targetItems.length
    ? `将应用到 ${targetItems.length} 个已选成功商品`
    : "选择成功商品后可编辑";
  applyBatchEditButton.disabled = isBatchCollecting || !targetItems.length || !hasEditValue;
}

function applyBatchEditsToSelectedItems() {
  if (isBatchCollecting) {
    return;
  }

  const targetItems = getSelectedSuccessfulBatchItems();
  const vendor = batchVendorInput.value.trim();
  const tags = normalizeBatchTags(batchTagsInput.value);

  if (!targetItems.length) {
    setStatus("请先选择已采集成功的商品", "error");
    return;
  }

  if (!vendor && !tags) {
    setStatus("请填写品牌/供应商或标签后再应用", "error");
    return;
  }

  targetItems.forEach((item) => {
    const product = normalizeDraft({
      ...item.product,
      vendor: vendor || item.product.vendor || "",
      tags: tags || item.product.tags || ""
    });

    updateBatchItemFromProduct(item, product);
  });

  renderBatchQueue();
  saveBatchState();
  addBatchLog(
    "success",
    `批量编辑已应用：${targetItems.length} 个商品${vendor ? "，品牌/供应商已更新" : ""}${tags ? "，标签已更新" : ""}`
  );
  setStatus(`已批量编辑 ${targetItems.length} 个商品`, "success");
}

function renderBatchLog() {
  clearElement(batchLogList);

  if (!batchLogs.length) {
    batchLogPanel.hidden = true;
    return;
  }

  batchLogPanel.hidden = false;
  batchLogs
    .slice()
    .reverse()
    .forEach((log) => {
      const item = document.createElement("li");
      const time = document.createElement("span");
      const message = document.createElement("strong");
      const context = document.createElement("span");
      const date = new Date(log.time);

      item.className = "batch-log-item";
      item.dataset.level = log.level;
      time.textContent = Number.isNaN(date.getTime())
        ? ""
        : date.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
      message.textContent = log.message;
      context.textContent = log.title || log.url || "";
      item.append(time, message, context);
      batchLogList.appendChild(item);
    });
}

function updateBatchControls() {
  const stats = getBatchStats();
  const doneCount = stats.success + stats.error;
  const progressValue = stats.total ? Math.round((doneCount / stats.total) * 100) : 0;
  const hasCollectable = batchItems.some((item) => item.status !== "success");
  const hasSuccess = batchItems.some((item) => item.status === "success" && item.product);
  const selectedItems = getSelectedBatchItems();
  const hasSelectedSuccess = selectedItems.some(
    (item) => item.status === "success" && item.product
  );
  const allSelected = stats.total > 0 && selectedItems.length === stats.total;

  batchCount.textContent = `${stats.total} 个`;
  batchProgressBar.value = progressValue;
  batchProgressText.textContent = stats.total
    ? `${stats.success}/${stats.total} 成功，${stats.error} 失败，${stats.pending} 待采集`
    : "等待生成队列";
  batchSummary.textContent = isBatchCollecting
    ? "正在按顺序采集队列，当前商品完成后可停止。"
    : stats.total
      ? `${stats.success} 个成功，${stats.error} 个失败，可继续采集或导出成功商品。`
      : "粘贴商品链接，一行一个；采集完成后可合并导出 Shopify CSV。";

  discoverBatchUrlsButton.disabled = isBatchCollecting;
  prepareBatchButton.disabled = isBatchCollecting;
  precheckBatchButton.disabled = isBatchCollecting || isBatchPrechecking || !stats.total;
  precheckBatchButton.textContent = isBatchPrechecking ? "检查中" : "预检查链接";
  startBatchButton.disabled = isBatchCollecting || !stats.total || !hasCollectable;
  stopBatchButton.disabled = !isBatchCollecting;
  exportBatchCsvButton.disabled = isBatchCollecting || !hasSuccess;
  exportSelectedBatchCsvButton.disabled = isBatchCollecting || !hasSelectedSuccess;
  retryFailedBatchButton.disabled = isBatchCollecting || !stats.error;
  selectAllBatchButton.disabled = isBatchCollecting || !stats.total;
  selectAllBatchButton.textContent = allSelected ? "取消全选" : "全选";
  deleteSelectedBatchButton.disabled = isBatchCollecting || !selectedItems.length;
  fixDuplicateHandlesButton.disabled = isBatchCollecting || !hasDuplicateBatchHandles();
  clearBatchButton.disabled = isBatchCollecting || !stats.total;
  updateBatchEditControls();
  renderBatchReport();
  renderBatchExportValidation();
}

function renderBatchQueue() {
  clearElement(batchList);
  pruneSelectedBatchItems();

  if (!batchItems.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "暂无批量队列。粘贴商品链接后点击“生成队列”。";
    batchList.appendChild(empty);
    updateBatchControls();
    renderBatchLog();
    return;
  }

  batchItems.forEach((item, index) => {
    const article = document.createElement("article");
    const selector = document.createElement("label");
    const checkbox = document.createElement("input");
    const selectorText = document.createElement("span");
    const preview = document.createElement("div");
    const main = document.createElement("div");
    const status = document.createElement("span");
    const title = document.createElement("div");
    const url = document.createElement("div");
    const meta = document.createElement("div");
    const actions = document.createElement("div");
    const risks = getBatchItemRisks(item);

    article.className = "batch-item";
    article.dataset.status = item.status;
    article.dataset.batchId = item.id;
    article.dataset.riskImages = String(risks.some((risk) => risk.type === "images"));
    article.dataset.riskPrice = String(risks.some((risk) => risk.type === "price"));
    article.classList.toggle("is-selected", selectedBatchItemIds.has(item.id));
    selector.className = "batch-item-selector";
    checkbox.type = "checkbox";
    checkbox.className = "batch-select-checkbox";
    checkbox.dataset.batchId = item.id;
    checkbox.checked = selectedBatchItemIds.has(item.id);
    checkbox.disabled = isBatchCollecting;
    selectorText.textContent = "选择";
    preview.className = "batch-item-preview";
    preview.dataset.previewStatus = item.previewStatus || "";
    preview.dataset.batchAction = "open";
    preview.dataset.batchId = item.id;
    preview.setAttribute("role", "button");
    preview.setAttribute("tabindex", "0");
    preview.setAttribute("aria-label", `打开 ${item.title || item.url}`);
    if (item.previewImageUrl) {
      const previewImage = document.createElement("img");
      previewImage.src = item.previewImageUrl;
      previewImage.alt = item.title || "商品预览";
      previewImage.loading = "lazy";
      preview.appendChild(previewImage);
    } else {
      const placeholder = document.createElement("span");
      placeholder.textContent = item.previewStatus === "loading" ? "补图中" : "无图";
      preview.appendChild(placeholder);
    }
    main.className = "batch-item-main";
    status.className = "batch-item-status";
    title.className = "batch-item-title";
    url.className = "batch-item-url";
    meta.className = "batch-item-meta";
    actions.className = "batch-item-actions";

    status.textContent = getBatchItemStatusLabel(item);
    title.textContent = item.title || `商品 #${index + 1}`;
    title.dataset.batchAction = "open";
    title.dataset.batchId = item.id;
    title.setAttribute("role", "button");
    title.setAttribute("tabindex", "0");
    title.setAttribute("aria-label", `打开 ${item.title || item.url}`);
    url.textContent = item.url;

    if (item.status === "success") {
      meta.textContent = `${item.source || "自动"} · ${item.rowCount || 0} 行 · ${item.warningCount || 0} 风险`;
    } else if (item.status === "error") {
      const errorTypeLabel = getBatchErrorTypeLabel(item.errorType);
      meta.textContent = `${errorTypeLabel ? `${errorTypeLabel} · ` : ""}${item.error || "采集失败"}`;
    } else if (item.previewStatus === "loading") {
      meta.textContent = "正在通过 Shopify API 补充预览图";
    } else {
      meta.textContent = "等待后台标签页采集";
    }

    selector.append(checkbox, selectorText);

    if (risks.length || item.precheckStatus) {
      const riskList = document.createElement("div");
      riskList.className = "batch-risk-list";
      risks.forEach((risk) => {
        const badge = document.createElement("span");
        badge.className = "batch-risk-badge";
        badge.dataset.risk = risk.type;
        badge.textContent = risk.label;
        riskList.appendChild(badge);
      });
      if (item.precheckStatus) {
        const badge = document.createElement("span");
        badge.className = "batch-risk-badge";
        badge.dataset.risk = `precheck-${item.precheckStatus}`;
        badge.textContent = getBatchPrecheckLabel(item);
        badge.title = item.precheckMessage || "";
        riskList.appendChild(badge);
      }
      main.append(status, title, url, meta, riskList);
    } else {
      main.append(status, title, url, meta);
    }

    if (item.status === "success") {
      actions.append(
        createBatchItemButton("view", "查看", item.id),
        createBatchItemButton("open", "打开", item.id),
        createBatchItemButton("retry", "重采", item.id),
        createBatchItemButton("remove", "删除", item.id, true)
      );
    } else if (item.status === "error") {
      actions.append(
        createBatchItemButton("open", "打开", item.id),
        createBatchItemButton("retry", "重试", item.id),
        createBatchItemButton("remove", "删除", item.id, true)
      );
    } else if (item.status !== "running") {
      actions.append(
        createBatchItemButton("open", "打开", item.id),
        createBatchItemButton("remove", "删除", item.id, true)
      );
    } else {
      actions.append(createBatchItemButton("open", "打开", item.id));
    }

    article.append(selector, preview, main, actions);
    batchList.appendChild(article);
  });

  updateBatchControls();
  renderBatchLog();
}

function createBatchItemButton(action, label, id, danger = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = danger ? "ghost-button danger-ghost-button" : "ghost-button";
  button.dataset.batchAction = action;
  button.dataset.batchId = id;
  button.textContent = label;
  return button;
}

function prepareBatchQueue() {
  if (isBatchCollecting) {
    return;
  }

  const urls = parseBatchUrls(batchUrlInput.value);

  if (!urls.length) {
    setStatus("请先粘贴有效的 http/https 商品链接", "error");
    return;
  }

  batchItems = urls.map(createBatchItem);
  selectedBatchItemIds = new Set();
  renderBatchQueue();
  saveBatchState();
  addBatchLog("info", `已生成 ${batchItems.length} 个商品的批量采集队列`);
  setStatus(`已生成 ${batchItems.length} 个商品的批量采集队列`, "success");
}

function getBatchPreviewHydrationCandidates() {
  return batchItems.filter(
    (item) =>
      !item.previewImageUrl &&
      item.status !== "success" &&
      item.previewStatus !== "loading" &&
      Boolean(getShopifyAjaxUrlFromProductUrl(item.url))
  );
}

function applyBatchPreviewProduct(item, product) {
  const previewImageUrl = product?.images?.find((image) => image?.url)?.url || "";

  if (product?.title) {
    item.title = product.title;
  }

  if (previewImageUrl) {
    item.previewImageUrl = previewImageUrl;
    item.previewStatus = "loaded";
    item.updatedAt = new Date().toISOString();
    return true;
  }

  item.previewStatus = "error";
  item.updatedAt = new Date().toISOString();
  return false;
}

async function hydrateBatchPreviewItem(itemId) {
  const item = batchItems.find((candidate) => candidate.id === itemId);

  if (!item || item.previewImageUrl || item.status === "success") {
    return false;
  }

  try {
    const product = await tryCollectShopifyAjaxFromUrl(item.url);
    const latestItem = batchItems.find((candidate) => candidate.id === itemId);

    if (!latestItem) {
      return false;
    }

    return applyBatchPreviewProduct(latestItem, product);
  } catch (error) {
    const latestItem = batchItems.find((candidate) => candidate.id === itemId);

    if (latestItem) {
      latestItem.previewStatus = "error";
      latestItem.updatedAt = new Date().toISOString();
    }

    return false;
  }
}

async function hydrateBatchPreviews(sourceLabel = "当前页面") {
  if (isBatchPreviewHydrating) {
    return;
  }

  const candidates = getBatchPreviewHydrationCandidates();

  if (!candidates.length) {
    return;
  }

  isBatchPreviewHydrating = true;
  candidates.forEach((item) => {
    item.previewStatus = "loading";
  });
  renderBatchQueue();
  await saveBatchState();

  let nextIndex = 0;
  let updatedCount = 0;

  async function worker() {
    while (nextIndex < candidates.length) {
      const item = candidates[nextIndex];
      nextIndex += 1;

      if (await hydrateBatchPreviewItem(item.id)) {
        updatedCount += 1;
      }
    }
  }

  try {
    await Promise.all(
      Array.from(
        { length: Math.min(BATCH_PREVIEW_HYDRATE_CONCURRENCY, candidates.length) },
        worker
      )
    );
  } finally {
    isBatchPreviewHydrating = false;
    renderBatchQueue();
    await saveBatchState();
  }

  if (updatedCount) {
    addBatchLog("success", `已通过 Shopify API 为 ${updatedCount} 个商品补充预览图`);
    setStatus(`已为 ${updatedCount} 个商品补充预览图`, "success");
  } else {
    addBatchLog("warning", `扫描 ${sourceLabel}：未能通过 Shopify API 补充预览图`);
  }
}

async function discoverBatchUrlsFromCurrentPage() {
  if (isBatchCollecting) {
    return;
  }

  discoverBatchUrlsButton.disabled = true;
  setStatus("正在从当前页面发现商品链接...", "loading");

  try {
    const tab = await getCurrentTab();

    if (!tab?.id) {
      throw new Error("没有找到当前活动标签页");
    }

    const response = await sendMessageWithInjection(tab.id, {
      type: "SPC_DISCOVER_PRODUCT_URLS"
    });

    if (!response?.ok) {
      throw new Error(response?.error || "当前页面未返回商品链接");
    }

    const discoveredItems = Array.isArray(response.data?.items)
      ? response.data.items
      : response.data?.urls;
    const urls = Array.isArray(response.data?.urls) ? response.data.urls : [];
    const result = mergeBatchUrls(discoveredItems);
    const sourceLabel = response.data?.sourceLabel || "当前页面";

    if (!urls.length) {
      setStatus("当前页面未发现商品链接，可切换到商品列表页或 Collection 页", "error");
      return;
    }

    if (!result.added) {
      if (result.updated) {
        setStatus(
          `已扫描 ${sourceLabel}，无新增链接，已更新 ${result.updated} 个商品预览图`,
          "success"
        );
        addBatchLog(
          "success",
          `扫描 ${sourceLabel}：无新增，更新 ${result.updated} 个商品预览图`
        );
        hydrateBatchPreviews(sourceLabel);
        return;
      }

      setStatus(`已扫描 ${sourceLabel}，发现 ${urls.length} 个链接，均已在队列中`, "idle");
      addBatchLog("info", `扫描 ${sourceLabel}：发现 ${urls.length} 个链接，无新增`);
      hydrateBatchPreviews(sourceLabel);
      return;
    }

    addBatchLog(
      "success",
      `扫描 ${sourceLabel}：新增 ${result.added} 个商品链接，队列共 ${result.total} 个`
    );
    setStatus(
      `已从${sourceLabel}新增 ${result.added} 个商品链接，队列共 ${result.total} 个`,
      "success"
    );
    hydrateBatchPreviews(sourceLabel);
  } catch (error) {
    setStatus(error.message || "发现商品链接失败", "error");
  } finally {
    discoverBatchUrlsButton.disabled = isBatchCollecting;
  }
}

function delay(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function createCollectError(type, message, extra = {}) {
  const error = new Error(message);
  error.collectType = type;
  Object.assign(error, extra);
  return error;
}

function classifyCollectError(error) {
  const message = String(error?.message || "采集失败");
  const type =
    error?.collectType ||
    (/timeout|timed out|超时|AbortError/i.test(message)
      ? "timeout"
      : /预检查|404|403|500|502|503|504/i.test(message)
        ? "precheck"
        : /api|json/i.test(message)
          ? "api"
          : /blocked|denied|forbidden|captcha|验证/i.test(message)
            ? "blocked"
            : /页面|未返回|content|script/i.test(message)
              ? "page"
              : /network|fetch|Failed to fetch|ERR_/i.test(message)
                ? "network"
                : /未识别|无商品|no product/i.test(message)
                  ? "noProduct"
                  : "unknown");

  return {
    type,
    label: getBatchErrorTypeLabel(type) || "未知",
    message
  };
}

function withTimeout(promise, timeoutMs, message) {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => {
      reject(createCollectError("timeout", message));
    }, timeoutMs);

    promise
      .then(resolve)
      .catch(reject)
      .finally(() => {
        window.clearTimeout(timer);
      });
  });
}

async function checkUrlReachability(url) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), getBatchTimeoutMs());

  try {
    let response = await fetch(url, {
      method: "HEAD",
      credentials: "omit",
      redirect: "follow",
      signal: controller.signal
    });

    if (response.status === 405 || response.status === 501) {
      response = await fetch(url, {
        method: "GET",
        credentials: "omit",
        redirect: "follow",
        signal: controller.signal
      });
    }

    if (response.status >= 400) {
      return {
        status: "error",
        httpStatus: response.status,
        message: `HTTP ${response.status}`
      };
    }

    return {
      status: "ok",
      httpStatus: response.status || 200,
      message: response.url && response.url !== url ? `已跳转到 ${response.url}` : "链接可访问"
    };
  } catch (error) {
    return {
      status: "warning",
      httpStatus: 0,
      message:
        error?.name === "AbortError"
          ? "预检查超时，将继续尝试页面采集"
          : "浏览器无法预检查该链接，将继续尝试页面采集"
    };
  } finally {
    window.clearTimeout(timeout);
  }
}

async function precheckBatchItem(item) {
  const result = await checkUrlReachability(item.url);
  item.precheckStatus = result.status;
  item.precheckMessage = result.message;
  item.httpStatus = result.httpStatus || 0;
  item.updatedAt = new Date().toISOString();
  return result;
}

function createBatchTab(url) {
  return new Promise((resolve, reject) => {
    chrome.tabs.create({ url, active: false }, (tab) => {
      const lastError = chrome.runtime.lastError;

      if (lastError) {
        reject(new Error(lastError.message));
        return;
      }

      resolve(tab);
    });
  });
}

function removeBatchTab(tabId) {
  return new Promise((resolve) => {
    if (!tabId) {
      resolve();
      return;
    }

    chrome.tabs.remove(tabId, () => {
      void chrome.runtime.lastError;
      resolve();
    });
  });
}

function waitForBatchTabLoad(tabId, timeoutMs = BATCH_TAB_LOAD_TIMEOUT_MS) {
  return new Promise((resolve) => {
    if (!chrome.tabs?.onUpdated) {
      window.setTimeout(resolve, 1800);
      return;
    }

    let isResolved = false;
    const timeoutId = window.setTimeout(() => {
      cleanup();
      resolve();
    }, timeoutMs);

    function cleanup() {
      if (isResolved) {
        return;
      }

      isResolved = true;
      window.clearTimeout(timeoutId);
      chrome.tabs.onUpdated.removeListener(listener);
    }

    function listener(updatedTabId, changeInfo) {
      if (updatedTabId !== tabId || changeInfo.status !== "complete") {
        return;
      }

      cleanup();
      resolve();
    }

    chrome.tabs.onUpdated.addListener(listener);
  });
}

async function collectProductFromBatchUrl(url) {
  const timeoutMs = getBatchTimeoutMs();
  const shopifyProduct = await tryCollectShopifyAjaxFromUrl(url, timeoutMs);

  if (shopifyProduct) {
    return shopifyProduct;
  }

  const tab = await createBatchTab(url);

  try {
    await waitForBatchTabLoad(tab.id, timeoutMs);
    await delay(900);

    const response = await withTimeout(
      sendMessageWithInjection(tab.id, {
        type: "SPC_COLLECT_PRODUCT"
      }),
      timeoutMs,
      "页面采集超时"
    );

    if (!response || !response.ok) {
      throw createCollectError("page", response?.error || "页面未返回有效商品信息");
    }

    return normalizeDraft({
      ...response.data,
      page: {
        ...(response.data?.page || {}),
        url: response.data?.page?.url || url
      }
    });
  } finally {
    await removeBatchTab(tab.id);
  }
}

function updateBatchItemFromProduct(item, product) {
  const validation = getExportValidation(product);
  const rowCount = window.ShopifyProductCollectorCsv?.productToRows
    ? window.ShopifyProductCollectorCsv.productToRows(product).length
    : 0;

  item.status = "success";
  item.product = product;
  item.title = product.title || "未识别标题";
  item.previewImageUrl = product.images?.find((image) => image?.url)?.url || item.previewImageUrl || "";
  item.source = getSourceLabel(product.source);
  item.handle = product.handle || "";
  item.error = "";
  item.errorType = "";
  item.warningCount = validation.warnings.length;
  item.rowCount = rowCount;
  item.updatedAt = new Date().toISOString();
}

function updateBatchItemError(item, error) {
  const classifiedError = classifyCollectError(error);
  item.status = "error";
  item.error = classifiedError.message || "采集失败";
  item.errorType = classifiedError.type;
  item.updatedAt = new Date().toISOString();
}

async function startBatchCollection() {
  if (isBatchCollecting) {
    return;
  }

  if (!batchItems.length && batchUrlInput.value.trim()) {
    prepareBatchQueue();
  }

  const hasCollectable = batchItems.some((item) => item.status !== "success");

  if (!hasCollectable) {
    setStatus("当前没有需要采集的批量商品", "idle");
    return;
  }

  isBatchCollecting = true;
  shouldStopBatchCollection = false;
  renderBatchQueue();
  addBatchLog("info", "开始批量采集，将跳过已完成商品并继续未完成队列");
  setStatus("开始批量采集，优先使用 Shopify API 直采", "loading");

  for (const itemSnapshot of [...batchItems]) {
    if (shouldStopBatchCollection) {
      break;
    }

    const item = batchItems.find((candidate) => candidate.id === itemSnapshot.id);

    if (!item || item.status === "success") {
      continue;
    }

    item.status = "running";
    item.error = "";
    item.updatedAt = new Date().toISOString();
    addBatchLog("info", "开始采集", item);
    renderBatchQueue();
    await saveBatchState();

    try {
      const precheck = await precheckBatchItem(item);

      if (precheck.status === "error") {
        throw createCollectError(
          "precheck",
          `链接预检查失败：${precheck.message}`,
          { httpStatus: precheck.httpStatus }
        );
      }

      let product = await collectProductFromBatchUrl(item.url);
      product = await checkProductImages(product);
      updateBatchItemFromProduct(item, product);
      const imageStats = getImageCheckStats(product.images);
      const imageRiskCount = imageStats.invalid + imageStats.small;
      const imageCheckText = imageStats.total
        ? `，图片 ${imageStats.valid} 有效/${imageRiskCount} 风险`
        : "";
      addBatchLog(
        "success",
        `采集成功${imageCheckText}，生成 ${item.rowCount || 0} 行 CSV 数据`,
        item
      );
      setStatus(`已采集并检查：${product.title || item.url}`, "success");
    } catch (error) {
      const classifiedError = classifyCollectError(error);
      error.message = classifiedError.message;
      error.collectType = classifiedError.type;
      updateBatchItemError(item, error);
      addBatchLog("error", `采集失败：${item.error}`, item);
      setStatus(`批量采集失败：${item.error}`, "error");
    }

    renderBatchQueue();
    await saveBatchState();
  }

  isBatchCollecting = false;
  shouldStopBatchCollection = false;
  renderBatchQueue();

  const stats = getBatchStats();
  addBatchLog("info", `批量采集结束：${stats.success} 成功，${stats.error} 失败`);
  setStatus(
    `批量采集结束：${stats.success} 成功，${stats.error} 失败`,
    stats.error ? "idle" : "success"
  );
}

function stopBatchCollection() {
  if (!isBatchCollecting) {
    return;
  }

  shouldStopBatchCollection = true;
  addBatchLog("warning", "已请求停止，当前商品采集完成后暂停队列");
  setStatus("已请求停止，当前商品采集完成后会暂停队列", "idle");
}

function getBatchProducts(options = {}) {
  return getBatchProductItems(options).map((item) => normalizeDraft(item.product));
}

function getBatchExportValidation(products) {
  const errors = [];
  const warnings = [];
  const handles = new Map();

  products.forEach((product, index) => {
    const label = product.title || product.handle || `第 ${index + 1} 个商品`;
    const handle = String(product.handle || "").trim();
    const result = getExportValidation(product);

    if (handle) {
      if (handles.has(handle)) {
        errors.push({
          field: "handle",
          message: `${label} 的 URL handle 与 ${handles.get(handle)} 重复。`
        });
      } else {
        handles.set(handle, label);
      }
    }

    result.errors.forEach((issue) => {
      errors.push({ ...issue, message: `${label}：${issue.message}` });
    });
    result.warnings.forEach((issue) => {
      warnings.push({ ...issue, message: `${label}：${issue.message}` });
    });
  });

  return { errors, warnings };
}

function confirmBatchWarnings(warnings) {
  if (!warnings.length) {
    return true;
  }

  const warningText = warnings
    .slice(0, 8)
    .map((warning) => `- ${warning.message}`)
    .join("\n");
  const moreText = warnings.length > 8 ? `\n- 还有 ${warnings.length - 8} 个风险项` : "";

  return window.confirm(
    `批量导出前发现 ${warnings.length} 个风险：\n${warningText}${moreText}\n\n是否仍然导出 CSV？`
  );
}

function exportBatchCsv(options = {}) {
  const selectedOnly = Boolean(options.selectedOnly);
  const products = getBatchProducts({ selectedOnly });
  const exportLabel = selectedOnly ? "所选商品" : "成功商品";

  if (!products.length) {
    setStatus(`没有可导出的${exportLabel}`, "error");
    return;
  }

  if (!window.ShopifyProductCollectorCsv?.isReady) {
    setStatus("CSV 模块尚未就绪", "error");
    return;
  }

  const validation = renderBatchExportValidation(products);

  if (validation.errors.length) {
    batchSummary.textContent = validation.errors[0].message;
    setStatus(`批量导出校验失败：${validation.errors[0].message}`, "error");
    return;
  }

  if (!confirmBatchWarnings(validation.warnings)) {
    setStatus("已取消批量导出，可先修正风险字段", "idle");
    return;
  }

  const date = new Date().toISOString().slice(0, 10);
  const result = window.ShopifyProductCollectorCsv.downloadProductsCsv(
    products,
    selectedOnly ? `shopify-products-selected-${date}.csv` : `shopify-products-${date}.csv`
  );

  addBatchLog(
    "success",
    `已导出${exportLabel}：${result.productCount} 个商品，${result.rowCount} 行`
  );
  setStatus(
    `${exportLabel} CSV 已下载：${result.fileName}（${result.productCount} 个商品，${result.rowCount} 行）`,
    "success"
  );
}

function clearBatchQueue() {
  if (isBatchCollecting || !batchItems.length) {
    return;
  }

  batchItems = [];
  selectedBatchItemIds = new Set();
  renderBatchQueue();
  saveBatchState();
  addBatchLog("info", "批量队列已清空");
  setStatus("批量队列已清空", "idle");
}

function toggleBatchSelection() {
  if (isBatchCollecting || !batchItems.length) {
    return;
  }

  const allSelected = batchItems.every((item) => selectedBatchItemIds.has(item.id));
  selectedBatchItemIds = allSelected
    ? new Set()
    : new Set(batchItems.map((item) => item.id));
  renderBatchQueue();
  saveBatchState();
}

function deleteSelectedBatchItems() {
  if (isBatchCollecting) {
    return;
  }

  const selectedItems = getSelectedBatchItems();

  if (!selectedItems.length) {
    return;
  }

  const selectedIds = new Set(selectedItems.map((item) => item.id));
  batchItems = batchItems.filter((item) => !selectedIds.has(item.id));
  selectedBatchItemIds = new Set();
  renderBatchQueue();
  saveBatchState();
  addBatchLog("info", `已删除 ${selectedItems.length} 个选中商品`);
  setStatus(`已删除 ${selectedItems.length} 个选中商品`, "success");
}

function resetBatchItemForRetry(item) {
  item.status = "pending";
  item.product = null;
  item.source = "";
  item.handle = "";
  item.error = "";
  item.errorType = "";
  item.warningCount = 0;
  item.rowCount = 0;
  item.updatedAt = new Date().toISOString();
}

async function precheckBatchQueue() {
  if (isBatchCollecting || isBatchPrechecking || !batchItems.length) {
    return;
  }

  isBatchPrechecking = true;
  renderBatchQueue();
  setStatus("正在预检查批量链接...", "loading");

  let okCount = 0;
  let warningCount = 0;
  let errorCount = 0;

  try {
    for (const item of batchItems) {
      const result = await precheckBatchItem(item);

      if (result.status === "ok") {
        okCount += 1;
      } else if (result.status === "warning") {
        warningCount += 1;
      } else {
        errorCount += 1;
      }

      renderBatchQueue();
      await saveBatchState();
    }

    addBatchLog(
      errorCount ? "warning" : "success",
      `链接预检查完成：${okCount} 可访问，${warningCount} 不确定，${errorCount} 异常`
    );
    setStatus(
      `链接预检查完成：${okCount} 可访问，${warningCount} 不确定，${errorCount} 异常`,
      errorCount ? "idle" : "success"
    );
  } finally {
    isBatchPrechecking = false;
    renderBatchQueue();
    await saveBatchState();
  }
}

function retryFailedBatchItems() {
  if (isBatchCollecting) {
    return;
  }

  const failedItems = batchItems.filter((item) => item.status === "error");

  if (!failedItems.length) {
    return;
  }

  failedItems.forEach(resetBatchItemForRetry);
  renderBatchQueue();
  saveBatchState();
  addBatchLog("info", `已将 ${failedItems.length} 个失败商品重新加入待采集，并开始重试`);
  setStatus(`正在重试 ${failedItems.length} 个失败商品`, "loading");
  startBatchCollection();
}

function fixDuplicateBatchHandles() {
  if (isBatchCollecting) {
    return;
  }

  const successfulItems = batchItems.filter((item) => item.status === "success" && item.product);

  if (!successfulItems.length) {
    return;
  }

  const usedHandles = new Set();
  let changedCount = 0;

  successfulItems.forEach((item, index) => {
    const product = normalizeDraft(item.product);
    const baseHandle =
      generateHandle(product.handle || product.title || `product-${index + 1}`) ||
      `product-${index + 1}`;
    let nextHandle = baseHandle;
    let suffix = 2;

    while (usedHandles.has(nextHandle)) {
      nextHandle = `${baseHandle}-${suffix}`;
      suffix += 1;
    }

    usedHandles.add(nextHandle);

    if (product.handle !== nextHandle || item.handle !== nextHandle) {
      product.handle = nextHandle;
      item.product = product;
      item.handle = nextHandle;
      item.updatedAt = new Date().toISOString();
      changedCount += 1;
    }
  });

  renderBatchQueue();
  saveBatchState();

  if (changedCount) {
    addBatchLog("success", `已修复 ${changedCount} 个重复或缺失的 URL handle`);
    setStatus(`已修复 ${changedCount} 个重复或缺失的 URL handle`, "success");
  } else {
    setStatus("当前没有需要修复的重复 URL handle", "idle");
  }
}

function handleBatchListChange(event) {
  const checkbox = event.target.closest(".batch-select-checkbox");

  if (!checkbox) {
    return;
  }

  const id = checkbox.dataset.batchId;

  if (checkbox.checked) {
    selectedBatchItemIds.add(id);
  } else {
    selectedBatchItemIds.delete(id);
  }

  renderBatchQueue();
  saveBatchState();
}

async function clearCurrentDomainImagePicker() {
  try {
    const tab = await getCurrentTab();

    if (!tab?.id) {
      return;
    }

    await sendMessageWithInjection(tab.id, {
      type: "SPC_CLEAR_IMAGE_PICKER"
    });
  } catch (error) {
    // Reset should still clear local extension state even if the page cannot respond.
  }
}

async function resetAllState() {
  if (isBatchCollecting) {
    setStatus("批量采集中，请先停止后再重置", "error");
    return;
  }

  const shouldReset = window.confirm(
    "确认重置吗？这会清空当前商品草稿、批量队列，并清除当前域名的手动选图区域。"
  );

  if (!shouldReset) {
    return;
  }

  resetAllButton.disabled = true;
  setStatus("正在重置...", "loading");

  try {
    window.clearTimeout(saveTimer);

    if (currentDraftKey) {
      await chromeStorageRemove(currentDraftKey);
    }

    await chromeStorageRemove(BATCH_STORAGE_KEY);
    await clearCurrentDomainImagePicker();

    currentProductDraft = null;
    currentImagePickerStatus = null;
    batchItems = [];
    selectedBatchItemIds = new Set();
    batchLogs = [];
    batchUrlInput.value = "";
    productPanel.hidden = true;
    clearValidationResults();
    renderBatchQueue();
    updateExportAvailability();
    setStatus("已重置当前草稿、批量队列和当前域名选图区域", "success");
  } catch (error) {
    setStatus(error.message || "重置失败", "error");
  } finally {
    resetAllButton.disabled = false;
  }
}

function retryBatchItem(id) {
  const item = batchItems.find((candidate) => candidate.id === id);

  if (!item || isBatchCollecting) {
    return;
  }

  item.status = "pending";
  resetBatchItemForRetry(item);
  renderBatchQueue();
  saveBatchState();
  addBatchLog("info", "已重新加入待采集", item);
}

function removeBatchItem(id) {
  if (isBatchCollecting) {
    return;
  }

  const removedItem = batchItems.find((item) => item.id === id);
  batchItems = batchItems.filter((item) => item.id !== id);
  selectedBatchItemIds.delete(id);
  renderBatchQueue();
  saveBatchState();
  addBatchLog("info", "已删除批量商品", removedItem);
}

async function viewBatchItem(id) {
  const item = batchItems.find((candidate) => candidate.id === id);

  if (!item?.product) {
    return;
  }

  currentTabUrl = item.product.page?.url || item.url;
  currentDraftKey = getDraftStorageKey(currentTabUrl);
  currentImagePickerStatus = null;
  renderProduct(item.product, { fromCache: false });
  renderPageInfo(item.product.page || { title: item.title, url: item.url });
  await saveDraft(currentProductDraft);
  setStatus("已载入批量商品，可在下方单品表单继续编辑", "success");
}

function openUrlInCurrentTab(url) {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      const lastQueryError = chrome.runtime.lastError;

      if (lastQueryError) {
        reject(new Error(lastQueryError.message));
        return;
      }

      if (!tab?.id) {
        chrome.tabs.create({ url, active: true }, () => {
          const lastCreateError = chrome.runtime.lastError;

          if (lastCreateError) {
            reject(new Error(lastCreateError.message));
            return;
          }

          resolve();
        });
        return;
      }

      chrome.tabs.update(tab.id, { url, active: true }, () => {
        const lastUpdateError = chrome.runtime.lastError;

        if (lastUpdateError) {
          reject(new Error(lastUpdateError.message));
          return;
        }

        resolve();
      });
    });
  });
}

async function openBatchItemPage(id) {
  const item = batchItems.find((candidate) => candidate.id === id);
  const url = normalizeBatchUrl(item?.url);

  if (!item || !url) {
    setStatus("没有可打开的商品链接", "error");
    return;
  }

  try {
    await openUrlInCurrentTab(url);
    setStatus(`已打开：${item.title || url}`, "success");
  } catch (error) {
    setStatus(error.message || "打开商品页面失败", "error");
  }
}

function handleBatchListClick(event) {
  const button = event.target.closest("[data-batch-action]");

  if (!button) {
    return;
  }

  const action = button.dataset.batchAction;
  const id = button.dataset.batchId;

  if (action === "open") {
    openBatchItemPage(id);
    return;
  }

  if (action === "retry") {
    retryBatchItem(id);
    return;
  }

  if (action === "remove") {
    removeBatchItem(id);
    return;
  }

  if (action === "view") {
    viewBatchItem(id);
  }
}

function handleBatchListKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const target = event.target.closest("[data-batch-action]");

  if (!target || target.tagName === "BUTTON") {
    return;
  }

  event.preventDefault();
  target.click();
}

function updateExportAvailability() {
  exportCsvButton.disabled = !currentProductDraft;
}

function sendMessageToTab(tabId, message) {
  return new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(tabId, message, (response) => {
      const lastError = chrome.runtime.lastError;

      if (lastError) {
        reject(new Error(lastError.message));
        return;
      }

      resolve(response);
    });
  });
}

async function sendMessageWithInjection(tabId, message) {
  try {
    return await sendMessageToTab(tabId, message);
  } catch (error) {
    await chrome.scripting.executeScript({
      target: { tabId },
      files: ["content.js"]
    });

    return sendMessageToTab(tabId, message);
  }
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function clearValidationResults() {
  validationPanel.hidden = true;
  validationSummary.textContent = "等待校验";
  clearElement(validationList);
}

function setInputValue(input, value) {
  input.value = value || "";
}

function generateHandle(title) {
  return String(title || "")
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}

function getSourceLabel(source) {
  const labels = {
    "json-ld": "JSON-LD",
    "shopify-api": "Shopify API",
    shopify: "Shopify 页面数据",
    amazon: "Amazon",
    woocommerce: "WooCommerce",
    shopline: "Shopline",
    shoplazza: "Shoplazza",
    "custom-rule": "专属规则",
    "site-rule": "站点规则",
    manual: "手动区域",
    meta: "Meta",
    dom: "页面规则",
    fallback: "自动兜底"
  };

  return labels[source] || "Unknown";
}

function getProductDomain(product = currentProductDraft) {
  return getDomain(product?.page?.url || currentTabUrl || pageUrlInput.value || "");
}

function getSiteRuleFromForm() {
  return normalizeSiteRule(
    {
      domain: getDomain(currentTabUrl || pageUrlInput.value || ""),
      selectors: {
        title: siteRuleTitleSelectorInput.value,
        price: siteRulePriceSelectorInput.value,
        compareAtPrice: siteRuleCompareAtPriceSelectorInput.value,
        description: siteRuleDescriptionSelectorInput.value,
        vendor: siteRuleVendorSelectorInput.value,
        sku: siteRuleSkuSelectorInput.value,
        images: siteRuleImageSelectorInput.value,
        variants: siteRuleVariantSelectorInput.value
      }
    },
    getDomain(currentTabUrl || pageUrlInput.value || "")
  );
}

function getSiteRuleFieldInput(field) {
  const inputs = {
    title: siteRuleTitleSelectorInput,
    price: siteRulePriceSelectorInput,
    compareAtPrice: siteRuleCompareAtPriceSelectorInput,
    description: siteRuleDescriptionSelectorInput,
    vendor: siteRuleVendorSelectorInput,
    sku: siteRuleSkuSelectorInput,
    images: siteRuleImageSelectorInput,
    variants: siteRuleVariantSelectorInput
  };

  return inputs[field] || null;
}

function renderSiteRuleForm(rule = null) {
  const normalizedRule = normalizeSiteRule(rule || {}, getDomain(currentTabUrl || pageUrlInput.value || ""));
  const selectorCount = getSiteRuleSelectorCount(normalizedRule);
  const domain = normalizedRule.domain || getDomain(currentTabUrl || pageUrlInput.value || "");

  siteRuleTitleSelectorInput.value = normalizedRule.selectors.title;
  siteRulePriceSelectorInput.value = normalizedRule.selectors.price;
  siteRuleCompareAtPriceSelectorInput.value = normalizedRule.selectors.compareAtPrice;
  siteRuleDescriptionSelectorInput.value = normalizedRule.selectors.description;
  siteRuleVendorSelectorInput.value = normalizedRule.selectors.vendor;
  siteRuleSkuSelectorInput.value = normalizedRule.selectors.sku;
  siteRuleImageSelectorInput.value = normalizedRule.selectors.images;
  siteRuleVariantSelectorInput.value = normalizedRule.selectors.variants;
  siteRuleDomain.textContent = domain || "未识别";
  clearSiteRuleButton.disabled = !selectorCount;
  saveSiteRuleButton.disabled = !selectorCount;
  siteRulePickButtons.forEach((button) => {
    button.disabled = !domain;
  });
  siteRuleClearButtons.forEach((button) => {
    const field = button.dataset.siteRuleClearField;
    button.disabled = !domain || !normalizedRule.selectors[field];
  });

  siteRuleSummary.textContent = selectorCount
    ? `当前域名已保存 ${selectorCount} 条专属选择器，采集时会优先使用。`
    : "内置规则自动启用；可像选择图片区域一样点击页面元素生成专属规则。";
}

async function refreshSiteRulePanel() {
  const domain = getDomain(currentTabUrl || pageUrlInput.value || "");

  if (!domain) {
    currentSiteRule = null;
    renderSiteRuleForm(null);
    return;
  }

  currentSiteRule = normalizeSiteRule(await loadCurrentSiteRule(), domain);
  renderSiteRuleForm(currentSiteRule);
}

function summarizeSiteRuleTest(result) {
  const fields = result?.fields || {};
  const matchedFields = Object.entries(fields)
    .filter(([, value]) => Boolean(value))
    .map(([field]) => field);
  const imageCount = Number(result?.imageCount || 0);
  const variantCount = Number(result?.variantCount || 0);
  const parts = [];

  if (matchedFields.length) {
    parts.push(`${matchedFields.length} 个字段命中`);
  }

  if (imageCount) {
    parts.push(`${imageCount} 张图片`);
  }

  if (variantCount) {
    parts.push(`${variantCount} 个变体`);
  }

  return parts.length ? parts.join("，") : "未命中字段、图片或变体";
}

function createSiteRuleTestItem(label, value, options = {}) {
  const item = document.createElement("li");
  const labelElement = document.createElement("strong");
  const valueElement = options.href ? document.createElement("a") : document.createElement("span");
  const text = cleanText(value);
  const displayText =
    text && text.length > 180 ? `${text.slice(0, 180)}...` : text || "未命中";

  item.className = "site-rule-test-item";
  item.dataset.hit = String(Boolean(text));
  labelElement.textContent = label;
  valueElement.textContent = displayText;
  valueElement.title = text;

  if (options.href) {
    valueElement.href = options.href;
    valueElement.target = "_blank";
    valueElement.rel = "noreferrer";
  }

  item.append(labelElement, valueElement);
  return item;
}

function renderSiteRuleTestResult(result = null) {
  if (!siteRuleTestPanel) {
    return;
  }

  clearElement(siteRuleTestList);

  if (!result) {
    siteRuleTestPanel.hidden = true;
    siteRuleTestSummary.textContent = "等待测试";
    return;
  }

  const fields = result.fields || {};
  const fieldLabels = {
    title: "标题",
    price: "价格",
    compareAtPrice: "原价",
    description: "描述",
    vendor: "品牌",
    sku: "SKU"
  };
  const imageCount = Number(result.imageCount || 0);
  const variantCount = Number(result.variantCount || 0);

  siteRuleTestPanel.hidden = false;
  siteRuleTestSummary.textContent = summarizeSiteRuleTest(result);

  Object.entries(fieldLabels).forEach(([field, label]) => {
    siteRuleTestList.appendChild(createSiteRuleTestItem(label, fields[field] || ""));
  });

  siteRuleTestList.appendChild(createSiteRuleTestItem("图片", imageCount ? `${imageCount} 张` : ""));
  siteRuleTestList.appendChild(createSiteRuleTestItem("变体", variantCount ? `${variantCount} 个` : ""));
  (Array.isArray(result.sampleVariants) ? result.sampleVariants : []).forEach((variant, index) => {
    siteRuleTestList.appendChild(
      createSiteRuleTestItem(`变体 ${index + 1}`, variant)
    );
  });
  (Array.isArray(result.sampleImages) ? result.sampleImages : []).forEach((url, index) => {
    siteRuleTestList.appendChild(
      createSiteRuleTestItem(`样例 ${index + 1}`, url, { href: url })
    );
  });
}

async function testSiteRule() {
  const rule = getSiteRuleFromForm();

  if (!hasSiteRuleSelectors(rule)) {
    setStatus("请先选择至少一个页面元素再测试", "error");
    return;
  }

  testSiteRuleButton.disabled = true;
  testSiteRuleButton.classList.add("is-busy");
  setStatus("正在当前页面测试站点规则...", "loading");

  try {
    const tab = await getCurrentTab();

    if (!tab?.id) {
      throw new Error("没有找到当前活动标签页");
    }

    const response = await sendMessageWithInjection(tab.id, {
      type: "SPC_TEST_SITE_RULE",
      rule
    });

    if (!response?.ok) {
      throw new Error(response?.error || "站点规则测试失败");
    }

    renderSiteRuleTestResult(response.data);
    setCollapsibleState(siteRuleToggleButton, siteRuleBody, true);
    setStatus(`站点规则测试完成：${summarizeSiteRuleTest(response.data)}`, "success");
  } catch (error) {
    setStatus(error.message || "站点规则测试失败", "error");
  } finally {
    testSiteRuleButton.disabled = false;
    testSiteRuleButton.classList.remove("is-busy");
  }
}

async function startSiteRulePicker(field) {
  const label = SITE_RULE_FIELD_LABELS[field] || "字段";

  try {
    const tab = await getCurrentTab();

    if (!tab?.id) {
      throw new Error("没有找到当前活动标签页");
    }

    await chromeStorageSet({ [SITE_RULE_EXPAND_AFTER_PICK_KEY]: true });
    setStatus(`请在页面中点击要作为「${label}」的元素`, "loading");
    const response = await sendMessageWithInjection(tab.id, {
      type: "SPC_START_SITE_RULE_PICKER",
      field
    });

    if (!response?.ok) {
      throw new Error(response?.error || "无法启动站点规则选择");
    }

    window.setTimeout(() => window.close(), 120);
  } catch (error) {
    await chromeStorageRemove(SITE_RULE_EXPAND_AFTER_PICK_KEY);
    setStatus(error.message || "站点规则选择启动失败", "error");
  }
}

async function saveSiteRule() {
  const rule = getSiteRuleFromForm();

  if (!rule.domain) {
    setStatus("当前页面没有可保存规则的域名", "error");
    return;
  }

  if (!hasSiteRuleSelectors(rule)) {
    setStatus("请至少选择一个页面元素，或使用清除规则", "error");
    return;
  }

  saveSiteRuleButton.disabled = true;
  setStatus("正在保存当前域名站点规则...", "loading");

  try {
    await saveCurrentSiteRule(rule);
    currentSiteRule = normalizeSiteRule(rule);
    renderSiteRuleForm(currentSiteRule);
    setStatus(`已保存 ${rule.domain} 的专属采集规则`, "success");
  } catch (error) {
    setStatus(error.message || "站点规则保存失败", "error");
  } finally {
    saveSiteRuleButton.disabled = !hasSiteRuleSelectors(getSiteRuleFromForm());
  }
}

async function clearSiteRule() {
  clearSiteRuleButton.disabled = true;
  setStatus("正在清除当前域名站点规则...", "loading");

  try {
    await clearCurrentSiteRule();
    currentSiteRule = null;
    renderSiteRuleForm(null);
    renderSiteRuleTestResult(null);
    setStatus("当前域名专属规则已清除，后续采集将使用内置规则", "success");
  } catch (error) {
    setStatus(error.message || "站点规则清除失败", "error");
  } finally {
    clearSiteRuleButton.disabled = !hasSiteRuleSelectors(currentSiteRule);
  }
}

async function clearSiteRuleField(field) {
  const input = getSiteRuleFieldInput(field);

  if (!input) {
    return;
  }

  const rule = getSiteRuleFromForm();
  const label = SITE_RULE_FIELD_LABELS[field] || "字段";

  if (!rule.selectors[field]) {
    return;
  }

  rule.selectors[field] = "";
  input.value = "";
  setStatus(`正在清除${label}规则...`, "loading");

  try {
    if (hasSiteRuleSelectors(rule)) {
      await saveCurrentSiteRule(rule);
      currentSiteRule = normalizeSiteRule(rule);
      renderSiteRuleForm(currentSiteRule);
      setStatus(`已清除${label}规则，其他规则已保留`, "success");
    } else {
      await clearCurrentSiteRule();
      currentSiteRule = null;
      renderSiteRuleForm(null);
      setStatus(`已清除${label}规则，当前域名无剩余专属规则`, "success");
    }

    renderSiteRuleTestResult(null);
  } catch (error) {
    setStatus(error.message || `${label}规则清除失败`, "error");
  }
}

function getImagePickerStatusDomain(status = currentImagePickerStatus) {
  return status?.hostname || getDomain(status?.pageUrl || "");
}

function imagePickerStatusMatchesProduct(product = currentProductDraft) {
  if (!product?.imageSourceSelector || !currentImagePickerStatus?.selector) {
    return false;
  }

  if (product.imageSourceSelector !== currentImagePickerStatus.selector) {
    return false;
  }

  const productDomain = getProductDomain(product);
  const statusDomain = getImagePickerStatusDomain();

  return !productDomain || !statusDomain || productDomain === statusDomain;
}

function getManualImageCounts(product = currentProductDraft) {
  const statusMatchesProduct = imagePickerStatusMatchesProduct(product);
  const statusUrlCount = Number(
    currentImagePickerStatus?.urlCount ?? currentImagePickerStatus?.imageCount ?? 0
  );
  const statusNodeCount = Number(currentImagePickerStatus?.nodeCount ?? 0);
  const productUrlCount = Number(product?.manualImageCount ?? 0);
  const productNodeCount = Number(product?.manualImageNodeCount ?? 0);

  return {
    urlCount: statusMatchesProduct ? statusUrlCount : productUrlCount,
    nodeCount: statusMatchesProduct ? statusNodeCount : productNodeCount
  };
}

function formatManualImageLabel(counts) {
  if (counts.urlCount > 0) {
    return `手动区域 ${counts.urlCount} 张`;
  }

  if (counts.nodeCount > 0) {
    return "手动区域无可用URL";
  }

  return "手动区域无图";
}

function getImageModeLabel(product = currentProductDraft) {
  if (
    product?.imageCollectionMode === "manual" ||
    product?.imageSourceSelector
  ) {
    return formatManualImageLabel(getManualImageCounts(product));
  }

  if (product?.source === "amazon") {
    return "Amazon 图库";
  }

  return "自动";
}

function normalizeImages(images, altText = currentProductDraft?.title || "") {
  return (Array.isArray(images) ? images : []).map((image, index) => ({
    url: image.url || "",
    position: index + 1,
    altText: image.altText || altText,
    source: image.source || "",
    check: image.check && typeof image.check === "object" ? image.check : null
  }));
}

function getImageDedupKey(url) {
  return String(url || "")
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/\?.*$/, "")
    .replace(/_(?:pico|icon|thumb|small|compact|medium|large|grande|master|\d+x\d+|\d+x|x\d+)(\.(?:jpg|jpeg|png|webp))$/i, "$1")
    .toLowerCase();
}

function getImageSourceType(image) {
  const url = String(image?.url || "");

  if (currentProductDraft?.imageCollectionMode === "manual") {
    return "manual";
  }

  if (/media-amazon\.com|ssl-images-amazon\.com/i.test(url)) {
    return "amazon";
  }

  if (/cdn\.shopify\.com|\/cdn\/shop\//i.test(url)) {
    return "shopify";
  }

  return image?.source || "other";
}

function imageMatchesSourceFilter(image) {
  const filter = imageSourceFilter?.value || "all";
  const status = image.check?.status || "unchecked";

  if (filter === "all") {
    return true;
  }

  if (filter === "risk") {
    return status === "small" || status === "invalid";
  }

  if (["valid", "small", "invalid", "unchecked"].includes(filter)) {
    return status === filter;
  }

  return getImageSourceType(image) === filter;
}

function getImagesFromForm() {
  if (!currentProductDraft) {
    return [];
  }

  const items = Array.from(imageGrid.querySelectorAll(".image-item"));
  const images = normalizeImages(currentProductDraft.images, currentProductDraft.title);

  if (!items.length) {
    return images;
  }

  items.forEach((item) => {
    const index = Number(item.dataset.imageIndex);
    const currentImage = images[index] || {};
    const url = item.querySelector(".image-url-input")?.value.trim() || "";
    const altText =
      item.querySelector(".image-alt-input")?.value.trim() ||
      currentImage.altText ||
      currentProductDraft.title ||
      "";

    if (!Number.isInteger(index) || index < 0) {
      return;
    }

    images[index] = {
      url,
      position: index + 1,
      altText,
      source: currentImage.source || "",
      check: currentImage.url === url ? currentImage.check || null : null
    };
  });

  return normalizeImages(images, currentProductDraft.title);
}

function updateImagePreviewSource(preview, url, altText = "商品图片") {
  const existingSource = preview.querySelector(".image-preview-source");
  existingSource?.remove();

  const normalizedUrl = String(url || "").trim();
  let sourceElement;

  if (normalizedUrl) {
    sourceElement = document.createElement("img");
    sourceElement.src = normalizedUrl;
    sourceElement.alt = altText || "商品图片";
    sourceElement.loading = "lazy";
  } else {
    sourceElement = document.createElement("div");
    sourceElement.className = "image-placeholder";
    sourceElement.textContent = "待输入";
  }

  sourceElement.classList.add("image-preview-source");
  preview.prepend(sourceElement);
}

function createImageCheck(status, extra = {}) {
  return {
    status,
    width: Number(extra.width || 0),
    height: Number(extra.height || 0),
    message: extra.message || "",
    checkedAt: new Date().toISOString()
  };
}

function getImageCheckLabel(check) {
  if (!check?.status) {
    return "未检查";
  }

  if (check.status === "checking") {
    return "检查中";
  }

  if (check.status === "valid") {
    return `${check.width}x${check.height}`;
  }

  if (check.status === "small") {
    return `小图 ${check.width}x${check.height}`;
  }

  if (check.status === "invalid") {
    return check.message || "加载失败";
  }

  return "未检查";
}

function renderImageCheckStatus(element, check) {
  element.dataset.checkStatus = check?.status || "unchecked";
  element.textContent = getImageCheckLabel(check);
}

function checkImageUrl(url) {
  const normalizedUrl = String(url || "").trim();

  if (!/^https?:\/\//i.test(normalizedUrl)) {
    return Promise.resolve(
      createImageCheck("invalid", {
        message: "非 http/https"
      })
    );
  }

  return new Promise((resolve) => {
    const probe = new Image();
    const timer = window.setTimeout(() => {
      cleanup();
      resolve(
        createImageCheck("invalid", {
          message: "加载超时"
        })
      );
    }, IMAGE_CHECK_TIMEOUT_MS);

    function cleanup() {
      window.clearTimeout(timer);
      probe.onload = null;
      probe.onerror = null;
    }

    probe.onload = () => {
      const width = probe.naturalWidth || probe.width || 0;
      const height = probe.naturalHeight || probe.height || 0;
      const status =
        width && height && Math.min(width, height) < MIN_RECOMMENDED_IMAGE_SIDE
          ? "small"
          : "valid";

      cleanup();
      resolve(
        createImageCheck(status, {
          width,
          height,
          message:
            status === "small"
              ? `最短边小于 ${MIN_RECOMMENDED_IMAGE_SIDE}px`
              : ""
        })
      );
    };
    probe.onerror = () => {
      cleanup();
      resolve(
        createImageCheck("invalid", {
          message: "加载失败"
        })
      );
    };
    probe.referrerPolicy = "no-referrer";
    probe.src = normalizedUrl;
  });
}

function getImageCheckStats(images = currentProductDraft?.images || []) {
  return normalizeImages(images).reduce(
    (stats, image) => {
      const status = image.check?.status || "unchecked";

      stats.total += 1;
      stats[status] = (stats[status] || 0) + 1;
      return stats;
    },
    {
      total: 0,
      unchecked: 0,
      checking: 0,
      valid: 0,
      small: 0,
      invalid: 0
    }
  );
}

function updateImageCheckToolbar() {
  const stats = getImageCheckStats();

  if (!stats.total) {
    checkImagesButton.disabled = true;
    filterSmallImagesButton.disabled = true;
    filterDuplicateImagesButton.disabled = true;
    fillImageAltButton.disabled = true;
    replaceImageDomainButton.disabled = true;
    return;
  }

  checkImagesButton.disabled = isCheckingImages;
  filterSmallImagesButton.disabled = isCheckingImages;
  filterDuplicateImagesButton.disabled = false;
  fillImageAltButton.disabled = false;
  replaceImageDomainButton.disabled = false;

  if (isCheckingImages) {
    checkImagesButton.textContent = "检查中";
    return;
  }

  checkImagesButton.textContent =
    stats.invalid || stats.small
      ? `检查图片 ${stats.invalid + stats.small} 风险`
      : "检查图片";
}

async function checkCurrentImages(options = {}) {
  const isAutoCheck = Boolean(options.auto);

  if (!currentProductDraft || isCheckingImages) {
    return;
  }

  updateDraftFromForm();
  currentProductDraft.images = normalizeImages(currentProductDraft.images, currentProductDraft.title);

  if (!currentProductDraft.images.length) {
    if (!isAutoCheck) {
      setStatus("当前没有可检查的图片", "error");
    }
    return;
  }

  isCheckingImages = true;
  currentProductDraft.images = currentProductDraft.images.map((image) => ({
    ...image,
    check: createImageCheck("checking")
  }));
  renderImages(currentProductDraft.images);
  setStatus("正在检查图片可用性和尺寸...", "loading");

  const results = await Promise.all(
    currentProductDraft.images.map((image) => checkImageUrl(image.url))
  );

  currentProductDraft.images = currentProductDraft.images.map((image, index) => ({
    ...image,
    check: results[index]
  }));
  isCheckingImages = false;
  renderImages(currentProductDraft.images);
  clearValidationResults();
  await saveDraft(currentProductDraft);

  const stats = getImageCheckStats(currentProductDraft.images);
  const riskCount = stats.invalid + stats.small;

  cacheHint.textContent = "图片检查结果已保存";
  setStatus(
    riskCount
      ? `图片检查完成：${stats.valid} 张有效，${riskCount} 张风险`
      : `图片检查完成：${stats.valid} 张有效`,
    riskCount ? "idle" : "success"
  );

  return stats;
}

async function checkProductImages(product) {
  const draft = normalizeDraft(product);
  const images = normalizeImages(draft.images, draft.title);

  if (!images.length) {
    return draft;
  }

  const results = await Promise.all(images.map((image) => checkImageUrl(image.url)));

  return normalizeDraft({
    ...draft,
    images: images.map((image, index) => ({
      ...image,
      check: results[index]
    }))
  });
}

async function filterSmallImages() {
  if (!currentProductDraft) {
    return;
  }

  updateDraftFromForm();

  if (currentProductDraft.images.some((image) => !image.check?.status)) {
    await checkCurrentImages({ auto: true });
  }

  updateDraftFromForm();
  const beforeCount = currentProductDraft.images.length;
  currentProductDraft.images = normalizeImages(
    currentProductDraft.images.filter((image) => image.check?.status !== "small"),
    currentProductDraft.title
  );
  const removedCount = beforeCount - currentProductDraft.images.length;

  renderImages(currentProductDraft.images);
  queueSaveDraft(removedCount ? `已过滤 ${removedCount} 张小图` : "没有需要过滤的小图");
  setStatus(removedCount ? `已过滤 ${removedCount} 张小图` : "没有需要过滤的小图", "success");
}

function filterDuplicateImages() {
  if (!currentProductDraft) {
    return;
  }

  updateDraftFromForm();
  const seen = new Set();
  const beforeCount = currentProductDraft.images.length;
  currentProductDraft.images = normalizeImages(
    currentProductDraft.images.filter((image) => {
      const key = getImageDedupKey(image.url);

      if (!key || seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    }),
    currentProductDraft.title
  );
  const removedCount = beforeCount - currentProductDraft.images.length;

  renderImages(currentProductDraft.images);
  queueSaveDraft(removedCount ? `已过滤 ${removedCount} 张重复图片` : "没有重复图片");
  setStatus(removedCount ? `已过滤 ${removedCount} 张重复图片` : "没有重复图片", "success");
}

function fillImageAltText() {
  if (!currentProductDraft) {
    return;
  }

  updateDraftFromForm();
  const baseAlt = currentProductDraft.title || productTitleInput.value.trim() || "Product image";
  let changedCount = 0;

  currentProductDraft.images = normalizeImages(currentProductDraft.images, baseAlt).map(
    (image, index) => {
      const nextAlt = index === 0 ? baseAlt : `${baseAlt} ${index + 1}`;

      if (String(image.altText || "").trim() === nextAlt) {
        return image;
      }

      changedCount += 1;
      return {
        ...image,
        altText: nextAlt
      };
    }
  );

  renderImages(currentProductDraft.images);
  queueSaveDraft(changedCount ? `已补充 ${changedCount} 张图片 Alt` : "图片 Alt 已完整");
  setStatus(changedCount ? `已补充 ${changedCount} 张图片 Alt` : "图片 Alt 已完整", "success");
}

function normalizeDomainInput(value) {
  const text = String(value || "").trim();

  if (!text) {
    return "";
  }

  try {
    return new URL(/^https?:\/\//i.test(text) ? text : `https://${text}`).hostname;
  } catch (error) {
    return text.replace(/^https?:\/\//i, "").replace(/\/.*$/, "");
  }
}

function replaceImageDomain() {
  if (!currentProductDraft) {
    return;
  }

  const fromDomain = normalizeDomainInput(imageReplaceFromInput.value);
  const toDomain = normalizeDomainInput(imageReplaceToInput.value);

  if (!fromDomain || !toDomain) {
    setStatus("请填写旧域名和新域名后再替换", "error");
    return;
  }

  updateDraftFromForm();
  let changedCount = 0;
  currentProductDraft.images = normalizeImages(currentProductDraft.images, currentProductDraft.title).map(
    (image) => {
      try {
        const url = new URL(image.url);

        if (url.hostname !== fromDomain) {
          return image;
        }

        url.hostname = toDomain;
        changedCount += 1;
        return {
          ...image,
          url: url.href,
          check: null
        };
      } catch (error) {
        return image;
      }
    }
  );

  renderImages(currentProductDraft.images);
  clearValidationResults();
  queueSaveDraft(changedCount ? `已替换 ${changedCount} 张图片域名` : "没有匹配旧域名的图片");
  setStatus(
    changedCount ? `已替换 ${changedCount} 张图片域名` : "没有匹配旧域名的图片",
    changedCount ? "success" : "idle"
  );
}

function getCheckedIndexes(selector) {
  return Array.from(document.querySelectorAll(selector))
    .filter((input) => input.checked)
    .map((input) => Number(input.dataset.index))
    .filter((index) => Number.isInteger(index) && index >= 0);
}

function updateVariantSelectionToolbar() {
  const checkboxes = Array.from(variantList.querySelectorAll(".variant-select-checkbox"));
  const selectedCount = checkboxes.filter((checkbox) => checkbox.checked).length;
  const allSelected = checkboxes.length > 0 && selectedCount === checkboxes.length;
  const selectedItems = checkboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.closest(".variant-item"))
    .filter(Boolean);
  const hasSelectedExported = selectedItems.some(
    (item) => item.dataset.exportExcluded !== "true"
  );
  const hasSelectedExcluded = selectedItems.some(
    (item) => item.dataset.exportExcluded === "true"
  );

  variantSelectAllButton.textContent = allSelected ? "取消全选" : "全选";
  deleteSelectedVariantsButton.disabled = !selectedCount || checkboxes.length <= 1;
  excludeSelectedVariantsButton.disabled = !selectedCount || !hasSelectedExported;
  includeSelectedVariantsButton.disabled = !selectedCount || !hasSelectedExcluded;
}

function updateImageSelectionToolbar() {
  const checkboxes = Array.from(imageGrid.querySelectorAll(".image-select-checkbox"));
  const selectedCount = checkboxes.filter((checkbox) => checkbox.checked).length;
  const allSelected = checkboxes.length > 0 && selectedCount === checkboxes.length;

  imageSelectAllButton.textContent = allSelected ? "取消全选" : "全选";
  deleteSelectedImagesButton.disabled = !selectedCount;
}

function setVariantSelection(checked) {
  variantList.querySelectorAll(".variant-select-checkbox").forEach((checkbox) => {
    checkbox.checked = checked;
    checkbox.closest(".variant-item")?.classList.toggle("is-selected", checked);
  });
  updateVariantSelectionToolbar();
}

function setImageSelection(checked) {
  imageGrid.querySelectorAll(".image-select-checkbox").forEach((checkbox) => {
    checkbox.checked = checked;
    checkbox.closest(".image-item")?.classList.toggle("is-selected", checked);
  });
  updateImageSelectionToolbar();
}

function deleteSelectedVariants() {
  if (!currentProductDraft) {
    return;
  }

  const selectedIndexes = new Set(getCheckedIndexes(".variant-select-checkbox"));

  if (!selectedIndexes.size || currentProductDraft.variants.length <= 1) {
    return;
  }

  clearValidationResults();
  updateDraftFromForm();

  if (selectedIndexes.size >= currentProductDraft.variants.length) {
    const firstSelectedIndex = Math.min(...selectedIndexes);
    selectedIndexes.delete(firstSelectedIndex);
    setStatus("至少需要保留一个变体，已保留第一项", "idle");
  }

  currentProductDraft.variants = normalizeVariants(
    {
      ...currentProductDraft,
      variants: currentProductDraft.variants.filter((_, index) => !selectedIndexes.has(index))
    },
    currentProductDraft.images
  );
  renderVariants(currentProductDraft.variants);
  queueSaveDraft("所选变体已删除并保存");
}

function setSelectedVariantsExportState(excludedFromExport) {
  if (!currentProductDraft) {
    return;
  }

  const selectedIndexes = new Set(getCheckedIndexes(".variant-select-checkbox"));

  if (!selectedIndexes.size) {
    return;
  }

  clearValidationResults();
  updateDraftFromForm();
  currentProductDraft.variants = normalizeVariants(
    {
      ...currentProductDraft,
      variants: currentProductDraft.variants.map((variant, index) => ({
        ...variant,
        excludedFromExport: selectedIndexes.has(index)
          ? excludedFromExport
          : Boolean(variant.excludedFromExport)
      }))
    },
    currentProductDraft.images
  );
  renderVariants(currentProductDraft.variants);
  queueSaveDraft(excludedFromExport ? "所选变体已设为不导出" : "所选变体已恢复导出");
}

function deleteSelectedImages() {
  if (!currentProductDraft) {
    return;
  }

  const selectedIndexes = new Set(getCheckedIndexes(".image-select-checkbox"));

  if (!selectedIndexes.size) {
    return;
  }

  const scrollContainer = document.querySelector(".popup-shell");
  const previousScrollTop = scrollContainer?.scrollTop || 0;

  clearValidationResults();
  updateDraftFromForm();
  currentProductDraft.images = normalizeImages(
    currentProductDraft.images.filter((_, index) => !selectedIndexes.has(index)),
    currentProductDraft.title
  );
  renderImages(currentProductDraft.images);
  window.requestAnimationFrame(() => {
    if (scrollContainer) {
      scrollContainer.scrollTop = Math.min(previousScrollTop, scrollContainer.scrollHeight);
    }
  });
  queueSaveDraft("所选图片已删除并保存");
}

function moveImage(fromIndex, toIndex, message = "图片顺序已更新") {
  if (!currentProductDraft) {
    return;
  }

  const images = normalizeImages(currentProductDraft.images, currentProductDraft.title);

  if (
    fromIndex === toIndex ||
    fromIndex < 0 ||
    toIndex < 0 ||
    fromIndex >= images.length ||
    toIndex >= images.length
  ) {
    return;
  }

  clearValidationResults();
  updateDraftFromForm();
  const [image] = currentProductDraft.images.splice(fromIndex, 1);
  currentProductDraft.images.splice(toIndex, 0, image);
  currentProductDraft.images = normalizeImages(currentProductDraft.images, currentProductDraft.title);
  renderImages(currentProductDraft.images);
  queueSaveDraft(message);
}

function setMainImage(index) {
  moveImage(index, 0, "主图已更新");
}

function handleImageDragStart(event) {
  const item = event.currentTarget;
  draggedImageIndex = Number(item.dataset.imageIndex);
  item.classList.add("is-dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", String(draggedImageIndex));
}

function handleImageDragOver(event) {
  event.preventDefault();
  event.currentTarget.classList.add("is-drag-over");
  event.dataTransfer.dropEffect = "move";
}

function handleImageDrop(event) {
  event.preventDefault();
  const targetIndex = Number(event.currentTarget.dataset.imageIndex);

  event.currentTarget.classList.remove("is-drag-over");

  if (Number.isInteger(draggedImageIndex) && Number.isInteger(targetIndex)) {
    moveImage(draggedImageIndex, targetIndex);
  }
}

function handleImageDragEnd() {
  draggedImageIndex = null;
  imageGrid
    .querySelectorAll(".image-item")
    .forEach((item) => item.classList.remove("is-dragging", "is-drag-over"));
}

function getVariantField(variant, field, fallback = "") {
  const value = variant[field];

  return value == null ? fallback : value;
}

function normalizeVariant(variant = {}, index = 0, defaults = {}, total = 1) {
  const isSingleVariant = total <= 1;

  return {
    sku: getVariantField(variant, "sku", isSingleVariant ? defaults.sku || "" : ""),
    barcode: getVariantField(variant, "barcode"),
    option1Name: getVariantField(
      variant,
      "option1Name",
      isSingleVariant ? "Default Title" : "Option"
    ),
    option1Value: getVariantField(
      variant,
      "option1Value",
      isSingleVariant ? "Default Title" : `Variant ${index + 1}`
    ),
    option2Name: getVariantField(variant, "option2Name"),
    option2Value: getVariantField(variant, "option2Value"),
    option3Name: getVariantField(variant, "option3Name"),
    option3Value: getVariantField(variant, "option3Value"),
    price: getVariantField(variant, "price", defaults.price || ""),
    compareAtPrice: getVariantField(
      variant,
      "compareAtPrice",
      defaults.compareAtPrice || ""
    ),
    variantImageUrl: getVariantField(
      variant,
      "variantImageUrl",
      defaults.variantImageUrl || ""
    ),
    excludedFromExport: Boolean(variant.excludedFromExport)
  };
}

function normalizeVariants(product, images = normalizeImages(product?.images, product?.title || "")) {
  const sourceVariants = Array.isArray(product?.variants) ? product.variants : [];
  const defaults = {
    sku: product?.sku || "",
    price: product?.price || "",
    compareAtPrice: product?.compareAtPrice || "",
    variantImageUrl: ""
  };
  const variants = sourceVariants.length ? sourceVariants : [{}];

  return variants.map((variant, index) =>
    normalizeVariant(variant, index, defaults, variants.length)
  );
}

function getExportableVariants(product, images = normalizeImages(product?.images, product?.title || "")) {
  return normalizeVariants(product, images).filter(
    (variant) => !variant.excludedFromExport
  );
}

function normalizeDraft(product) {
  const images = normalizeImages(product.images, product.title || "");
  const price = product.price || "";
  const sku = product.sku || "";
  const variants = normalizeVariants(
    {
      ...product,
      price,
      sku,
      compareAtPrice: product.compareAtPrice || ""
    },
    images
  );

  return {
    ...product,
    title: product.title || "",
    handle: product.handle || generateHandle(product.title),
    description: product.description || "",
    vendor: product.vendor || "",
    type: product.type || "",
    tags: product.tags || "",
    status: product.status || "draft",
    published: product.published || "false",
    sku,
    price,
    compareAtPrice: product.compareAtPrice || "",
    imageSourceSelector: product.imageSourceSelector || "",
    imageCollectionMode: product.imageCollectionMode || "auto",
    manualImageCount: Number(product.manualImageCount || 0),
    manualImageNodeCount: Number(product.manualImageNodeCount || 0),
    chargeTax: product.chargeTax || "true",
    inventoryQuantity: product.inventoryQuantity || "0",
    continueSellingWhenOutOfStock:
      product.continueSellingWhenOutOfStock || "deny",
    weightValueGrams: product.weightValueGrams || "0",
    weightUnitForDisplay: product.weightUnitForDisplay || "kg",
    requiresShipping: product.requiresShipping || "true",
    fulfillmentService: product.fulfillmentService || "manual",
    images,
    variants,
    seoTitle: product.seoTitle || product.title || "",
    seoDescription: product.seoDescription || (product.description || "").slice(0, 320)
  };
}

function getVariantsFromForm() {
  const items = Array.from(variantList.querySelectorAll(".variant-item"));

  if (!items.length) {
    return normalizeVariants(currentProductDraft || {});
  }

  return items.map((item) => ({
    sku: item.querySelector("[data-variant-field='sku']")?.value.trim() || "",
    barcode: item.querySelector("[data-variant-field='barcode']")?.value.trim() || "",
    option1Name:
      item.querySelector("[data-variant-field='option1Name']")?.value.trim() || "",
    option1Value:
      item.querySelector("[data-variant-field='option1Value']")?.value.trim() || "",
    option2Name:
      item.querySelector("[data-variant-field='option2Name']")?.value.trim() || "",
    option2Value:
      item.querySelector("[data-variant-field='option2Value']")?.value.trim() || "",
    option3Name:
      item.querySelector("[data-variant-field='option3Name']")?.value.trim() || "",
    option3Value:
      item.querySelector("[data-variant-field='option3Value']")?.value.trim() || "",
    price: item.querySelector("[data-variant-field='price']")?.value.trim() || "",
    compareAtPrice:
      item.querySelector("[data-variant-field='compareAtPrice']")?.value.trim() || "",
    variantImageUrl:
      item.querySelector("[data-variant-field='variantImageUrl']")?.value.trim() || "",
    excludedFromExport: item.dataset.exportExcluded === "true"
  }));
}

function isStrictPrice(value) {
  const text = String(value || "").trim();

  return /^\d+(\.\d{1,2})?$/.test(text);
}

function getFirstVariant(product) {
  return product?.variants?.[0] || {};
}

function getExportValidation(product) {
  const errors = [];
  const warnings = [];
  const images = normalizeImages(product.images, product.title)
    .map((image) => ({
      ...image,
      url: String(image.url || "").trim()
    }))
    .filter((image) => image.url);
  const variants = getExportableVariants(product, images);

  if (!String(product.title || "").trim()) {
    errors.push({ field: "title", message: "商品标题不能为空。" });
  }

  if (!String(product.handle || "").trim()) {
    errors.push({ field: "handle", message: "URL handle 不能为空。" });
  }

  if (!variants.length) {
    errors.push({
      field: "variants",
      message: "至少需要保留一个可导出的变体。"
    });
  }

  variants.forEach((variant, index) => {
    const prefix = variants.length > 1 ? `变体 #${index + 1}` : "变体";
    const option1Name = String(variant.option1Name || "").trim();
    const option1Value = String(variant.option1Value || "").trim();
    const price = String(variant.price || product.price || "").trim();
    const compareAtPrice = String(
      variant.compareAtPrice || product.compareAtPrice || ""
    ).trim();

    if (!option1Name) {
      errors.push({ field: "variants", message: `${prefix} 的 Option1 name 不能为空。` });
    }

    if (!option1Value) {
      errors.push({ field: "variants", message: `${prefix} 的 Option1 value 不能为空。` });
    }

    if (!price) {
      warnings.push({
        field: "variants",
        message: `${prefix} 价格为空，导出 CSV 时将使用 0.00。`
      });
    } else if (!isStrictPrice(price)) {
      warnings.push({
        field: "variants",
        message: `${prefix} 价格格式建议为纯数字，例如 24.99。`
      });
    }

    if (compareAtPrice && !isStrictPrice(compareAtPrice)) {
      warnings.push({
        field: "variants",
        message: `${prefix} 原价/对比价格式建议为纯数字，例如 39.99。`
      });
    }

    if (
      variant.variantImageUrl &&
      !/^https?:\/\//i.test(String(variant.variantImageUrl).trim())
    ) {
      warnings.push({
        field: "variants",
        message: `${prefix} 的变体图片不是 http/https URL。`
      });
    }
  });

  if (!images.length) {
    warnings.push({ field: "images", message: "当前没有图片，Shopify 可导入但商品会无图。" });
  }

  images.forEach((image) => {
    if (!/^https?:\/\//i.test(image.url)) {
      warnings.push({
        field: "images",
        message: `第 ${image.position} 张图片不是 http/https URL，Shopify 可能无法导入。`
      });
      return;
    }

    if (!/^https:\/\//i.test(image.url)) {
      warnings.push({
        field: "images",
        message: `第 ${image.position} 张图片不是 https，Shopify 可能无法稳定抓取。`
      });
    }

    if (image.check?.status === "invalid") {
      warnings.push({
        field: "images",
        message: `第 ${image.position} 张图片检查失败：${image.check.message || "无法加载"}。`
      });
    }

    if (image.check?.status === "small") {
      warnings.push({
        field: "images",
        message: `第 ${image.position} 张图片尺寸偏小：${image.check.width}x${image.check.height}，建议更换高清图。`
      });
    }
  });

  return { errors, warnings };
}

function renderValidationResults(result) {
  const totalIssues = result.errors.length + result.warnings.length;

  validationPanel.hidden = false;
  clearElement(validationList);

  if (!totalIssues) {
    validationSummary.textContent = "校验通过";

    const item = document.createElement("li");
    item.className = "validation-item";
    item.dataset.level = "success";
    item.textContent = "必填字段和基础导出风险检查均已通过。";
    validationList.appendChild(item);
    return;
  }

  validationSummary.textContent = `${result.errors.length} 错误 / ${result.warnings.length} 风险`;

  [
    ...result.errors.map((issue) => ({ ...issue, level: "error" })),
    ...result.warnings.map((issue) => ({ ...issue, level: "warning" }))
  ].forEach((issue) => {
    const item = document.createElement("li");
    item.className = "validation-item";
    item.dataset.level = issue.level;
    item.textContent = issue.message;
    validationList.appendChild(item);
  });
}

function focusValidationField(issue) {
  const fields = {
    title: productTitleInput,
    handle: productHandleInput,
    price: productPriceInput,
    compareAtPrice: productCompareAtPriceInput,
    images: imageGrid,
    variants: variantList
  };
  const target = fields[issue?.field];

  if (target?.focus) {
    target.focus();
    return;
  }

  validationPanel.scrollIntoView({ block: "nearest" });
}

function confirmRiskyExport(result) {
  if (!result.warnings.length) {
    return true;
  }

  const warningText = result.warnings
    .slice(0, 6)
    .map((warning) => `- ${warning.message}`)
    .join("\n");
  const moreText =
    result.warnings.length > 6 ? `\n- 还有 ${result.warnings.length - 6} 个风险项` : "";

  return window.confirm(
    `导出前发现 ${result.warnings.length} 个风险：\n${warningText}${moreText}\n\n是否仍然导出 CSV？`
  );
}

function updateDraftFromForm() {
  if (!currentProductDraft) {
    return;
  }

  currentProductDraft.title = productTitleInput.value.trim();
  currentProductDraft.price = productPriceInput.value.trim();
  currentProductDraft.compareAtPrice = productCompareAtPriceInput.value.trim();
  currentProductDraft.sku = productSkuInput.value.trim();
  currentProductDraft.vendor = productVendorInput.value.trim();
  currentProductDraft.type = productTypeInput.value.trim();
  currentProductDraft.tags = productTagsInput.value.trim();
  currentProductDraft.status = productStatusSelect.value;
  currentProductDraft.published = productPublishedSelect.value;
  currentProductDraft.handle = productHandleInput.value.trim();
  currentProductDraft.description = productDescriptionInput.value.trim();
  currentProductDraft.seoTitle = currentProductDraft.title;
  currentProductDraft.seoDescription = currentProductDraft.description.slice(0, 320);
  currentProductDraft.images = normalizeImages(
    getImagesFromForm(),
    currentProductDraft.title
  );
  currentProductDraft.variants = normalizeVariants(
    {
      ...currentProductDraft,
      variants: getVariantsFromForm()
    },
    currentProductDraft.images
  );

  if (
    currentProductDraft.variants.length === 1 &&
    currentProductDraft.variants[0].option1Name === "Default Title" &&
    currentProductDraft.variants[0].option1Value === "Default Title"
  ) {
    currentProductDraft.variants[0].sku = currentProductDraft.sku;
    currentProductDraft.variants[0].price = currentProductDraft.price;
    currentProductDraft.variants[0].compareAtPrice = currentProductDraft.compareAtPrice;
  }
}

function queueSaveDraft(message = "草稿已自动保存") {
  if (!currentProductDraft) {
    return;
  }

  window.clearTimeout(saveTimer);
  cacheHint.textContent = "正在保存草稿...";

  saveTimer = window.setTimeout(async () => {
    updateDraftFromForm();
    await saveDraft(currentProductDraft);
    cacheHint.textContent = message;
  }, 260);
}

function renderImages(images) {
  clearElement(imageGrid);

  const productImages = normalizeImages(images);
  const visibleImages = productImages
    .map((image, index) => ({ image, index }))
    .filter(({ image }) => imageMatchesSourceFilter(image));
  imageCount.textContent = `${productImages.length} 张`;

  if (!productImages.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "未识别到商品图片。";
    imageGrid.appendChild(empty);
    updateImageSelectionToolbar();
    updateImageCheckToolbar();
    return;
  }

  if (!visibleImages.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "当前筛选条件下没有图片。";
    imageGrid.appendChild(empty);
    updateImageSelectionToolbar();
    updateImageCheckToolbar();
    return;
  }

  visibleImages.forEach(({ image, index }) => {
    const item = document.createElement("figure");
    item.className = "image-item";
    item.dataset.imageIndex = String(index);
    item.draggable = true;
    item.addEventListener("dragstart", handleImageDragStart);
    item.addEventListener("dragover", handleImageDragOver);
    item.addEventListener("drop", handleImageDrop);
    item.addEventListener("dragend", handleImageDragEnd);

    const preview = document.createElement("div");
    preview.className = "image-preview";
    updateImagePreviewSource(preview, image.url, image.altText || "商品图片");

    const caption = document.createElement("figcaption");
    caption.textContent = index === 0 ? `#${image.position} 主图` : `#${image.position}`;

    const selectLabel = document.createElement("label");
    const selectCheckbox = document.createElement("input");
    selectLabel.className = "image-select-control";
    selectCheckbox.type = "checkbox";
    selectCheckbox.className = "image-select-checkbox";
    selectCheckbox.dataset.index = String(index);
    selectCheckbox.setAttribute("aria-label", `选择第 ${image.position} 张图片`);
    selectCheckbox.addEventListener("change", () => {
      item.classList.toggle("is-selected", selectCheckbox.checked);
      updateImageSelectionToolbar();
    });
    selectLabel.append(selectCheckbox);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "image-delete-button";
    deleteButton.textContent = "删除";
    deleteButton.addEventListener("click", () => {
      const scrollContainer = document.querySelector(".popup-shell");
      const previousScrollTop = scrollContainer?.scrollTop || 0;

      clearValidationResults();
      updateDraftFromForm();
      currentProductDraft.images.splice(index, 1);
      currentProductDraft.images = normalizeImages(
        currentProductDraft.images,
        currentProductDraft.title
      );
      renderImages(currentProductDraft.images);
      window.requestAnimationFrame(() => {
        if (scrollContainer) {
          scrollContainer.scrollTop = Math.min(
            previousScrollTop,
            scrollContainer.scrollHeight
          );
        }

        const nextInputs = imageGrid.querySelectorAll(".image-url-input");
        const nextInput = nextInputs[Math.min(index, nextInputs.length - 1)];
        nextInput?.focus({ preventScroll: true });
      });
      queueSaveDraft("图片已删除并保存");
    });

    const mainButton = document.createElement("button");
    mainButton.type = "button";
    mainButton.className = "image-main-button";
    mainButton.textContent = index === 0 ? "主图" : "设主图";
    mainButton.disabled = index === 0;
    mainButton.addEventListener("click", () => {
      setMainImage(index);
    });

    preview.append(caption, selectLabel, deleteButton, mainButton);

    const urlInput = document.createElement("input");
    const altInput = document.createElement("input");
    const checkStatus = document.createElement("span");
    urlInput.className = "image-url-input";
    urlInput.type = "url";
    urlInput.value = image.url;
    urlInput.placeholder = "图片 URL";
    altInput.className = "image-alt-input";
    altInput.type = "text";
    altInput.value = image.altText || "";
    altInput.placeholder = "图片 Alt text";
    checkStatus.className = "image-check-status";
    renderImageCheckStatus(checkStatus, image.check);
    urlInput.addEventListener("input", () => {
      clearValidationResults();
      if (!currentProductDraft.images[index]) {
        currentProductDraft.images[index] = {
          url: "",
          position: index + 1,
          altText: currentProductDraft.title || ""
        };
      }

      currentProductDraft.images[index].url = urlInput.value.trim();
      currentProductDraft.images[index].check = null;
      renderImageCheckStatus(checkStatus, null);
      updateImagePreviewSource(
        preview,
        currentProductDraft.images[index].url,
        currentProductDraft.images[index].altText || currentProductDraft.title || "商品图片"
      );
      updateImageCheckToolbar();
      queueSaveDraft();
    });
    altInput.addEventListener("input", () => {
      clearValidationResults();
      if (!currentProductDraft.images[index]) {
        currentProductDraft.images[index] = {
          url: "",
          position: index + 1,
          altText: currentProductDraft.title || ""
        };
      }

      currentProductDraft.images[index].altText = altInput.value.trim();
      queueSaveDraft();
    });

    item.append(preview, urlInput, altInput, checkStatus);
    imageGrid.appendChild(item);
  });

  updateImageSelectionToolbar();
  updateImageCheckToolbar();
}

function addManualImage() {
  if (!currentProductDraft) {
    setStatus("请先采集商品，再添加图片", "error");
    return;
  }

  updateDraftFromForm();
  clearValidationResults();
  currentProductDraft.images = normalizeImages(currentProductDraft.images);
  currentProductDraft.images.push({
    url: "",
    position: currentProductDraft.images.length + 1,
    altText: currentProductDraft.title || ""
  });

  renderImages(currentProductDraft.images);
  queueSaveDraft("已添加图片输入框");

  const imageInputs = imageGrid.querySelectorAll(".image-url-input");
  imageInputs[imageInputs.length - 1]?.focus();
}

function createVariantInput(field, labelText, value, options = {}) {
  const label = document.createElement("label");
  const span = document.createElement("span");
  const input = document.createElement("input");

  if (options.wide) {
    label.className = "variant-field-wide";
  }

  span.textContent = labelText;
  input.type = options.type || "text";
  input.value = value || "";
  input.placeholder = options.placeholder || "";
  input.dataset.variantField = field;
  input.addEventListener("input", () => {
    clearValidationResults();
    updateDraftFromForm();
    queueSaveDraft();
  });

  label.append(span, input);
  return label;
}

function renderVariants(variants) {
  clearElement(variantList);

  const normalizedVariants = normalizeVariants({
    ...currentProductDraft,
    variants
  });
  const exportableCount = normalizedVariants.filter(
    (variant) => !variant.excludedFromExport
  ).length;
  variantCount.textContent = `${exportableCount}/${normalizedVariants.length} 导出`;

  normalizedVariants.forEach((variant, index) => {
    const item = document.createElement("article");
    const header = document.createElement("div");
    const titleWrap = document.createElement("label");
    const selectCheckbox = document.createElement("input");
    const title = document.createElement("h3");
    const exportBadge = document.createElement("span");
    const deleteButton = document.createElement("button");
    const fields = document.createElement("div");

    item.className = "variant-item";
    item.classList.toggle("is-export-excluded", variant.excludedFromExport);
    item.dataset.variantIndex = String(index);
    item.dataset.exportExcluded = String(Boolean(variant.excludedFromExport));
    header.className = "variant-item-header";
    titleWrap.className = "variant-title-control";
    selectCheckbox.type = "checkbox";
    selectCheckbox.className = "variant-select-checkbox";
    selectCheckbox.dataset.index = String(index);
    selectCheckbox.setAttribute("aria-label", `选择变体 #${index + 1}`);
    selectCheckbox.addEventListener("change", () => {
      item.classList.toggle("is-selected", selectCheckbox.checked);
      updateVariantSelectionToolbar();
    });
    title.textContent = `变体 #${index + 1}`;
    exportBadge.className = "variant-export-badge";
    exportBadge.dataset.exportExcluded = String(Boolean(variant.excludedFromExport));
    exportBadge.textContent = variant.excludedFromExport ? "不导出" : "导出";
    titleWrap.append(selectCheckbox, title, exportBadge);
    deleteButton.type = "button";
    deleteButton.className = "ghost-button variant-delete-button";
    deleteButton.textContent = "删除";
    deleteButton.disabled = normalizedVariants.length <= 1;
    deleteButton.addEventListener("click", () => {
      if (normalizedVariants.length <= 1) {
        return;
      }

      clearValidationResults();
      updateDraftFromForm();
      currentProductDraft.variants.splice(index, 1);
      currentProductDraft.variants = normalizeVariants(currentProductDraft);
      renderVariants(currentProductDraft.variants);
      queueSaveDraft("变体已删除并保存");
    });

    fields.className = "variant-fields";
    fields.append(
      createVariantInput("option1Name", "Option1 名称", variant.option1Name, {
        placeholder: "例如 Flavor"
      }),
      createVariantInput("option1Value", "Option1 值", variant.option1Value, {
        placeholder: "例如 Chocolate"
      }),
      createVariantInput("sku", "SKU", variant.sku, {
        placeholder: "可选"
      }),
      createVariantInput("price", "价格", variant.price, {
        placeholder: "例如 24.99"
      }),
      createVariantInput("compareAtPrice", "原价/对比价", variant.compareAtPrice, {
        placeholder: "可选"
      }),
      createVariantInput("barcode", "Barcode", variant.barcode, {
        placeholder: "可选"
      }),
      createVariantInput("option2Name", "Option2 名称", variant.option2Name, {
        placeholder: "可选"
      }),
      createVariantInput("option2Value", "Option2 值", variant.option2Value, {
        placeholder: "可选"
      }),
      createVariantInput("option3Name", "Option3 名称", variant.option3Name, {
        placeholder: "可选"
      }),
      createVariantInput("option3Value", "Option3 值", variant.option3Value, {
        placeholder: "可选"
      }),
      createVariantInput("variantImageUrl", "变体图片 URL", variant.variantImageUrl, {
        type: "url",
        wide: true,
        placeholder: "可选，默认使用商品主图"
      })
    );

    header.append(titleWrap, deleteButton);
    item.append(header, fields);
    variantList.appendChild(item);
  });

  updateVariantSelectionToolbar();
}

function addVariant() {
  if (!currentProductDraft) {
    setStatus("请先采集商品，再添加变体", "error");
    return;
  }

  updateDraftFromForm();
  clearValidationResults();

  const firstVariant = currentProductDraft.variants[0] || {};

  if (
    currentProductDraft.variants.length === 1 &&
    firstVariant.option1Name === "Default Title" &&
    firstVariant.option1Value === "Default Title"
  ) {
    firstVariant.option1Name = "Option";
    firstVariant.option1Value = "";
  }

  currentProductDraft.variants.push({
    sku: "",
    barcode: "",
    option1Name:
      firstVariant.option1Name && firstVariant.option1Name !== "Default Title"
        ? firstVariant.option1Name
        : "Option",
    option1Value: "",
    option2Name: firstVariant.option2Name || "",
    option2Value: "",
    option3Name: firstVariant.option3Name || "",
    option3Value: "",
    price: currentProductDraft.price || firstVariant.price || "",
    compareAtPrice: currentProductDraft.compareAtPrice || "",
    variantImageUrl: ""
  });
  currentProductDraft.variants = normalizeVariants(currentProductDraft);
  renderVariants(currentProductDraft.variants);
  queueSaveDraft("已添加变体输入框");

  const lastInput = variantList.querySelector(
    `.variant-item:last-child [data-variant-field='option1Value']`
  );
  lastInput?.focus();
}

function renderProduct(product, options = {}) {
  currentProductDraft = normalizeDraft(product);
  productPanel.hidden = false;
  clearValidationResults();
  updateExportAvailability();

  setInputValue(productTitleInput, currentProductDraft.title);
  setInputValue(productPriceInput, currentProductDraft.price);
  setInputValue(productCompareAtPriceInput, currentProductDraft.compareAtPrice);
  setInputValue(productSkuInput, currentProductDraft.sku);
  setInputValue(productVendorInput, currentProductDraft.vendor);
  setInputValue(productTypeInput, currentProductDraft.type);
  setInputValue(productTagsInput, currentProductDraft.tags);
  productStatusSelect.value = currentProductDraft.status;
  productPublishedSelect.value = currentProductDraft.published;
  setInputValue(productHandleInput, currentProductDraft.handle);
  setInputValue(productDescriptionInput, currentProductDraft.description);

  sourceBadge.textContent = getSourceLabel(currentProductDraft.source);
  renderVariants(currentProductDraft.variants);
  renderImages(currentProductDraft.images);
  imageSourceInfo.textContent = getImageModeLabel(currentProductDraft);
  cacheHint.textContent = options.fromCache
    ? "已从缓存恢复，修改会自动保存"
    : "采集结果已缓存，修改会自动保存";
}

function getProductStatusMessage(product) {
  if (!product.title && !product.price && !product.images?.length) {
    return {
      message: "未识别到明显商品信息，可换商品详情页或手动修正",
      type: "error"
    };
  }

  if (!product.title || !product.price || !product.images?.length) {
    return {
      message: "采集完成，部分字段为空，已缓存",
      type: "success"
    };
  }

  return {
    message: "商品基础信息采集成功，已缓存",
    type: "success"
  };
}

async function collectCurrentProduct() {
  collectButton.disabled = true;
  exportCsvButton.disabled = true;
  clearValidationResults();
  setStatus("正在采集当前页面商品信息...", "loading");

  try {
    const tab = await getCurrentTab();

    if (!tab || !tab.id) {
      throw new Error("没有找到当前活动标签页");
    }

    currentTabUrl = tab.url || "";
    currentDraftKey = getDraftStorageKey(currentTabUrl);

    const response = await sendMessageWithInjection(tab.id, {
      type: "SPC_COLLECT_PRODUCT"
    });

    if (!response || !response.ok) {
      throw new Error(response?.error || "当前页面未返回有效商品信息");
    }

    renderProduct(response.data);
    renderPageInfo(response.data.page || {});
    await saveDraft(currentProductDraft);

    const result = getProductStatusMessage(currentProductDraft);
    setStatus(result.message, result.type);

    if (currentProductDraft.images?.length) {
      await checkCurrentImages({ auto: true });
    }
  } catch (error) {
    setStatus(error.message || "采集失败，请刷新页面后重试", "error");
  } finally {
    collectButton.disabled = false;
    updateExportAvailability();
  }
}

async function exportCurrentProductCsv() {
  if (!currentProductDraft) {
    setStatus("请先采集或恢复一个商品草稿", "error");
    return;
  }

  exportCsvButton.disabled = true;
  setStatus("正在生成 Shopify CSV...", "loading");

  try {
    updateDraftFromForm();
    currentProductDraft = normalizeDraft(currentProductDraft);
    await saveDraft(currentProductDraft);

    const validationResult = getExportValidation(currentProductDraft);
    renderValidationResults(validationResult);

    if (validationResult.errors.length) {
      focusValidationField(validationResult.errors[0]);
      setStatus("导出前校验未通过，请先修正必填字段", "error");
      return;
    }

    if (!confirmRiskyExport(validationResult)) {
      setStatus("已取消导出，可先修正风险字段", "idle");
      return;
    }

    if (!window.ShopifyProductCollectorCsv?.isReady) {
      throw new Error("CSV 模块尚未就绪");
    }

    const result =
      window.ShopifyProductCollectorCsv.downloadProductCsv(currentProductDraft);

    cacheHint.textContent = "已导出 CSV，当前草稿也已保存";
    setStatus(
      `CSV 已下载：${result.fileName}（${result.rowCount} 行数据）`,
      "success"
    );
  } catch (error) {
    setStatus(error.message || "CSV 导出失败", "error");
  } finally {
    updateExportAvailability();
  }
}

async function startImageAreaPicker() {
  selectImageAreaButton.disabled = true;
  setStatus("请在页面上点击商品图片区域，选择后重新打开插件采集", "loading");

  try {
    const tab = await getCurrentTab();

    if (!tab || !tab.id) {
      throw new Error("没有找到当前活动标签页");
    }

    const response = await sendMessageWithInjection(tab.id, {
      type: "SPC_START_IMAGE_PICKER"
    });

    if (!response || !response.ok) {
      throw new Error(response?.error || "无法启动图片区域选择");
    }

    setStatus("图片区域选择已启动，正在隐藏插件窗口", "loading");
    window.setTimeout(() => {
      window.close();
    }, 120);
  } catch (error) {
    setStatus(error.message || "图片区域选择启动失败", "error");
    selectImageAreaButton.disabled = false;
  }
}

async function refreshImagePickerStatus(tabId) {
  try {
    const response = await sendMessageWithInjection(tabId, {
      type: "SPC_GET_IMAGE_PICKER_STATUS"
    });

    if (response?.ok) {
      currentImagePickerStatus = response.data || null;

      if (currentProductDraft) {
        imageSourceInfo.textContent = getImageModeLabel(currentProductDraft);
      }
    }
  } catch (error) {
    currentImagePickerStatus = null;
  }
}

async function resetImageCollectionMode() {
  resetImageModeButton.disabled = true;
  setStatus("正在切回自动采图模式...", "loading");

  try {
    const tab = await getCurrentTab();

    if (!tab || !tab.id) {
      throw new Error("没有找到当前活动标签页");
    }

    const response = await sendMessageWithInjection(tab.id, {
      type: "SPC_CLEAR_IMAGE_PICKER"
    });

    if (!response || !response.ok) {
      throw new Error(response?.error || "无法清除手动图片区域");
    }

    currentImagePickerStatus = null;

    if (currentProductDraft) {
      currentProductDraft.imageSourceSelector = "";
      currentProductDraft.imageCollectionMode = "auto";
      currentProductDraft.manualImageCount = 0;
      currentProductDraft.manualImageNodeCount = 0;
      imageSourceInfo.textContent = "自动";
      queueSaveDraft("已切回自动采图模式");
    }

    setStatus("已切回自动采图模式，重新采集后生效", "success");
  } catch (error) {
    setStatus(error.message || "切换自动采图失败", "error");
  } finally {
    resetImageModeButton.disabled = false;
  }
}

function bindDraftInputs() {
  [
    productTitleInput,
    productPriceInput,
    productCompareAtPriceInput,
    productSkuInput,
    productVendorInput,
    productTypeInput,
    productTagsInput,
    productStatusSelect,
    productPublishedSelect,
    productHandleInput,
    productDescriptionInput
  ].forEach((input) => {
    input.addEventListener("input", () => {
      clearValidationResults();
      updateDraftFromForm();
      queueSaveDraft();
    });
    input.addEventListener("change", () => {
      clearValidationResults();
      updateDraftFromForm();
      queueSaveDraft();
    });
  });

  productTitleInput.addEventListener("input", () => {
    if (!currentProductDraft) {
      return;
    }

    productHandleInput.value = generateHandle(productTitleInput.value);
    clearValidationResults();
    updateDraftFromForm();
    queueSaveDraft();
  });

  regenerateHandleButton.addEventListener("click", () => {
    if (!currentProductDraft) {
      return;
    }

    productHandleInput.value = generateHandle(productTitleInput.value);
    clearValidationResults();
    updateDraftFromForm();
    queueSaveDraft("Handle 已重新生成并保存");
  });

  clearDraftButton.addEventListener("click", async () => {
    if (!currentDraftKey) {
      return;
    }

    await chromeStorageRemove(currentDraftKey);
    currentProductDraft = null;
    productPanel.hidden = true;
    clearValidationResults();
    updateExportAvailability();
    setStatus("当前页面缓存草稿已清空", "idle");
  });
}

function bindButtonFeedback() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button || button.disabled) {
      return;
    }

    button.classList.remove("is-click-feedback");
    void button.offsetWidth;
    button.classList.add("is-click-feedback");
    window.setTimeout(() => {
      button.classList.remove("is-click-feedback");
    }, 180);
  });
}

async function initializePopup() {
  try {
    const tab = await getCurrentTab();
    currentTabUrl = tab?.url || "";
    currentDraftKey = getDraftStorageKey(currentTabUrl);

    renderPageInfo({
      title: tab?.title || "",
      url: currentTabUrl
    });
    await refreshSiteRulePanel();
    const shouldExpandSiteRule = await chromeStorageGet(SITE_RULE_EXPAND_AFTER_PICK_KEY);

    if (shouldExpandSiteRule) {
      setCollapsibleState(siteRuleToggleButton, siteRuleBody, true);
      await chromeStorageRemove(SITE_RULE_EXPAND_AFTER_PICK_KEY);
      window.requestAnimationFrame(() => {
        siteRuleBody.closest(".site-rule-panel")?.scrollIntoView({ block: "nearest" });
      });
    }

    const cachedBatch = await loadBatchState();
    if (cachedBatch?.settings?.timeoutSeconds) {
      batchTimeoutInput.value = String(cachedBatch.settings.timeoutSeconds);
    }
    batchItems = normalizeBatchItems(cachedBatch?.items);
    selectedBatchItemIds = new Set(
      (Array.isArray(cachedBatch?.selectedIds) ? cachedBatch.selectedIds : []).filter((id) =>
        batchItems.some((item) => item.id === id)
      )
    );
    batchLogs = normalizeBatchLogs(cachedBatch?.logs);
    batchUrlInput.value = batchItems.map((item) => item.url).join("\n");
    renderBatchQueue();

    const cachedDraft = await loadCachedDraft(currentTabUrl);

    if (cachedDraft?.draft) {
      renderProduct(cachedDraft.draft, { fromCache: true });
      await refreshImagePickerStatus(tab.id);
      setStatus("已恢复当前页面缓存草稿", "success");
      return;
    }

    updateExportAvailability();

    if (currentTabUrl) {
      setStatus("已识别当前标签页，可采集商品信息", "idle");
    }
  } catch (error) {
    setStatus("无法读取当前标签页", "error");
  }
}

bindButtonFeedback();
bindDraftInputs();
collectButton.addEventListener("click", collectCurrentProduct);
exportCsvButton.addEventListener("click", exportCurrentProductCsv);
resetAllButton.addEventListener("click", resetAllState);
testSiteRuleButton.addEventListener("click", testSiteRule);
saveSiteRuleButton.addEventListener("click", saveSiteRule);
clearSiteRuleButton.addEventListener("click", clearSiteRule);
siteRulePickButtons.forEach((button) => {
  button.addEventListener("click", () => {
    startSiteRulePicker(button.dataset.siteRuleField);
  });
});
siteRuleClearButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearSiteRuleField(button.dataset.siteRuleClearField);
  });
});
discoverBatchUrlsButton.addEventListener("click", discoverBatchUrlsFromCurrentPage);
prepareBatchButton.addEventListener("click", prepareBatchQueue);
precheckBatchButton.addEventListener("click", precheckBatchQueue);
startBatchButton.addEventListener("click", startBatchCollection);
stopBatchButton.addEventListener("click", stopBatchCollection);
exportBatchCsvButton.addEventListener("click", exportBatchCsv);
exportSelectedBatchCsvButton.addEventListener("click", () => {
  exportBatchCsv({ selectedOnly: true });
});
retryFailedBatchButton.addEventListener("click", retryFailedBatchItems);
selectAllBatchButton.addEventListener("click", toggleBatchSelection);
deleteSelectedBatchButton.addEventListener("click", deleteSelectedBatchItems);
fixDuplicateHandlesButton.addEventListener("click", fixDuplicateBatchHandles);
clearBatchButton.addEventListener("click", clearBatchQueue);
batchTimeoutInput.addEventListener("change", () => {
  batchTimeoutInput.value = String(getBatchTimeoutSeconds());
  saveBatchState();
  setStatus(`采集超时已设置为 ${getBatchTimeoutSeconds()} 秒`, "success");
});
batchVendorInput.addEventListener("input", updateBatchEditControls);
batchTagsInput.addEventListener("input", updateBatchEditControls);
applyBatchEditButton.addEventListener("click", applyBatchEditsToSelectedItems);
batchList.addEventListener("click", handleBatchListClick);
batchList.addEventListener("change", handleBatchListChange);
batchList.addEventListener("keydown", handleBatchListKeydown);
clearBatchLogButton.addEventListener("click", () => {
  batchLogs = [];
  renderBatchLog();
  saveBatchState();
});
selectImageAreaButton.addEventListener("click", startImageAreaPicker);
addImageButton.addEventListener("click", addManualImage);
addVariantButton.addEventListener("click", addVariant);
resetImageModeButton.addEventListener("click", resetImageCollectionMode);
variantSelectAllButton.addEventListener("click", () => {
  const checkboxes = Array.from(variantList.querySelectorAll(".variant-select-checkbox"));
  setVariantSelection(checkboxes.some((checkbox) => !checkbox.checked));
});
deleteSelectedVariantsButton.addEventListener("click", deleteSelectedVariants);
excludeSelectedVariantsButton.addEventListener("click", () => {
  setSelectedVariantsExportState(true);
});
includeSelectedVariantsButton.addEventListener("click", () => {
  setSelectedVariantsExportState(false);
});
imageSelectAllButton.addEventListener("click", () => {
  const checkboxes = Array.from(imageGrid.querySelectorAll(".image-select-checkbox"));
  setImageSelection(checkboxes.some((checkbox) => !checkbox.checked));
});
checkImagesButton.addEventListener("click", checkCurrentImages);
filterSmallImagesButton.addEventListener("click", filterSmallImages);
filterDuplicateImagesButton.addEventListener("click", filterDuplicateImages);
fillImageAltButton.addEventListener("click", fillImageAltText);
replaceImageDomainButton.addEventListener("click", replaceImageDomain);
imageSourceFilter.addEventListener("change", () => {
  renderImages(currentProductDraft?.images || []);
});
deleteSelectedImagesButton.addEventListener("click", deleteSelectedImages);
bindCollapsibleSection(batchToggleButton, batchBody);
bindCollapsibleSection(batchTitleToggle, batchBody);
bindCollapsibleHeader(batchHeader, batchBody);
bindCollapsibleSection(siteRuleToggleButton, siteRuleBody);
bindCollapsibleSection(siteRuleTitleToggle, siteRuleBody);
bindCollapsibleHeader(siteRuleHeader, siteRuleBody);
bindCollapsibleSection(resultToggleButton, resultBody);
bindCollapsibleSection(resultTitleToggle, resultBody);
bindCollapsibleHeader(resultHeader, resultBody);
bindCollapsibleSection(variantToggleButton, variantBody);
bindCollapsibleSection(variantTitleToggle, variantBody);
bindCollapsibleHeader(variantHeader, variantBody);
bindCollapsibleSection(imageToggleButton, imageBody);
bindCollapsibleSection(imageTitleToggle, imageBody);
bindCollapsibleHeader(imageHeader, imageBody);
initializePopup();
