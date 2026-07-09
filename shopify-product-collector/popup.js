const collectButton = document.getElementById("collectButton");
const exportCsvButton = document.getElementById("exportCsvButton");
const selectImageAreaButton = document.getElementById("selectImageAreaButton");
const addImageButton = document.getElementById("addImageButton");
const resetImageModeButton = document.getElementById("resetImageModeButton");
const addVariantButton = document.getElementById("addVariantButton");
const clearDraftButton = document.getElementById("clearDraftButton");
const resetAllButton = document.getElementById("resetAllButton");
const regenerateHandleButton = document.getElementById("regenerateHandleButton");
const amazonVariantPaginationInput = document.getElementById("amazonVariantPaginationInput");
const batchTitleToggle = document.getElementById("batchTitleToggle");
const batchToggleButton = document.getElementById("batchToggleButton");
const batchBody = document.getElementById("batchBody");
const batchHeader = batchTitleToggle?.closest(".accordion-header");
const batchSummary = document.getElementById("batchSummary");
const batchCount = document.getElementById("batchCount");
const batchUrlInput = document.getElementById("batchUrlInput");
const batchCategoryUrlInput = document.getElementById("batchCategoryUrlInput");
const batchCategoryNameInput = document.getElementById("batchCategoryNameInput");
const batchCategoryTypeInput = document.getElementById("batchCategoryTypeInput");
const batchCategoryTagsInput = document.getElementById("batchCategoryTagsInput");
const discoverCategoryUrlsButton = document.getElementById("discoverCategoryUrlsButton");
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
const batchConcurrencyInput = document.getElementById("batchConcurrencyInput");
const batchDiscoveryPageLimitInput = document.getElementById("batchDiscoveryPageLimitInput");
const batchProgressText = document.getElementById("batchProgressText");
const batchProgressBar = document.getElementById("batchProgressBar");
const batchSearchInput = document.getElementById("batchSearchInput");
const batchEditPanel = document.getElementById("batchEditPanel");
const batchEditSummary = document.getElementById("batchEditSummary");
const batchVendorInput = document.getElementById("batchVendorInput");
const batchTypeInput = document.getElementById("batchTypeInput");
const batchTagsInput = document.getElementById("batchTagsInput");
const batchStatusSelect = document.getElementById("batchStatusSelect");
const batchPublishedSelect = document.getElementById("batchPublishedSelect");
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
const siteRuleHeader = siteRuleTitleToggle?.closest(".accordion-header");
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
const imagePanel = imageGrid?.closest(".image-panel");
const cacheHint = document.getElementById("cacheHint");
const validationPanel = document.getElementById("validationPanel");
const validationSummary = document.getElementById("validationSummary");
const validationList = document.getElementById("validationList");
const resultTitleToggle = document.getElementById("resultTitleToggle");
const resultToggleButton = document.getElementById("resultToggleButton");
const resultBody = document.getElementById("resultBody");
const resultHeader = resultTitleToggle?.closest(".accordion-header");
const variantCount = document.getElementById("variantCount");
const variantList = document.getElementById("variantList");
const variantPanel = variantList?.closest(".variant-panel");
const variantTitleToggle = document.getElementById("variantTitleToggle");
const variantToggleButton = document.getElementById("variantToggleButton");
const variantSelectAllButton = document.getElementById("variantSelectAllButton");
const deleteSelectedVariantsButton = document.getElementById("deleteSelectedVariantsButton");
const excludeSelectedVariantsButton = document.getElementById("excludeSelectedVariantsButton");
const includeSelectedVariantsButton = document.getElementById("includeSelectedVariantsButton");
const mergeDuplicateVariantsButton = document.getElementById("mergeDuplicateVariantsButton");
const fillVariantSkuButton = document.getElementById("fillVariantSkuButton");
const checkVariantsButton = document.getElementById("checkVariantsButton");
const variantSearchInput = document.getElementById("variantSearchInput");
const variantBody = document.getElementById("variantBody");
const variantHeader = variantTitleToggle?.closest(".accordion-header");
const imageTitleToggle = document.getElementById("imageTitleToggle");
const imageToggleButton = document.getElementById("imageToggleButton");
const imageSelectAllButton = document.getElementById("imageSelectAllButton");
const checkImagesButton = document.getElementById("checkImagesButton");
const filterSmallImagesButton = document.getElementById("filterSmallImagesButton");
const filterDuplicateImagesButton = document.getElementById("filterDuplicateImagesButton");
const fillImageAltButton = document.getElementById("fillImageAltButton");
const downloadSelectedImagesButton = document.getElementById("downloadSelectedImagesButton");
const deleteSelectedImagesButton = document.getElementById("deleteSelectedImagesButton");
const imageSourceFilter = document.getElementById("imageSourceFilter");
const imageReplaceFromInput = document.getElementById("imageReplaceFromInput");
const imageReplaceToInput = document.getElementById("imageReplaceToInput");
const replaceImageDomainButton = document.getElementById("replaceImageDomainButton");
const imageBody = document.getElementById("imageBody");
const imageHeader = imageTitleToggle?.closest(".accordion-header");
const headerDomainBadge = document.getElementById("headerDomainBadge");
const siteTypeBadge = document.getElementById("siteTypeBadge");
const workspaceTabButtons = Array.from(document.querySelectorAll("[data-workspace-tab]"));
const workspaceTabPanels = Array.from(document.querySelectorAll("[data-tab-panel]"));
const summaryShortcutButtons = Array.from(document.querySelectorAll("[data-tab-shortcut]"));
const summaryProductStatus = document.getElementById("summaryProductStatus");
const summaryImageStatus = document.getElementById("summaryImageStatus");
const summaryVariantStatus = document.getElementById("summaryVariantStatus");
const summaryBatchStatus = document.getElementById("summaryBatchStatus");
const summaryRiskStatus = document.getElementById("summaryRiskStatus");
const bottomModeLabel = document.getElementById("bottomModeLabel");
const bottomValidationState = document.getElementById("bottomValidationState");
const bottomResetButton = document.getElementById("bottomResetButton");
const bottomExportCsvButton = document.getElementById("bottomExportCsvButton");

function addSafeEventListener(target, type, listener, options) {
  target?.addEventListener?.(type, listener, options);
}

const BATCH_STORAGE_KEY = "spc:batch-queue:v1";
const COLLECTOR_SETTINGS_STORAGE_KEY = "spc:collector-settings:v1";
const SITE_RULE_EXPAND_AFTER_PICK_KEY = "spc:ui:site-rule-expand-after-pick";
const POPUP_UI_RETURN_STORAGE_PREFIX = "spc:ui:return:";
const SITE_RULE_STORAGE_PREFIX = "spc:site-rule:";
const BATCH_TAB_LOAD_TIMEOUT_MS = 35000;
const MIN_BATCH_TIMEOUT_SECONDS = 8;
const MAX_BATCH_TIMEOUT_SECONDS = 90;
const DEFAULT_BATCH_CONCURRENCY = 2;
const MIN_BATCH_CONCURRENCY = 1;
const MAX_BATCH_CONCURRENCY = 4;
const DEFAULT_DISCOVERY_PAGE_LIMIT = 5;
const MIN_DISCOVERY_PAGE_LIMIT = 1;
const MAX_DISCOVERY_PAGE_LIMIT = 20;
const IMAGE_SCROLL_THRESHOLD = 8;
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
let collectorSettings = {
  amazonFollowVariantPages: false
};
let isBatchCollecting = false;
let isBatchPreviewHydrating = false;
let isBatchPrechecking = false;
let isCheckingImages = false;
let shouldStopBatchCollection = false;
let draggedImageIndex = null;
let activePagePicker = null;

function setStatus(message, type = "idle") {
  if (statusText) {
    statusText.textContent = message;
  }

  if (statusDot) {
    statusDot.dataset.status = type;
  }

  if (bottomValidationState) {
    bottomValidationState.textContent = message || "等待校验";
  }
}

const WORKSPACE_TAB_LABELS = {
  product: "商品编辑",
  variants: "变体管理",
  images: "图片管理",
  batch: "批量采集",
  tools: "规则与工具",
  validation: "导出校验"
};

function activateWorkspaceTab(tabName = "product") {
  const normalizedTab = WORKSPACE_TAB_LABELS[tabName] ? tabName : "product";

  workspaceTabButtons.forEach((button) => {
    const isActive = button.dataset.workspaceTab === normalizedTab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  summaryShortcutButtons.forEach((button) => {
    const isActive = button.dataset.tabShortcut === normalizedTab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  workspaceTabPanels.forEach((panel) => {
    const isActive = panel.dataset.tabPanel === normalizedTab;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

  document.querySelector(".popup-shell")?.setAttribute("data-active-tab", normalizedTab);

  if (bottomModeLabel) {
    bottomModeLabel.textContent = WORKSPACE_TAB_LABELS[normalizedTab];
  }
}

function getPopupShellElement() {
  return document.querySelector(".popup-shell");
}

function getActiveWorkspaceTabName() {
  return (
    document.querySelector("[data-workspace-tab].is-active")?.dataset.workspaceTab ||
    getPopupShellElement()?.dataset.activeTab ||
    "product"
  );
}

function getPopupUiReturnStorageKey(url = currentTabUrl) {
  return `${POPUP_UI_RETURN_STORAGE_PREFIX}${hashString(normalizePageUrl(url || ""))}`;
}

function savePopupUiReturnState(tabName = getActiveWorkspaceTabName(), reason = "manual") {
  if (!currentTabUrl) {
    return Promise.resolve();
  }

  return chromeStorageSet({
    [getPopupUiReturnStorageKey()]: {
      tabName,
      reason,
      scrollTop: getPopupShellElement()?.scrollTop || 0,
      imageGridScrollTop: imageGrid?.scrollTop || 0,
      updatedAt: Date.now()
    }
  });
}

async function restorePopupUiReturnState() {
  if (!currentTabUrl) {
    return false;
  }

  const storageKey = getPopupUiReturnStorageKey();
  const state = await chromeStorageGet(storageKey);

  if (!state || !WORKSPACE_TAB_LABELS[state.tabName]) {
    return false;
  }

  activateWorkspaceTab(state.tabName);
  window.requestAnimationFrame(() => {
    const scrollContainer = getPopupShellElement();

    if (scrollContainer) {
      scrollContainer.scrollTop = Math.min(
        Number(state.scrollTop) || 0,
        scrollContainer.scrollHeight
      );
    }

    if (imageGrid) {
      imageGrid.scrollTop = Math.min(
        Number(state.imageGridScrollTop) || 0,
        imageGrid.scrollHeight
      );
    }
  });
  await chromeStorageRemove(storageKey);
  return true;
}

function getCurrentDraftValidationCounts() {
  if (!currentProductDraft) {
    return { errors: 0, warnings: 0 };
  }

  const validation = getExportValidation(currentProductDraft);

  return {
    errors: validation.errors.length,
    warnings: validation.warnings.length
  };
}

function updateWorkspaceSummary() {
  const images = normalizeImages(currentProductDraft?.images || [], currentProductDraft?.title || "");
  const variants = currentProductDraft
    ? normalizeVariants(currentProductDraft, images).filter((variant) => !variant.excludedFromExport)
    : [];
  const allVariants = currentProductDraft ? normalizeVariants(currentProductDraft, images) : [];
  const batchStats = getBatchStats();
  const validationCounts = getCurrentDraftValidationCounts();
  const riskCount = validationCounts.errors + validationCounts.warnings;

  if (summaryProductStatus) {
    summaryProductStatus.textContent = currentProductDraft?.title ? "已采集" : "未采集";
  }

  if (summaryImageStatus) {
    summaryImageStatus.textContent = `${images.length} 张`;
  }

  if (summaryVariantStatus) {
    summaryVariantStatus.textContent = `${variants.length}/${allVariants.length || 0}`;
  }

  if (summaryBatchStatus) {
    summaryBatchStatus.textContent = `${batchStats.total} 个`;
  }

  if (summaryRiskStatus) {
    summaryRiskStatus.textContent = riskCount
      ? `${validationCounts.errors} 错误 / ${validationCounts.warnings} 风险`
      : "0 风险";
  }

  if (bottomValidationState && !statusText?.textContent) {
    bottomValidationState.textContent = riskCount ? summaryRiskStatus.textContent : "等待校验";
  }
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

async function syncCurrentTabContext() {
  const tab = await getCurrentTab();

  if (!tab?.id) {
    throw new Error("没有找到当前活动标签页");
  }

  const nextUrl = tab.url || "";
  const didChange = normalizePageUrl(nextUrl) !== normalizePageUrl(currentTabUrl);

  currentTabUrl = nextUrl;
  currentDraftKey = getDraftStorageKey(currentTabUrl);
  renderPageInfo({
    title: tab.title || "",
    url: currentTabUrl
  });
  primeCategoryUrlFromCurrentTab(currentTabUrl);

  if (didChange) {
    currentImagePickerStatus = null;
    await refreshSiteRulePanel();
  }

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

  if (headerDomainBadge) {
    headerDomainBadge.textContent = domain;
    headerDomainBadge.title = domain;
  }

  if (!currentProductDraft) {
    updateSiteTypeBadge();
  }
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

function getBatchConcurrency() {
  const value = Number(batchConcurrencyInput?.value || DEFAULT_BATCH_CONCURRENCY);

  if (!Number.isFinite(value)) {
    return DEFAULT_BATCH_CONCURRENCY;
  }

  return Math.max(
    MIN_BATCH_CONCURRENCY,
    Math.min(MAX_BATCH_CONCURRENCY, Math.round(value))
  );
}

function getBatchDiscoveryPageLimit() {
  const value = Number(batchDiscoveryPageLimitInput?.value || DEFAULT_DISCOVERY_PAGE_LIMIT);

  if (!Number.isFinite(value)) {
    return DEFAULT_DISCOVERY_PAGE_LIMIT;
  }

  return Math.max(
    MIN_DISCOVERY_PAGE_LIMIT,
    Math.min(MAX_DISCOVERY_PAGE_LIMIT, Math.round(value))
  );
}

function normalizeCollectorSettings(settings = {}) {
  return {
    amazonFollowVariantPages: Boolean(settings.amazonFollowVariantPages)
  };
}

function renderCollectorSettings(settings = collectorSettings) {
  const normalizedSettings = normalizeCollectorSettings(settings);

  collectorSettings = normalizedSettings;
  if (amazonVariantPaginationInput) {
    amazonVariantPaginationInput.checked = normalizedSettings.amazonFollowVariantPages;
  }
}

function getCollectorSettingsFromForm() {
  return normalizeCollectorSettings({
    amazonFollowVariantPages: Boolean(amazonVariantPaginationInput?.checked)
  });
}

async function loadCollectorSettings() {
  const savedSettings = await chromeStorageGet(COLLECTOR_SETTINGS_STORAGE_KEY);

  renderCollectorSettings(savedSettings || {});
  return collectorSettings;
}

async function saveCollectorSettingsFromForm() {
  collectorSettings = getCollectorSettingsFromForm();
  renderCollectorSettings(collectorSettings);
  await chromeStorageSet({
    [COLLECTOR_SETTINGS_STORAGE_KEY]: collectorSettings
  });
  setStatus("采集设置已保存", "success");
}

function normalizeSearchText(value) {
  return String(value || "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/^https?:\/\//i, "")
    .replace(/[?#&=/_.:-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function searchTermMatches(term, text) {
  if (!term) {
    return true;
  }

  if (text.includes(term)) {
    return true;
  }

  let termIndex = 0;

  for (const character of text) {
    if (character === term[termIndex]) {
      termIndex += 1;
    }

    if (termIndex >= term.length) {
      return true;
    }
  }

  return false;
}

function fuzzySearchMatches(query, values = []) {
  const terms = normalizeSearchText(query).split(/\s+/).filter(Boolean);

  if (!terms.length) {
    return true;
  }

  const haystack = normalizeSearchText(values.filter(Boolean).join(" "));

  if (!haystack) {
    return false;
  }

  return terms.every((term) => searchTermMatches(term, haystack));
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
        timeoutSeconds: getBatchTimeoutSeconds(),
        concurrency: getBatchConcurrency(),
        discoveryPageLimit: getBatchDiscoveryPageLimit(),
        categoryUrl: cleanText(batchCategoryUrlInput?.value),
        categoryName: cleanText(batchCategoryNameInput?.value),
        categoryType: cleanText(batchCategoryTypeInput?.value),
        categoryTags: cleanText(batchCategoryTagsInput?.value)
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

function getUrlHostLabel(url, fallback = "当前页面") {
  try {
    return new URL(url).hostname.replace(/^www\./i, "") || fallback;
  } catch (error) {
    return fallback;
  }
}

function titleCaseSlug(value) {
  return cleanText(value)
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}

function inferCategoryNameFromUrl(url) {
  try {
    const parsedUrl = new URL(url);
    const segments = parsedUrl.pathname.split("/").filter(Boolean);
    const leaf = segments[segments.length - 1] || parsedUrl.hostname;

    return titleCaseSlug(leaf);
  } catch (error) {
    return "";
  }
}

function isCollectionPageUrl(url) {
  try {
    return /\/collections?\//i.test(new URL(url).pathname);
  } catch (error) {
    return false;
  }
}

function primeCategoryUrlFromCurrentTab(url) {
  const normalizedUrl = normalizeBatchUrl(url);

  if (!normalizedUrl || !isCollectionPageUrl(normalizedUrl)) {
    return;
  }

  const currentCategoryUrl = normalizeBatchUrl(batchCategoryUrlInput?.value || "");
  const shouldReplace =
    !currentCategoryUrl || getDomain(currentCategoryUrl) !== getDomain(normalizedUrl);

  if (!shouldReplace) {
    return;
  }

  batchCategoryUrlInput.value = normalizedUrl;

  if (!batchCategoryNameInput.value.trim()) {
    batchCategoryNameInput.value = inferCategoryNameFromUrl(normalizedUrl);
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

function mergeBatchTags(...values) {
  return normalizeBatchTags(values.filter(Boolean).join(", "));
}

function getBatchCategoryMetadata(defaultName = "") {
  const categoryName = cleanText(
    batchCategoryNameInput?.value ||
      inferCategoryNameFromUrl(batchCategoryUrlInput?.value || "") ||
      defaultName
  );
  const categoryType = cleanText(batchCategoryTypeInput?.value || categoryName);
  const categoryTags = mergeBatchTags(categoryName, batchCategoryTagsInput?.value);

  return {
    categoryName,
    categoryType,
    categoryTags
  };
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
        previewImageUrl: String(rawItem.previewImageUrl || "").trim(),
        categoryName: cleanText(rawItem.categoryName),
        categoryType: cleanText(rawItem.categoryType),
        categoryTags: normalizeBatchTags(rawItem.categoryTags)
      };
    })
    .filter(Boolean);
}

function mergeBatchUrls(itemsOrUrls, metadata = {}) {
  const discoveredItems = normalizeDiscoveredBatchItems(itemsOrUrls).map((item) => ({
    ...metadata,
    ...item,
    categoryName: item.categoryName || metadata.categoryName || "",
    categoryType: item.categoryType || metadata.categoryType || "",
    categoryTags: mergeBatchTags(metadata.categoryTags, item.categoryTags)
  }));
  const discoveredUrls = discoveredItems.map((item) => item.url);
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
    const hasCategoryUpdate =
      discoveredItem?.categoryName ||
      discoveredItem?.categoryType ||
      discoveredItem?.categoryTags;

    if (
      !discoveredItem ||
      (!discoveredItem.previewImageUrl && !discoveredItem.title && !hasCategoryUpdate) ||
      (item.previewImageUrl &&
        !hasCategoryUpdate &&
        (!discoveredItem.title || item.title !== "待采集"))
    ) {
      return item;
    }

    updatedPreviewCount += 1;
    return {
      ...item,
      title:
        item.title && item.title !== "待采集"
          ? compactUiText(item.title, 120)
          : compactUiText(discoveredItem.title || item.title, 120),
      previewImageUrl: item.previewImageUrl || discoveredItem.previewImageUrl,
      categoryName: item.categoryName || discoveredItem.categoryName || "",
      categoryType: item.categoryType || discoveredItem.categoryType || "",
      categoryTags: mergeBatchTags(item.categoryTags, discoveredItem.categoryTags)
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
      updated: updatedPreviewCount,
      urls: discoveredUrls
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
    updated: updatedPreviewCount,
    urls: discoveredUrls
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

function htmlToCompactUiText(value) {
  const text = String(value || "");

  if (!/[<>]/.test(text)) {
    return cleanText(text);
  }

  const element = document.createElement("div");
  element.innerHTML = text;
  const altText = Array.from(element.querySelectorAll("[alt]"))
    .map((candidate) => cleanText(candidate.getAttribute("alt")))
    .find(Boolean);

  return cleanText(altText || element.textContent);
}

function compactUiText(value, maxLength = 120) {
  const text = htmlToCompactUiText(value);

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, Math.max(0, maxLength - 3))}...`;
}

function createBatchItem(url, index = 0, metadata = {}) {
  return {
    id: `${Date.now()}-${index}-${hashString(url)}`,
    url,
    status: "pending",
    title: compactUiText(metadata.title, 120) || "待采集",
    previewImageUrl: metadata.previewImageUrl || "",
    previewStatus: metadata.previewImageUrl ? "loaded" : "",
    categoryName: metadata.categoryName || "",
    categoryType: metadata.categoryType || "",
    categoryTags: normalizeBatchTags(metadata.categoryTags),
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
        title: compactUiText(item?.title || item?.product?.title, 120) || "待采集",
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
        categoryName: cleanText(item?.categoryName),
        categoryType: cleanText(item?.categoryType),
        categoryTags: normalizeBatchTags(item?.categoryTags),
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
      message: compactUiText(log?.message, 180),
      title: compactUiText(log?.title, 100),
      url: compactUiText(log?.url, 140),
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

function applyBatchCategoryMetadata(product, item) {
  const categoryName = cleanText(item?.categoryName);
  const categoryType = cleanText(item?.categoryType || categoryName);
  const categoryTags = mergeBatchTags(categoryName, item?.categoryTags);

  if (!categoryType && !categoryTags) {
    return product;
  }

  const draft = normalizeDraft(product);

  return normalizeDraft({
    ...draft,
    type: categoryType || draft.type || "",
    tags: mergeBatchTags(draft.tags, categoryTags)
  });
}

function getBatchItemRisks(item) {
  if (item?.status !== "success" || !item.product) {
    return [];
  }

  const product = normalizeDraft(item.product);
  const images = normalizeImages(product.images, product.title).filter((image) =>
    String(image.url || "").trim()
  );
  const variants = normalizeVariants(product, images).filter(
    (variant) => !variant.excludedFromExport
  );
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

  if (hasDefaultTitleVariantWarning(variants)) {
    risks.push({ type: "variants", label: "默认变体" });
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
      message: compactUiText(message, 180),
      title: compactUiText(item?.title || item?.product?.title, 100),
      url: compactUiText(item?.url, 140),
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
  if (!batchReportPanel || !batchReportStats || !batchReportSummary) {
    return;
  }

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
  const hasEditValue = Boolean(
    batchVendorInput.value.trim() ||
      batchTypeInput.value.trim() ||
      batchTagsInput.value.trim() ||
      batchStatusSelect.value ||
      batchPublishedSelect.value
  );

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
  const type = batchTypeInput.value.trim();
  const tags = normalizeBatchTags(batchTagsInput.value);
  const status = batchStatusSelect.value;
  const published = batchPublishedSelect.value;

  if (!targetItems.length) {
    setStatus("请先选择已采集成功的商品", "error");
    return;
  }

  if (!vendor && !type && !tags && !status && !published) {
    setStatus("请填写品牌/供应商、商品类型、标签、状态或发布设置后再应用", "error");
    return;
  }

  targetItems.forEach((item) => {
    const product = normalizeDraft({
      ...item.product,
      vendor: vendor || item.product.vendor || "",
      type: type || item.product.type || "",
      tags: tags || item.product.tags || "",
      status: status || item.product.status || "active",
      published: published || item.product.published || "false"
    });

    updateBatchItemFromProduct(item, product);
  });

  renderBatchQueue();
  saveBatchState();
  addBatchLog(
    "success",
    `批量编辑已应用：${targetItems.length} 个商品${vendor ? "，品牌/供应商已更新" : ""}${type ? "，类型已更新" : ""}${tags ? "，标签已更新" : ""}${status ? "，状态已更新" : ""}${published ? "，发布设置已更新" : ""}`
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
      message.textContent = compactUiText(log.message, 180);
      message.title = log.message || "";
      context.textContent = compactUiText(log.title || log.url, 120);
      context.title = log.title || log.url || "";
      item.append(time, message, context);
      batchLogList.appendChild(item);
    });
}

function getBatchSearchQuery() {
  return batchSearchInput?.value.trim() || "";
}

function getBatchSearchValues(item, index = 0) {
  const product = item.product || {};

  return [
    item.title,
    item.url,
    item.handle,
    item.source,
    item.error,
    item.categoryName,
    item.categoryType,
    item.categoryTags,
    getBatchItemStatusLabel(item),
    `#${index + 1}`,
    product.title,
    product.handle,
    product.vendor,
    product.sku,
    product.tags,
    product.type,
    product.description
  ];
}

function batchItemMatchesSearch(item, index = 0, query = getBatchSearchQuery()) {
  return fuzzySearchMatches(query, getBatchSearchValues(item, index));
}

function getBatchCategoryLabel(item) {
  const categoryName = cleanText(item?.categoryName);
  const categoryType = cleanText(item?.categoryType);

  if (categoryName && categoryType && categoryName !== categoryType) {
    return `分类：${categoryName} / ${categoryType}`;
  }

  return categoryName || categoryType ? `分类：${categoryName || categoryType}` : "";
}

function getVisibleBatchItems() {
  const query = getBatchSearchQuery();

  if (!query) {
    return batchItems;
  }

  return batchItems.filter((item, index) => batchItemMatchesSearch(item, index, query));
}

function updateBatchControls() {
  const stats = getBatchStats();
  const doneCount = stats.success + stats.error;
  const progressValue = stats.total ? Math.round((doneCount / stats.total) * 100) : 0;
  const hasCollectable = batchItems.some((item) => item.status !== "success");
  const hasSuccess = batchItems.some((item) => item.status === "success" && item.product);
  const selectedItems = getSelectedBatchItems();
  const visibleBatchItems = getVisibleBatchItems();
  const isBatchSearchActive = Boolean(getBatchSearchQuery());
  const hasSelectedSuccess = selectedItems.some(
    (item) => item.status === "success" && item.product
  );
  const selectableItems = isBatchSearchActive ? visibleBatchItems : batchItems;
  const allSelected =
    selectableItems.length > 0 &&
    selectableItems.every((item) => selectedBatchItemIds.has(item.id));

  batchCount.textContent = isBatchSearchActive
    ? `${visibleBatchItems.length}/${stats.total} 个`
    : `${stats.total} 个`;
  batchProgressBar.value = progressValue;
  batchProgressText.textContent = stats.total
    ? `${stats.success}/${stats.total} 成功，${stats.error} 失败，${stats.pending} 待采集`
    : "等待生成队列";
  batchSummary.textContent = isBatchCollecting
    ? "正在按顺序采集队列，当前商品完成后可停止。"
    : stats.total
      ? `${stats.success} 个成功，${stats.error} 个失败，可继续采集或导出成功商品。`
      : "粘贴商品链接或按分类页发现商品；采集完成后可合并导出 Shopify CSV。";

  discoverBatchUrlsButton.disabled = isBatchCollecting;
  discoverCategoryUrlsButton.disabled = isBatchCollecting;
  prepareBatchButton.disabled = isBatchCollecting;
  precheckBatchButton.disabled = isBatchCollecting || isBatchPrechecking || !stats.total;
  precheckBatchButton.textContent = isBatchPrechecking ? "检查中" : "预检查链接";
  startBatchButton.disabled = isBatchCollecting || !stats.total || !hasCollectable;
  stopBatchButton.disabled = !isBatchCollecting;
  exportBatchCsvButton.disabled = isBatchCollecting || !hasSuccess;
  exportSelectedBatchCsvButton.disabled = isBatchCollecting || !hasSelectedSuccess;
  retryFailedBatchButton.disabled = isBatchCollecting || !stats.error;
  selectAllBatchButton.disabled = isBatchCollecting || !selectableItems.length;
  selectAllBatchButton.textContent = allSelected
    ? "取消全选"
    : isBatchSearchActive
      ? "全选结果"
      : "全选";
  deleteSelectedBatchButton.disabled = isBatchCollecting || !selectedItems.length;
  fixDuplicateHandlesButton.disabled = isBatchCollecting || !hasDuplicateBatchHandles();
  clearBatchButton.disabled = isBatchCollecting || !stats.total;
  updateBatchEditControls();
  renderBatchReport();
  renderBatchExportValidation();
  updateWorkspaceSummary();
}

function renderBatchQueue() {
  clearElement(batchList);
  pruneSelectedBatchItems();
  const batchSearchQuery = getBatchSearchQuery();
  let matchedBatchCount = 0;

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
    const matchesSearch = batchItemMatchesSearch(item, index, batchSearchQuery);
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
    const displayTitle = compactUiText(item.title, 120) || `商品 #${index + 1}`;
    const fullTitle = htmlToCompactUiText(item.title) || item.url;

    article.className = "batch-item";
    article.classList.toggle("is-search-hidden", !matchesSearch);
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
    preview.setAttribute("aria-label", `打开 ${displayTitle || item.url}`);
    if (item.previewImageUrl) {
      const previewImage = document.createElement("img");
      previewImage.src = item.previewImageUrl;
      previewImage.alt = displayTitle || "商品预览";
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
    title.textContent = displayTitle;
    title.title = fullTitle;
    title.dataset.batchAction = "open";
    title.dataset.batchId = item.id;
    title.setAttribute("role", "button");
    title.setAttribute("tabindex", "0");
    title.setAttribute("aria-label", `打开 ${displayTitle || item.url}`);
    url.textContent = item.url;

    const categoryLabel = getBatchCategoryLabel(item);

    if (item.status === "success") {
      meta.textContent = [
        categoryLabel,
        `${item.source || "自动"} · ${item.rowCount || 0} 行 · ${item.warningCount || 0} 风险`
      ].filter(Boolean).join(" · ");
    } else if (item.status === "error") {
      const errorTypeLabel = getBatchErrorTypeLabel(item.errorType);
      meta.textContent = [
        categoryLabel,
        `${errorTypeLabel ? `${errorTypeLabel} · ` : ""}${item.error || "采集失败"}`
      ].filter(Boolean).join(" · ");
    } else if (item.previewStatus === "loading") {
      meta.textContent = [categoryLabel, "正在通过 Shopify API 补充预览图"].filter(Boolean).join(" · ");
    } else {
      meta.textContent = [categoryLabel, "等待后台标签页采集"].filter(Boolean).join(" · ");
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

    if (matchesSearch) {
      matchedBatchCount += 1;
    }
  });

  if (batchSearchQuery && !matchedBatchCount) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "没有匹配的商品。";
    batchList.appendChild(empty);
  }

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

  const categoryMetadata = getBatchCategoryMetadata();

  batchItems = urls.map((url, index) => createBatchItem(url, index, categoryMetadata));
  selectedBatchItemIds = new Set();
  renderBatchQueue();
  saveBatchState();
  addBatchLog("info", `已生成 ${batchItems.length} 个商品的批量采集队列`);
  setStatus(`已生成 ${batchItems.length} 个商品的批量采集队列`, "success");
}

function getBatchPreviewHydrationCandidates(options = {}) {
  const urlFilter = new Set(
    (Array.isArray(options.urls) ? options.urls : [])
      .map(normalizeBatchUrl)
      .filter(Boolean)
  );

  return batchItems.filter(
    (item) =>
      (!urlFilter.size || urlFilter.has(item.url)) &&
      !item.previewImageUrl &&
      item.status !== "success" &&
      item.previewStatus !== "loading"
  );
}

function applyBatchPreviewData(item, preview = {}) {
  const previewImageUrl = String(preview.previewImageUrl || "").trim();

  if (preview.title) {
    item.title = compactUiText(preview.title, 120);
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

function applyBatchPreviewProduct(item, product) {
  return applyBatchPreviewData(item, {
    title: product?.title,
    previewImageUrl: product?.images?.find((image) => image?.url)?.url || ""
  });
}

async function collectBatchPreviewFromUrl(url) {
  const timeoutMs = getBatchTimeoutMs();
  const tab = await createBatchTab(url);

  try {
    await waitForBatchTabLoad(tab.id, timeoutMs);
    await delay(650);

    const response = await withTimeout(
      sendMessageWithInjection(tab.id, {
        type: "SPC_COLLECT_PRODUCT_PREVIEW"
      }),
      timeoutMs,
      "商品预览采集超时"
    );

    if (!response?.ok) {
      throw createCollectError("page", response?.error || "商品预览采集失败");
    }

    return response.data || {};
  } finally {
    await removeBatchTab(tab?.id);
  }
}

async function hydrateBatchPreviewItem(itemId) {
  const item = batchItems.find((candidate) => candidate.id === itemId);

  if (!item || item.previewImageUrl || item.status === "success") {
    return false;
  }

  try {
    let didUpdate = false;
    const shopifyAjaxUrl = getShopifyAjaxUrlFromProductUrl(item.url);

    if (shopifyAjaxUrl) {
      try {
        const product = await tryCollectShopifyAjaxFromUrl(item.url);
        const latestItem = batchItems.find((candidate) => candidate.id === itemId);

        if (!latestItem) {
          return false;
        }

        didUpdate = applyBatchPreviewProduct(latestItem, product);

        if (didUpdate) {
          return true;
        }
      } catch (error) {
        // Fall through to lightweight page preview for non-standard Shopify URLs.
      }
    }

    const preview = await collectBatchPreviewFromUrl(item.url);
    const latestItem = batchItems.find((candidate) => candidate.id === itemId);

    if (!latestItem) {
      return false;
    }

    return applyBatchPreviewData(latestItem, preview);
  } catch (error) {
    const latestItem = batchItems.find((candidate) => candidate.id === itemId);

    if (latestItem) {
      latestItem.previewStatus = "error";
      latestItem.updatedAt = new Date().toISOString();
    }

    return false;
  }
}

async function hydrateBatchPreviews(sourceLabel = "当前页面", options = {}) {
  if (isBatchPreviewHydrating) {
    return;
  }

  const candidates = getBatchPreviewHydrationCandidates(options);

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
    addBatchLog("success", `已异步为 ${updatedCount} 个待采集商品补充预览图`);
    setStatus(`已为 ${updatedCount} 个商品补充预览图`, "success");
  } else {
    addBatchLog("warning", `扫描 ${sourceLabel}：未能补充待采集商品预览图`);
  }
}

async function discoverProductUrlsFromTab(tabId) {
  return sendMessageWithInjection(tabId, {
    type: "SPC_DISCOVER_PRODUCT_URLS"
  });
}

async function settleBatchDiscoveryTab(tabId) {
  try {
    await chrome.scripting.executeScript({
      target: { tabId },
      func: async () => {
        const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));
        const getPageHeight = () =>
          Math.max(
            document.body?.scrollHeight || 0,
            document.documentElement?.scrollHeight || 0
          );
        const getLabel = (element) =>
          [
            element?.innerText,
            element?.textContent,
            element?.getAttribute?.("aria-label"),
            element?.getAttribute?.("title"),
            element?.value
          ]
            .filter(Boolean)
            .join(" ")
            .replace(/\s+/g, " ")
            .trim();
        const isVisible = (element) => {
          if (!element || element.disabled || element.getAttribute("aria-disabled") === "true") {
            return false;
          }

          const rect = element.getBoundingClientRect();
          const style = window.getComputedStyle(element);

          return (
            rect.width > 2 &&
            rect.height > 2 &&
            style.display !== "none" &&
            style.visibility !== "hidden" &&
            Number(style.opacity || 1) > 0
          );
        };
        const isLoadMoreControl = (element) => {
          const label = getLabel(element);

          if (!label || label.length > 80) {
            return false;
          }

          if (/\b(add to cart|buy now|subscribe|filter|sort|menu|search|cart|wishlist)\b/i.test(label)) {
            return false;
          }

          const href = element.getAttribute?.("href") || "";
          const isSafeLink =
            !href ||
            href === "#" ||
            href.startsWith("javascript:") ||
            href.startsWith("void(0)");

          return (
            isSafeLink &&
            /\b(load\s*more|show\s*more|view\s*more|more\s*products)\b|加载更多|查看更多|显示更多/i.test(
              label
            )
          );
        };
        const clickLoadMoreControl = async () => {
          const candidates = Array.from(
            document.querySelectorAll(
              "button, [role='button'], input[type='button'], input[type='submit'], a[href]"
            )
          );
          const control = candidates.find(
            (element) => isVisible(element) && isLoadMoreControl(element)
          );

          if (!control) {
            return false;
          }

          control.scrollIntoView({ block: "center", inline: "nearest" });
          await wait(150);
          control.click();
          await wait(900);
          return true;
        };

        let lastHeight = 0;
        let idleRounds = 0;

        for (let index = 0; index < 8; index += 1) {
          const beforeHeight = getPageHeight();

          window.scrollTo(0, beforeHeight);
          await wait(450);
          const clickedLoadMore = await clickLoadMoreControl();
          const afterHeight = getPageHeight();

          if (!clickedLoadMore && afterHeight <= lastHeight + 4) {
            idleRounds += 1;
          } else {
            idleRounds = 0;
          }

          if (idleRounds >= 2) {
            break;
          }

          lastHeight = afterHeight;
        }

        window.scrollTo(0, 0);
        await wait(120);
      }
    });
  } catch (error) {
    // Some pages block scripted scrolling; discovery can still use static DOM data.
  }
}

async function discoverProductUrlsFromSingleUrl(url) {
  const timeoutMs = getBatchTimeoutMs();
  const tab = await createBatchTab(url);

  try {
    await waitForBatchTabLoad(tab.id, timeoutMs);
    await delay(900);
    await settleBatchDiscoveryTab(tab.id);

    return withTimeout(
      discoverProductUrlsFromTab(tab.id),
      timeoutMs,
      "分类页商品链接发现超时"
    );
  } finally {
    await removeBatchTab(tab?.id);
  }
}

function getDiscoveryPaginationCandidates(data = {}) {
  return [
    data.nextPageUrl,
    ...(Array.isArray(data.paginationUrls) ? data.paginationUrls : [])
  ]
    .map(normalizeBatchUrl)
    .filter(Boolean);
}

function mergeDiscoveredResponseItems(itemsByUrl, data = {}) {
  const discoveredItems = normalizeDiscoveredBatchItems(
    Array.isArray(data.items) ? data.items : data.urls
  );
  let addedCount = 0;

  discoveredItems.forEach((item) => {
    const existing = itemsByUrl.get(item.url);

    if (!existing) {
      itemsByUrl.set(item.url, item);
      addedCount += 1;
      return;
    }

    itemsByUrl.set(item.url, {
      ...existing,
      title: existing.title || item.title,
      previewImageUrl: existing.previewImageUrl || item.previewImageUrl,
      categoryName: existing.categoryName || item.categoryName,
      categoryType: existing.categoryType || item.categoryType,
      categoryTags: mergeBatchTags(existing.categoryTags, item.categoryTags)
    });
  });

  return addedCount;
}

async function discoverProductUrlsFromUrl(url) {
  const maxPages = getBatchDiscoveryPageLimit();
  const startUrl = normalizeBatchUrl(url);
  const queue = [startUrl];
  const visited = new Set();
  const itemsByUrl = new Map();
  const pageSummaries = [];
  let firstData = null;
  let anchorCount = 0;
  let stoppedOnEmptyPage = false;

  while (queue.length && pageSummaries.length < maxPages) {
    const pageUrl = queue.shift();

    if (!pageUrl || visited.has(pageUrl)) {
      continue;
    }

    visited.add(pageUrl);

    const response = await discoverProductUrlsFromSingleUrl(pageUrl);

    if (!response?.ok) {
      if (!firstData) {
        return response;
      }

      break;
    }

    const data = response.data || {};

    if (!firstData) {
      firstData = data;
    }

    const addedCount = mergeDiscoveredResponseItems(itemsByUrl, data);
    const pageUrlCount = Array.isArray(data.urls) ? data.urls.length : 0;
    anchorCount += Number(data.anchorCount || 0);
    pageSummaries.push({
      url: pageUrl,
      found: pageUrlCount,
      added: addedCount
    });

    if (addedCount === 0 && pageSummaries.length > 1) {
      stoppedOnEmptyPage = true;
      break;
    }

    getDiscoveryPaginationCandidates(data).forEach((candidateUrl) => {
      if (!visited.has(candidateUrl) && !queue.includes(candidateUrl)) {
        queue.push(candidateUrl);
      }
    });
  }

  const items = Array.from(itemsByUrl.values());
  const urls = items.map((item) => item.url);

  return {
    ok: true,
    data: {
      ...(firstData || {}),
      urls,
      items,
      anchorCount,
      pageCount: pageSummaries.length,
      pageLimit: maxPages,
      pageSummaries,
      stoppedOnEmptyPage,
      hasMorePages: queue.length > 0
    }
  };
}

function getDiscoveryPageSummaryText(data = {}) {
  const pageCount = Number(data.pageCount || 1);

  if (pageCount <= 1) {
    return "";
  }

  return data.hasMorePages
    ? `，已扫描 ${pageCount} 页（达到上限 ${data.pageLimit || pageCount} 页）`
    : `，已扫描 ${pageCount} 页`;
}

async function discoverBatchUrlsFromCurrentPage(options = {}) {
  if (isBatchCollecting) {
    return;
  }

  const isCategoryMode = Boolean(options.category);
  const triggerButton = isCategoryMode ? discoverCategoryUrlsButton : discoverBatchUrlsButton;
  const typedCategoryUrl = cleanText(batchCategoryUrlInput?.value);
  const categoryUrl = isCategoryMode && typedCategoryUrl ? normalizeBatchUrl(typedCategoryUrl) : "";

  if (isCategoryMode && typedCategoryUrl && !categoryUrl) {
    setStatus("分类页 URL 无效，请填写完整的 http/https 链接", "error");
    return;
  }

  triggerButton.disabled = true;
  setStatus(
    isCategoryMode
      ? categoryUrl
        ? `正在后台扫描分类页：${getUrlHostLabel(categoryUrl)}，最多 ${getBatchDiscoveryPageLimit()} 页...`
        : "正在从当前分类页发现商品链接..."
      : "正在从当前页面发现商品链接...",
    "loading"
  );

  try {
    let response;

    if (categoryUrl) {
      response = await discoverProductUrlsFromUrl(categoryUrl);
    } else {
      const tab = await syncCurrentTabContext();
      response = await discoverProductUrlsFromTab(tab.id);
    }

    if (!response?.ok) {
      throw new Error(response?.error || "当前页面未返回商品链接");
    }

    const discoveredItems = Array.isArray(response.data?.items)
      ? response.data.items
      : response.data?.urls;
    const urls = Array.isArray(response.data?.urls) ? response.data.urls : [];
    const sourceLabel =
      response.data?.sourceLabel ||
      (categoryUrl ? `分类页 ${getUrlHostLabel(categoryUrl)}` : "当前页面");
    const pageSummaryText = getDiscoveryPageSummaryText(response.data);
    const categoryMetadata = isCategoryMode
      ? getBatchCategoryMetadata(
          response.data?.page?.title || inferCategoryNameFromUrl(categoryUrl) || sourceLabel
        )
      : {};
    const result = mergeBatchUrls(discoveredItems, categoryMetadata);
    const hydrateOptions = { urls: result.urls || urls };

    if (!urls.length) {
      setStatus(
        isCategoryMode
          ? "分类页未发现商品链接，请确认该 URL 是商品列表页或 Shopify Collection 页"
          : "当前页面未发现商品链接，可切换到商品列表页或 Collection 页",
        "error"
      );
      return;
    }

    if (!result.added) {
      if (result.updated) {
        setStatus(
          `已扫描 ${sourceLabel}${pageSummaryText}，无新增链接，已更新 ${result.updated} 个商品预览图`,
          "success"
        );
        addBatchLog(
          "success",
          `扫描 ${sourceLabel}${pageSummaryText}：无新增，更新 ${result.updated} 个商品预览图`
        );
        hydrateBatchPreviews(sourceLabel, hydrateOptions);
        return;
      }

      setStatus(`已扫描 ${sourceLabel}${pageSummaryText}，发现 ${urls.length} 个链接，均已在队列中`, "idle");
      addBatchLog("info", `扫描 ${sourceLabel}${pageSummaryText}：发现 ${urls.length} 个链接，无新增`);
      hydrateBatchPreviews(sourceLabel, hydrateOptions);
      return;
    }

    addBatchLog(
      "success",
      `${isCategoryMode ? `分类 ${categoryMetadata.categoryName || sourceLabel}` : `扫描 ${sourceLabel}`}${pageSummaryText}：新增 ${result.added} 个商品链接，队列共 ${result.total} 个`
    );
    setStatus(
      isCategoryMode
        ? `已从分类 ${categoryMetadata.categoryName || sourceLabel}${pageSummaryText} 新增 ${result.added} 个商品链接，队列共 ${result.total} 个`
        : `已从${sourceLabel}${pageSummaryText}新增 ${result.added} 个商品链接，队列共 ${result.total} 个`,
      "success"
    );
    hydrateBatchPreviews(sourceLabel, hydrateOptions);
  } catch (error) {
    setStatus(error.message || "发现商品链接失败", "error");
  } finally {
    triggerButton.disabled = isBatchCollecting;
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
        type: "SPC_COLLECT_PRODUCT",
        options: getCollectorSettingsFromForm()
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

async function collectBatchItem(item) {
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
    product = applyBatchCategoryMetadata(product, item);
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
  const concurrency = getBatchConcurrency();
  const collectableSnapshots = batchItems.filter((item) => item.status !== "success");
  let nextIndex = 0;
  addBatchLog(
    "info",
    `开始批量采集，并发 ${concurrency}，将跳过已完成商品并继续未完成队列`
  );
  setStatus(`开始批量采集，并发 ${concurrency}，优先使用 Shopify API 直采`, "loading");

  async function worker() {
    while (!shouldStopBatchCollection && nextIndex < collectableSnapshots.length) {
      const itemSnapshot = collectableSnapshots[nextIndex];
      nextIndex += 1;
      const item = batchItems.find((candidate) => candidate.id === itemSnapshot.id);

      if (!item || item.status === "success" || item.status === "running") {
        continue;
      }

      await collectBatchItem(item);
    }
  }

  await Promise.all(
    Array.from(
      { length: Math.min(concurrency, collectableSnapshots.length) },
      worker
    )
  );

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
  addBatchLog("warning", "已请求停止，当前正在采集的任务完成后暂停队列");
  setStatus("已请求停止，当前正在采集的任务完成后会暂停队列", "idle");
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

  const targetItems = getBatchSearchQuery() ? getVisibleBatchItems() : batchItems;

  if (!targetItems.length) {
    return;
  }

  const allSelected = targetItems.every((item) => selectedBatchItemIds.has(item.id));
  const nextSelectedIds = new Set(selectedBatchItemIds);

  targetItems.forEach((item) => {
    if (allSelected) {
      nextSelectedIds.delete(item.id);
    } else {
      nextSelectedIds.add(item.id);
    }
  });

  selectedBatchItemIds = nextSelectedIds;
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

function resetCurrentProductWorkspaceUi() {
  closeOpenCompactMenus();

  [
    productTitleInput,
    productPriceInput,
    productCompareAtPriceInput,
    productSkuInput,
    productVendorInput,
    productTypeInput,
    productTagsInput,
    productHandleInput,
    productDescriptionInput,
    variantSearchInput,
    batchCategoryUrlInput,
    batchCategoryNameInput,
    batchCategoryTypeInput,
    batchCategoryTagsInput,
    imageReplaceFromInput,
    imageReplaceToInput
  ].filter(Boolean).forEach((input) => {
    input.value = "";
  });

  productStatusSelect.value = "active";
  productPublishedSelect.value = "false";
  imageSourceFilter.value = "all";

  productPanel.hidden = true;
  sourceBadge.textContent = "未采集";
  cacheHint.textContent = "尚未缓存草稿";
  imageSourceInfo.textContent = "自动";

  renderImages([]);
  clearElement(variantList);

  const emptyVariants = document.createElement("p");
  emptyVariants.className = "empty-state";
  emptyVariants.textContent = "尚未采集变体。";
  variantList.appendChild(emptyVariants);

  variantCount.textContent = "0/0 导出";
  variantPanel?.classList.remove("has-scrollable-variants");
  variantList.tabIndex = -1;
  variantList.setAttribute("aria-label", "变体列表");

  if (typeof updateAmazonVariantGalleryToolbar === "function") {
    updateAmazonVariantGalleryToolbar();
  }
  updateVariantSelectionToolbar();
  updateVariantDuplicateToolbar([]);
  updateVariantSkuToolbar([]);
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
  if (bottomResetButton) {
    bottomResetButton.disabled = true;
  }
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
    resetCurrentProductWorkspaceUi();
    updateSiteTypeBadge();
    clearValidationResults();
    renderBatchQueue();
    renderBatchLog();
    updateExportAvailability();
    setStatus("已重置当前草稿、批量队列和当前域名选图区域", "success");
  } catch (error) {
    setStatus(error.message || "重置失败", "error");
  } finally {
    resetAllButton.disabled = false;
    if (bottomResetButton) {
      bottomResetButton.disabled = false;
    }
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
  if (bottomExportCsvButton) {
    bottomExportCsvButton.disabled = !currentProductDraft;
  }
  updateWorkspaceSummary();
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

function getEventTargetElement(event) {
  return event.target instanceof Element ? event.target : null;
}

function closestWithin(event, selector, root) {
  const element = getEventTargetElement(event)?.closest(selector);

  return element && root?.contains(element) ? element : null;
}

function closeOpenCompactMenus(exceptMenu = null) {
  document.querySelectorAll(".compact-menu[open], .more-actions[open]").forEach((menu) => {
    if (menu !== exceptMenu) {
      menu.open = false;
    }
  });
}

function bindMenuDismiss() {
  document.addEventListener("click", (event) => {
    const menu = event.target.closest?.(".compact-menu, .more-actions");

    if (menu) {
      closeOpenCompactMenus(menu);
      return;
    }

    closeOpenCompactMenus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeOpenCompactMenus();
    }
  });
}

function clearValidationResults() {
  validationPanel.hidden = true;
  validationSummary.textContent = "等待校验";
  clearElement(validationList);
  clearVariantValidationMarks();
  updateWorkspaceSummary();
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

function getSiteTypeLabel(source) {
  const normalizedSource = String(source || "").toLowerCase();

  if (normalizedSource.includes("shopify")) {
    return "Shopify";
  }

  if (normalizedSource.includes("woocommerce")) {
    return "WooCommerce";
  }

  if (normalizedSource.includes("amazon")) {
    return "Amazon";
  }

  if (normalizedSource.includes("shopline")) {
    return "Shopline";
  }

  if (normalizedSource.includes("shoplazza")) {
    return "Shoplazza";
  }

  if (normalizedSource === "custom-rule" || normalizedSource === "site-rule") {
    return "站点规则";
  }

  if (normalizedSource) {
    return "通用页面";
  }

  return "未识别";
}

function updateSiteTypeBadge(source = "") {
  if (!siteTypeBadge) {
    return;
  }

  const label = getSiteTypeLabel(source);
  siteTypeBadge.textContent = label;
  siteTypeBadge.title = `本次采集站点类型：${label}`;
  siteTypeBadge.dataset.siteType = String(source || "unknown").toLowerCase();
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
    setStatus(`请在页面中点击要作为「${label}」的元素，侧边栏会保持打开`, "loading");
    const response = await sendMessageWithInjection(tab.id, {
      type: "SPC_START_SITE_RULE_PICKER",
      field
    });

    if (!response?.ok) {
      throw new Error(response?.error || "无法启动站点规则选择");
    }

    activePagePicker = {
      type: "site-rule",
      field,
      tabId: tab.id
    };
    setStatus(`站点规则选择已启动，请直接在页面点击「${label}」元素`, "loading");
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

function imagePickerStatusMatchesCurrentPage(product = currentProductDraft) {
  if (!currentImagePickerStatus?.selector) {
    return false;
  }

  const statusDomain = getImagePickerStatusDomain();
  const productDomain = getProductDomain(product);
  const tabDomain = getDomain(currentTabUrl || pageUrlInput.value || "");

  return !statusDomain || statusDomain === productDomain || statusDomain === tabDomain;
}

function getImagePickerStatusUrls(status = currentImagePickerStatus) {
  return (Array.isArray(status?.urls) ? status.urls : [])
    .map((url) => String(url || "").trim())
    .filter(Boolean);
}

function syncImagePickerStatusToDraft() {
  if (!currentProductDraft || !imagePickerStatusMatchesCurrentPage(currentProductDraft)) {
    return false;
  }

  const urls = getImagePickerStatusUrls();

  if (!urls.length) {
    return false;
  }

  const currentImages = normalizeImages(currentProductDraft.images, currentProductDraft.title);

  if (
    currentProductDraft.imageCollectionMode === "manual" &&
    currentProductDraft.imageSourceSelector === currentImagePickerStatus.selector &&
    currentImages.length === urls.length
  ) {
    return false;
  }

  currentProductDraft.imageCollectionMode = "manual";
  currentProductDraft.imageSourceSelector = currentImagePickerStatus.selector;
  currentProductDraft.manualImageCount = Number(
    currentImagePickerStatus.urlCount ?? currentImagePickerStatus.imageCount ?? urls.length
  );
  currentProductDraft.manualImageNodeCount = Number(currentImagePickerStatus.nodeCount || 0);
  markImagesUserEdited();
  currentProductDraft.images = normalizeImages(
    urls.map((url) => ({
      url,
      source: "manual"
    })),
    currentProductDraft.title
  );
  currentProductDraft.variants = normalizeVariants(currentProductDraft, currentProductDraft.images);

  renderVariants(currentProductDraft.variants);
  renderImages(currentProductDraft.images);
  imageSourceInfo.textContent = getImageModeLabel(currentProductDraft);
  queueSaveDraft(`已同步手动图片区域 ${currentProductDraft.images.length} 张`);
  return true;
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
  return (Array.isArray(images) ? images : []).map((image, index) => {
    const normalizedImage =
      typeof image === "string"
        ? {
            url: image
          }
        : image || {};

    return {
      url: normalizedImage.url || "",
      position: index + 1,
      altText: normalizedImage.altText || altText,
      source: normalizedImage.source || "",
      check:
        normalizedImage.check && typeof normalizedImage.check === "object"
          ? normalizedImage.check
          : null
    };
  });
}

function getImageDedupKey(url) {
  const normalizedUrl = String(url || "").trim();

  try {
    const parsedUrl = new URL(normalizedUrl);
    const decodedPath = (() => {
      try {
        return decodeURIComponent(parsedUrl.pathname);
      } catch (error) {
        return parsedUrl.pathname;
      }
    })();
    const normalizedPath = decodedPath
      .toLowerCase()
      .replace(/\/(?:resize|resized|fit|crop|thumb|thumbnail|small|medium|large)\/(?:\d{2,5}x\d{2,5}|w\d{2,5}|h\d{2,5})\//gi, "/")
      .replace(/\/(?:w|h|width|height)[_-]?\d{2,5}(?:x\d{2,5})?\//gi, "/")
      .replace(/\/(?:c_(?:fill|fit|crop|scale)|q_auto|f_auto|w_\d{2,5}|h_\d{2,5})(?:,[^/]*)*\//gi, "/")
      .replace(/@(?:2x|3x)(?=\.(?:jpg|jpeg|png|webp|gif|avif)$)/i, "")
      .replace(
        /[_-](?:pico|icon|thumb|thumbnail|small|compact|medium|large|grande|master|\d{2,5}x\d{2,5}|\d{2,5}_\d{2,5}|w\d{2,5}|h\d{2,5}|x\d{2,5}|\d{2,5}x|\d{2,5}w|\d{2,5}h)(?=\.(?:jpg|jpeg|png|webp|gif|avif)$)/i,
        ""
      );

    return `${parsedUrl.hostname.replace(/^www\./i, "").toLowerCase()}${normalizedPath}`;
  } catch (error) {
    return normalizedUrl
      .replace(/^https?:\/\//i, "")
      .replace(/\?.*$/, "")
      .replace(
        /[_-](?:pico|icon|thumb|thumbnail|small|compact|medium|large|grande|master|\d{2,5}x\d{2,5}|\d{2,5}_\d{2,5}|\d+x|x\d+)(\.(?:jpg|jpeg|png|webp|gif|avif))$/i,
        "$1"
      )
      .toLowerCase();
  }
}

function getImageUrlQualityScore(url) {
  const text = (() => {
    try {
      return decodeURIComponent(String(url || ""));
    } catch (error) {
      return String(url || "");
    }
  })().toLowerCase();
  const dimensionScore = [...text.matchAll(/(\d{2,5})[x_](\d{2,5})/gi)].reduce(
    (score, match) => {
      const width = Number(match[1] || 0);
      const height = Number(match[2] || 0);
      return Math.max(score, width * height);
    },
    0
  );
  const singleDimensionScore = [
    ...text.matchAll(/(?:^|[?&/_-])(?:width|w)=?(\d{2,5})(?:[&/_-]|$)/gi),
    ...text.matchAll(/(?:^|[?&/_-])(?:height|h)=?(\d{2,5})(?:[&/_-]|$)/gi)
  ].reduce((score, match) => {
    const size = Number(match[1] || 0);
    return Math.max(score, size * size);
  }, 0);
  const qualityBonus = /(?:master|original|full|large|hires|zoom)/i.test(text) ? 250000 : 0;
  const thumbnailPenalty = /(?:thumb|thumbnail|pico|icon|small|compact)/i.test(text)
    ? -250000
    : 0;

  return Math.max(dimensionScore, singleDimensionScore) + qualityBonus + thumbnailPenalty;
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
    preview.classList.add("has-image-preview");
    preview.style.backgroundImage = "";
    preview.style.backgroundPosition = "";
    preview.style.backgroundRepeat = "";
    preview.style.backgroundSize = "";

    sourceElement = document.createElement("img");
    sourceElement.src = normalizedUrl;
    sourceElement.alt = altText || "商品图片";
    sourceElement.loading = "lazy";
    sourceElement.decoding = "async";
    sourceElement.setAttribute("aria-hidden", "true");
    sourceElement.tabIndex = -1;
  } else {
    preview.classList.remove("has-image-preview");
    preview.style.backgroundImage = "";
    preview.style.backgroundPosition = "";
    preview.style.backgroundRepeat = "";
    preview.style.backgroundSize = "";

    sourceElement = document.createElement("div");
    sourceElement.className = "image-placeholder";
    sourceElement.textContent = "待输入";
  }

  sourceElement.classList.add("image-preview-source");
  preview.prepend(sourceElement);
}

function closeImageLightbox() {
  const overlay = document.querySelector(".image-lightbox");

  if (overlay?.__spcOnKeyDown) {
    document.removeEventListener("keydown", overlay.__spcOnKeyDown);
  }

  overlay?.remove();
}

function getLightboxImages() {
  return normalizeImages(currentProductDraft?.images || [], currentProductDraft?.title || "");
}

function deleteImageFromLightbox(index) {
  if (!currentProductDraft) {
    closeImageLightbox();
    return;
  }

  const images = getLightboxImages();

  if (!images[index]) {
    closeImageLightbox();
    return;
  }

  clearValidationResults();
  updateDraftFromForm();
  markImagesUserEdited();
  currentProductDraft.images = normalizeImages(
    currentProductDraft.images.filter((_, imageIndex) => imageIndex !== index),
    currentProductDraft.title
  );
  currentProductDraft.variants = normalizeVariants(currentProductDraft, currentProductDraft.images);
  renderVariants(currentProductDraft.variants);
  renderImages(currentProductDraft.images);
  queueSaveDraft("图片已删除并保存");

  if (!currentProductDraft.images.length) {
    closeImageLightbox();
    return;
  }

  openImageLightboxAt(Math.min(index, currentProductDraft.images.length - 1));
}

function getLightboxImageSize(image) {
  return {
    width: Number(image?.check?.width || 0),
    height: Number(image?.check?.height || 0)
  };
}

function formatLightboxCaption(index, total, width = 0, height = 0) {
  const sizeLabel = width && height ? `${width}x${height}` : "尺寸读取中";

  return `#${index + 1} / ${total} · ${sizeLabel}`;
}

function openImageLightboxAt(index = 0) {
  const images = getLightboxImages();
  const total = images.length;
  const safeIndex = Math.min(Math.max(Number(index) || 0, 0), Math.max(total - 1, 0));
  const currentImage = images[safeIndex];
  const normalizedUrl = String(currentImage?.url || "").trim();

  if (!normalizedUrl) {
    return;
  }

  closeImageLightbox();

  const overlay = document.createElement("div");
  const frame = document.createElement("figure");
  const toolbar = document.createElement("div");
  const image = document.createElement("img");
  const caption = document.createElement("figcaption");
  const previousButton = document.createElement("button");
  const nextButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const closeButton = document.createElement("button");
  const openLink = document.createElement("a");

  overlay.className = "image-lightbox";
  overlay.tabIndex = -1;
  frame.className = "image-lightbox-frame";
  toolbar.className = "image-lightbox-toolbar";
  image.alt = currentImage.altText || "商品图片";
  image.decoding = "async";
  caption.className = "image-lightbox-caption";
  const knownSize = getLightboxImageSize(currentImage);
  caption.textContent = formatLightboxCaption(
    safeIndex,
    total,
    knownSize.width,
    knownSize.height
  );
  image.addEventListener("load", () => {
    caption.textContent = formatLightboxCaption(
      safeIndex,
      total,
      image.naturalWidth,
      image.naturalHeight
    );
  });
  image.src = normalizedUrl;
  previousButton.type = "button";
  previousButton.className = "image-lightbox-nav";
  previousButton.textContent = "上一张";
  previousButton.disabled = total <= 1;
  nextButton.type = "button";
  nextButton.className = "image-lightbox-nav";
  nextButton.textContent = "下一张";
  nextButton.disabled = total <= 1;
  deleteButton.type = "button";
  deleteButton.className = "image-lightbox-delete";
  deleteButton.textContent = "删除";
  closeButton.type = "button";
  closeButton.className = "image-lightbox-close";
  closeButton.textContent = "关闭";
  openLink.className = "image-lightbox-link";
  openLink.href = normalizedUrl;
  openLink.target = "_blank";
  openLink.rel = "noreferrer";
  openLink.textContent = "打开原图";

  previousButton.addEventListener("click", () => {
    openImageLightboxAt((safeIndex - 1 + total) % total);
  });
  nextButton.addEventListener("click", () => {
    openImageLightboxAt((safeIndex + 1) % total);
  });
  deleteButton.addEventListener("click", () => {
    deleteImageFromLightbox(safeIndex);
  });
  closeButton.addEventListener("click", closeImageLightbox);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeImageLightbox();
    }
  });

  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      closeImageLightbox();
    } else if (event.key === "ArrowLeft" && total > 1) {
      event.preventDefault();
      openImageLightboxAt((safeIndex - 1 + total) % total);
    } else if (event.key === "ArrowRight" && total > 1) {
      event.preventDefault();
      openImageLightboxAt((safeIndex + 1) % total);
    } else if (event.key === "Delete" || event.key === "Backspace") {
      event.preventDefault();
      deleteImageFromLightbox(safeIndex);
    }
  };

  overlay.__spcOnKeyDown = onKeyDown;
  document.addEventListener("keydown", onKeyDown);
  toolbar.append(previousButton, nextButton, openLink, deleteButton, closeButton);
  frame.append(image, caption, toolbar);
  overlay.append(frame);
  document.body.appendChild(overlay);
  overlay.focus({ preventScroll: true });
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
    checkImagesButton.textContent = "检查图片";
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

  if (removedCount) {
    markImagesUserEdited();
  }

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
  const indexesByKey = new Map();
  const beforeCount = currentProductDraft.images.length;
  const dedupedImages = [];

  currentProductDraft.images.forEach((image) => {
    const key = getImageDedupKey(image.url);

    if (!key) {
      return;
    }

    if (seen.has(key)) {
      const existingIndex = indexesByKey.get(key);
      const existingImage = dedupedImages[existingIndex];

      if (
        existingImage &&
        getImageUrlQualityScore(image.url) > getImageUrlQualityScore(existingImage.url)
      ) {
        dedupedImages[existingIndex] = image;
      }

      return;
    }

    seen.add(key);
    indexesByKey.set(key, dedupedImages.length);
    dedupedImages.push(image);
  });

  currentProductDraft.images = normalizeImages(
    dedupedImages,
    currentProductDraft.title
  );
  const removedCount = beforeCount - currentProductDraft.images.length;

  if (removedCount) {
    markImagesUserEdited();
  }

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

  if (changedCount) {
    markImagesUserEdited();
  }

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

  if (changedCount) {
    markImagesUserEdited();
  }

  renderImages(currentProductDraft.images);
  clearValidationResults();
  queueSaveDraft(changedCount ? `已替换 ${changedCount} 张图片域名` : "没有匹配旧域名的图片");
  setStatus(
    changedCount ? `已替换 ${changedCount} 张图片域名` : "没有匹配旧域名的图片",
    changedCount ? "success" : "idle"
  );
}

function sanitizeDownloadFilePart(value, fallback = "product-image") {
  return (
    String(value || "")
      .trim()
      .replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "-")
      .replace(/\s+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80) || fallback
  );
}

function getImageDownloadExtension(url) {
  try {
    const parsedUrl = new URL(url, currentTabUrl || window.location.href);
    const match = parsedUrl.pathname.match(/\.([a-z0-9]{2,5})$/i);
    const extension = (match?.[1] || "").toLowerCase();
    const supportedExtensions = new Set([
      "jpg",
      "jpeg",
      "png",
      "webp",
      "gif",
      "avif",
      "svg",
      "bmp",
      "tif",
      "tiff"
    ]);

    return supportedExtensions.has(extension) ? extension : "jpg";
  } catch (error) {
    return "jpg";
  }
}

function getImageDownloadFilename(image, index) {
  const baseName = sanitizeDownloadFilePart(
    currentProductDraft?.handle || generateHandle(currentProductDraft?.title) || "product-image"
  );
  const position = String(Number(image?.position || index + 1)).padStart(2, "0");
  const extension = getImageDownloadExtension(image?.url || "");

  return `${baseName}-${position}.${extension}`;
}

function downloadUrlWithAnchor(url, filename) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

function downloadUrlWithChromeDownloads(url, filename) {
  const downloadsApi = globalThis.chrome?.downloads;

  if (!downloadsApi?.download) {
    downloadUrlWithAnchor(url, filename);
    return Promise.resolve(null);
  }

  return new Promise((resolve, reject) => {
    downloadsApi.download(
      {
        url,
        filename,
        conflictAction: "uniquify",
        saveAs: false
      },
      (downloadId) => {
        const lastError = globalThis.chrome?.runtime?.lastError;

        if (lastError) {
          reject(new Error(lastError.message));
          return;
        }

        resolve(downloadId);
      }
    );
  });
}

async function downloadSelectedImages() {
  if (!currentProductDraft) {
    setStatus("请先采集商品，再下载图片", "error");
    return;
  }

  const selectedIndexes = getCheckedIndexes(".image-select-checkbox");

  if (!selectedIndexes.length) {
    setStatus("请先勾选要下载的图片", "error");
    return;
  }

  updateDraftFromForm();

  const images = normalizeImages(currentProductDraft.images, currentProductDraft.title);
  const selectedImages = selectedIndexes
    .map((index) => ({
      index,
      image: images[index]
    }))
    .filter(({ image }) => image?.url);

  if (!selectedImages.length) {
    setStatus("所选图片没有可下载的 URL", "error");
    return;
  }

  downloadSelectedImagesButton.disabled = true;
  setStatus(`正在下载 ${selectedImages.length} 张图片...`, "loading");

  let successCount = 0;
  const failedDownloads = [];

  for (const { image, index } of selectedImages) {
    try {
      await downloadUrlWithChromeDownloads(image.url, getImageDownloadFilename(image, index));
      successCount += 1;
    } catch (error) {
      failedDownloads.push({
        image,
        error
      });
    }
  }

  updateImageSelectionToolbar();

  if (!successCount) {
    setStatus(
      failedDownloads[0]?.error?.message || "所选图片下载失败，请检查图片链接",
      "error"
    );
    return;
  }

  setStatus(
    failedDownloads.length
      ? `已开始下载 ${successCount} 张图片，${failedDownloads.length} 张失败`
      : `已开始下载 ${successCount} 张图片`,
    failedDownloads.length ? "idle" : "success"
  );
}

function getCheckedIndexes(selector) {
  return Array.from(document.querySelectorAll(selector))
    .filter((input) => input.checked)
    .map((input) => Number(input.dataset.index))
    .filter((index) => Number.isInteger(index) && index >= 0);
}

function getTargetVariantCheckboxes() {
  const checkboxes = Array.from(variantList.querySelectorAll(".variant-select-checkbox"));

  if (!getVariantSearchQuery()) {
    return checkboxes;
  }

  return checkboxes.filter(
    (checkbox) => !checkbox.closest(".variant-item")?.classList.contains("is-search-hidden")
  );
}

function getSelectedVariantIndexes() {
  return getTargetVariantCheckboxes()
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => Number(checkbox.dataset.index))
    .filter((index) => Number.isInteger(index) && index >= 0);
}

function updateVariantSelectionToolbar() {
  const checkboxes = getTargetVariantCheckboxes();
  const totalVariantCount = variantList.querySelectorAll(".variant-select-checkbox").length;
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

  variantSelectAllButton.textContent = allSelected
    ? "取消全选"
    : getVariantSearchQuery()
      ? "全选结果"
      : "全选";
  deleteSelectedVariantsButton.disabled = !selectedCount || totalVariantCount <= 1;
  excludeSelectedVariantsButton.disabled = !selectedCount || !hasSelectedExported;
  includeSelectedVariantsButton.disabled = !selectedCount || !hasSelectedExcluded;
  updateVariantSkuToolbar();
}

function updateImageSelectionToolbar() {
  const checkboxes = Array.from(imageGrid.querySelectorAll(".image-select-checkbox"));
  const selectedCount = checkboxes.filter((checkbox) => checkbox.checked).length;
  const allSelected = checkboxes.length > 0 && selectedCount === checkboxes.length;

  imageSelectAllButton.textContent = allSelected ? "取消全选" : "全选";
  downloadSelectedImagesButton.disabled = !selectedCount;
  deleteSelectedImagesButton.disabled = !selectedCount;
}

function setVariantSelection(checked) {
  getTargetVariantCheckboxes().forEach((checkbox) => {
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

  const selectedIndexes = new Set(getSelectedVariantIndexes());

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

  const selectedIndexes = new Set(getSelectedVariantIndexes());

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
  markImagesUserEdited();
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
  markImagesUserEdited();
  const [image] = currentProductDraft.images.splice(fromIndex, 1);
  currentProductDraft.images.splice(toIndex, 0, image);
  currentProductDraft.images = normalizeImages(currentProductDraft.images, currentProductDraft.title);
  renderImages(currentProductDraft.images);
  queueSaveDraft(message);
}

function setMainImage(index) {
  moveImage(index, 0, "主图已更新");
}

function deleteImageAtIndex(index) {
  if (!currentProductDraft || !Number.isInteger(index) || index < 0) {
    return;
  }

  const scrollContainer = document.querySelector(".popup-shell");
  const previousScrollTop = scrollContainer?.scrollTop || 0;

  clearValidationResults();
  updateDraftFromForm();
  markImagesUserEdited();
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
}

function getImageItemFromEvent(event) {
  return closestWithin(event, ".image-item", imageGrid);
}

function getImageIndexFromItem(item) {
  const index = Number(item?.dataset.imageIndex);

  return Number.isInteger(index) && index >= 0 ? index : -1;
}

function ensureDraftImageAtIndex(index) {
  if (!currentProductDraft.images[index]) {
    currentProductDraft.images[index] = {
      url: "",
      position: index + 1,
      altText: currentProductDraft.title || ""
    };
  }

  return currentProductDraft.images[index];
}

function handleImageGridClick(event) {
  const target = getEventTargetElement(event);
  const item = getImageItemFromEvent(event);

  if (!target || !item) {
    return;
  }

  const index = getImageIndexFromItem(item);

  if (index < 0) {
    return;
  }

  if (target.closest(".image-view-button")) {
    openImageLightboxAt(index);
    return;
  }

  if (target.closest(".image-delete-button")) {
    deleteImageAtIndex(index);
    return;
  }

  if (target.closest(".image-main-button")) {
    setMainImage(index);
    return;
  }

  if (!target.closest(".image-preview")) {
    return;
  }

  if (target.closest("button, label, input, a, summary")) {
    return;
  }

  openImageLightboxAt(index);
}

function handleImageGridKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const preview = closestWithin(event, ".image-preview", imageGrid);
  const item = preview?.closest(".image-item");
  const index = getImageIndexFromItem(item);

  if (index < 0) {
    return;
  }

  event.preventDefault();
  openImageLightboxAt(index);
}

function handleImageGridChange(event) {
  const checkbox = closestWithin(event, ".image-select-checkbox", imageGrid);

  if (!checkbox) {
    return;
  }

  checkbox.closest(".image-item")?.classList.toggle("is-selected", checkbox.checked);
  updateImageSelectionToolbar();
}

function handleImageGridInput(event) {
  const input = getEventTargetElement(event);

  if (
    !currentProductDraft ||
    !input ||
    (!input.matches(".image-url-input") && !input.matches(".image-alt-input"))
  ) {
    return;
  }

  const item = input.closest(".image-item");
  const index = getImageIndexFromItem(item);

  if (index < 0) {
    return;
  }

  clearValidationResults();
  markImagesUserEdited();

  const image = ensureDraftImageAtIndex(index);
  const preview = item.querySelector(".image-preview");
  const checkStatus = item.querySelector(".image-check-status");
  const imageAltPreview = item.querySelector(".image-alt-title");
  const imageUrlPreview = item.querySelector(".image-url-preview");

  if (input.matches(".image-url-input")) {
    image.url = input.value.trim();
    image.check = null;
    renderImageCheckStatus(checkStatus, null);
    updateImagePreviewSource(
      preview,
      image.url,
      image.altText || currentProductDraft.title || "商品图片"
    );
    imageUrlPreview.textContent = image.url || "未填写 URL";
    imageUrlPreview.title = image.url || "";
    updateImageCheckToolbar();
  } else {
    image.altText = input.value.trim();
    imageAltPreview.textContent = image.altText || currentProductDraft.title || "未填写 Alt";
  }

  queueSaveDraft();
}

function handleImageDragStart(event) {
  const item = getImageItemFromEvent(event);

  if (!item) {
    return;
  }

  draggedImageIndex = Number(item.dataset.imageIndex);

  if (!Number.isInteger(draggedImageIndex)) {
    return;
  }

  item.classList.add("is-dragging");
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", String(draggedImageIndex));
  }
}

function handleImageDragOver(event) {
  const item = getImageItemFromEvent(event);

  if (!item) {
    return;
  }

  event.preventDefault();
  item.classList.add("is-drag-over");
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
}

function handleImageDrop(event) {
  const item = getImageItemFromEvent(event);

  if (!item) {
    return;
  }

  event.preventDefault();
  const targetIndex = Number(item.dataset.imageIndex);

  item.classList.remove("is-drag-over");

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

function deleteVariantAtIndex(index) {
  if (!currentProductDraft || !Number.isInteger(index) || index < 0) {
    return;
  }

  if (normalizeVariants(currentProductDraft).length <= 1) {
    return;
  }

  clearValidationResults();
  updateDraftFromForm();
  currentProductDraft.variants.splice(index, 1);
  currentProductDraft.variants = normalizeVariants(currentProductDraft);
  renderVariants(currentProductDraft.variants);
  queueSaveDraft("变体已删除并保存");
}

function handleVariantListClick(event) {
  const deleteButton = closestWithin(event, ".variant-delete-button", variantList);
  const item = deleteButton?.closest(".variant-item");
  const index = Number(item?.dataset.variantIndex);

  if (!deleteButton || !Number.isInteger(index)) {
    return;
  }

  deleteVariantAtIndex(index);
}

function handleVariantListChange(event) {
  const checkbox = closestWithin(event, ".variant-select-checkbox", variantList);

  if (!checkbox) {
    return;
  }

  checkbox.closest(".variant-item")?.classList.toggle("is-selected", checkbox.checked);
  updateVariantSelectionToolbar();
}

function handleVariantListInput(event) {
  const input = getEventTargetElement(event);

  if (!input?.matches("[data-variant-field]")) {
    return;
  }

  clearValidationResults();
  updateDraftFromForm();
  updateVariantDuplicateToolbar();
  updateVariantSkuToolbar();
  queueSaveDraft();
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
    status: product.status || "active",
    published: product.published || "false",
    sku,
    price,
    compareAtPrice: product.compareAtPrice || "",
    imageSourceSelector: product.imageSourceSelector || "",
    imageCollectionMode: product.imageCollectionMode || "auto",
    manualImageCount: Number(product.manualImageCount || 0),
    manualImageNodeCount: Number(product.manualImageNodeCount || 0),
    imagesUserEdited: Boolean(product.imagesUserEdited),
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

function markImagesUserEdited() {
  if (currentProductDraft) {
    currentProductDraft.imagesUserEdited = true;
  }
}

function hasUserLockedImages(product = currentProductDraft) {
  return Boolean(
    product?.imagesUserEdited ||
      product?.imageCollectionMode === "manual" ||
      product?.imageSourceSelector
  );
}

function productMatchesCollectionUrl(product, url) {
  const productUrl = normalizePageUrl(product?.page?.url || pageUrlInput.value || "");
  const collectionUrl = normalizePageUrl(url || "");

  return Boolean(productUrl && collectionUrl && productUrl === collectionUrl);
}

function getImagePreservationSnapshot(collectionUrl) {
  if (!currentProductDraft) {
    return null;
  }

  updateDraftFromForm();
  const draft = normalizeDraft(currentProductDraft);

  if (!hasUserLockedImages(draft) || !productMatchesCollectionUrl(draft, collectionUrl)) {
    return null;
  }

  return {
    images: normalizeImages(draft.images, draft.title),
    imageSourceSelector: draft.imageSourceSelector || "",
    imageCollectionMode: draft.imageCollectionMode || "auto",
    manualImageCount: Number(draft.manualImageCount || 0),
    manualImageNodeCount: Number(draft.manualImageNodeCount || 0)
  };
}

function applyPreservedImages(product, snapshot) {
  if (!snapshot) {
    return product;
  }

  return {
    ...product,
    images: snapshot.images,
    imageSourceSelector: snapshot.imageSourceSelector,
    imageCollectionMode: snapshot.imageCollectionMode,
    manualImageCount: snapshot.manualImageCount,
    manualImageNodeCount: snapshot.manualImageNodeCount,
    imagesUserEdited: true
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

function getVariantSearchQuery() {
  return variantSearchInput?.value.trim() || "";
}

function getVariantSearchValues(variant, index = 0) {
  return [
    `#${index + 1}`,
    variant.sku,
    variant.barcode,
    variant.option1Name,
    variant.option1Value,
    variant.option2Name,
    variant.option2Value,
    variant.option3Name,
    variant.option3Value,
    variant.price,
    variant.compareAtPrice,
    variant.variantImageUrl,
    variant.excludedFromExport ? "不导出" : "导出"
  ];
}

function variantMatchesSearch(variant, index = 0, query = getVariantSearchQuery()) {
  return fuzzySearchMatches(query, getVariantSearchValues(variant, index));
}

function normalizeVariantDuplicateText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/^#\s*/, "")
    .replace(/\b(\d+(?:\.\d+)?)\s*(ml|m l)\b/gi, "$1ml")
    .replace(/\b(\d+(?:\.\d+)?)\s*(fl\s*oz|floz)\b/gi, "$1floz")
    .replace(/\b(\d+(?:\.\d+)?)\s*(oz|g|kg|l|ct|count|pack|packs|pc|pcs)\b/gi, "$1$2")
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeVariantDuplicatePrice(value) {
  const text = String(value || "").trim();
  const match = text.replace(/,/g, "").match(/\d+(?:\.\d{1,2})?/);

  if (!match) {
    return "";
  }

  const number = Number(match[0]);

  return Number.isFinite(number) ? number.toFixed(2) : match[0];
}

function getVariantDuplicateKey(variant) {
  const sku = normalizeVariantDuplicateText(variant.sku);

  if (sku) {
    return `sku:${sku}`;
  }

  const values = [
    variant.option1Value,
    variant.option2Value,
    variant.option3Value
  ].map(normalizeVariantDuplicateText);
  const hasValue = values.some(Boolean);

  if (!hasValue) {
    return "";
  }

  return `options:${values.join("|")}:price:${normalizeVariantDuplicatePrice(variant.price)}`;
}

function getVariantDuplicateGroups(variants = []) {
  const groups = new Map();

  variants.forEach((variant, index) => {
    const key = getVariantDuplicateKey(variant);

    if (!key) {
      return;
    }

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push({ variant, index });
  });

  return [...groups.values()].filter((group) => group.length > 1);
}

function getVariantDuplicateStats(variants = currentProductDraft?.variants || []) {
  const groups = getVariantDuplicateGroups(variants);
  const duplicateCount = groups.reduce((total, group) => total + group.length - 1, 0);

  return {
    groups,
    groupCount: groups.length,
    duplicateCount
  };
}

function updateVariantDuplicateToolbar(variants = null) {
  const sourceVariants =
    variants ||
    (currentProductDraft ? getVariantsFromForm() : []);
  const stats = getVariantDuplicateStats(sourceVariants);

  mergeDuplicateVariantsButton.disabled = !stats.duplicateCount;
  mergeDuplicateVariantsButton.textContent = stats.duplicateCount
    ? `合并重复 ${stats.duplicateCount}`
    : "合并重复";
  mergeDuplicateVariantsButton.title = stats.duplicateCount
    ? `发现 ${stats.groupCount} 组重复，可合并 ${stats.duplicateCount} 个变体`
    : "未发现重复变体";
}

function getTargetVariantIndexesForSkuFill(variants = getVariantsFromForm()) {
  const selectedIndexes = getSelectedVariantIndexes();

  if (selectedIndexes.length) {
    return selectedIndexes.filter((index) => variants[index] && !variants[index].sku);
  }

  return variants
    .map((variant, index) => ({ variant, index }))
    .filter(({ variant }) => !String(variant.sku || "").trim())
    .map(({ index }) => index);
}

function updateVariantSkuToolbar(variants = null) {
  if (!fillVariantSkuButton) {
    return;
  }

  const sourceVariants =
    variants ||
    (currentProductDraft ? getVariantsFromForm() : []);
  const targetCount = getTargetVariantIndexesForSkuFill(sourceVariants).length;
  const selectedCount = getSelectedVariantIndexes().length;

  fillVariantSkuButton.disabled = !currentProductDraft || !targetCount;
  fillVariantSkuButton.textContent = targetCount ? `补齐 SKU ${targetCount}` : "补齐 SKU";
  fillVariantSkuButton.title = targetCount
    ? selectedCount
      ? `为选中的 ${targetCount} 个空 SKU 变体生成 SKU`
      : `为全部 ${targetCount} 个空 SKU 变体生成 SKU`
    : selectedCount
      ? "选中变体没有空 SKU"
      : "没有需要补齐的空 SKU";
}

function getSkuSegment(value, fallback = "item") {
  const source = String(value || "").trim();
  const asciiSegment = generateHandle(source)
    .replace(/[^\w-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);

  if (asciiSegment) {
    return asciiSegment;
  }

  return `${fallback}-${hashString(source || fallback)}`.slice(0, 48);
}

function getVariantSkuBase(product = currentProductDraft) {
  return getSkuSegment(
    product?.handle ||
      productHandleInput?.value ||
      product?.title ||
      productTitleInput?.value ||
      "product",
    "product"
  );
}

function getVariantSkuParts(variant, index, product = currentProductDraft) {
  const optionValues = [
    variant.option1Value,
    variant.option2Value,
    variant.option3Value
  ]
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .filter((value) => !/^default title$/i.test(value));
  const parts = [getVariantSkuBase(product)];

  optionValues.forEach((value, valueIndex) => {
    parts.push(getSkuSegment(value, `v${valueIndex + 1}`));
  });

  if (parts.length === 1) {
    parts.push(`v${index + 1}`);
  }

  return parts;
}

function getUniqueVariantSku(baseSku, usedSkus) {
  const normalizedBase = String(baseSku || "sku")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "sku";
  let candidate = normalizedBase;
  let suffix = 2;

  while (usedSkus.has(candidate.toLowerCase())) {
    const suffixText = `-${suffix}`;
    candidate = `${normalizedBase.slice(0, Math.max(1, 80 - suffixText.length))}${suffixText}`;
    suffix += 1;
  }

  usedSkus.add(candidate.toLowerCase());
  return candidate;
}

function fillVariantSkus() {
  if (!currentProductDraft) {
    return;
  }

  clearValidationResults();
  updateDraftFromForm();

  const variants = normalizeVariants(currentProductDraft);
  const targetIndexes = new Set(getTargetVariantIndexesForSkuFill(variants));

  if (!targetIndexes.size) {
    updateVariantSkuToolbar(variants);
    setStatus("没有需要补齐的空 SKU", "idle");
    return;
  }

  const usedSkus = new Set(
    variants
      .map((variant) => String(variant.sku || "").trim())
      .filter(Boolean)
      .map((sku) => sku.toLowerCase())
  );
  let filledCount = 0;

  currentProductDraft.variants = variants.map((variant, index) => {
    if (!targetIndexes.has(index)) {
      return variant;
    }

    const baseSku = getVariantSkuParts(variant, index).join("-");
    const sku = getUniqueVariantSku(baseSku, usedSkus);
    filledCount += 1;

    return {
      ...variant,
      sku
    };
  });

  renderVariants(currentProductDraft.variants);
  queueSaveDraft(`已补齐 ${filledCount} 个变体 SKU`);
  setStatus(`已补齐 ${filledCount} 个变体 SKU`, "success");
}

function scoreVariantCompleteness(variant) {
  return [
    variant.sku,
    variant.barcode,
    variant.option1Name,
    variant.option1Value,
    variant.option2Name,
    variant.option2Value,
    variant.option3Name,
    variant.option3Value,
    variant.price,
    variant.compareAtPrice,
    variant.variantImageUrl
  ].filter((value) => String(value || "").trim()).length +
    (variant.excludedFromExport ? 0 : 2);
}

function mergeVariantField(primaryValue, fallbackValue) {
  const primary = String(primaryValue || "").trim();
  const fallback = String(fallbackValue || "").trim();

  if (!primary) {
    return fallback;
  }

  if (!fallback) {
    return primary;
  }

  return primary.length >= fallback.length ? primary : fallback;
}

function mergeDuplicateVariantGroup(group) {
  const sortedGroup = [...group].sort(
    (left, right) => scoreVariantCompleteness(right.variant) - scoreVariantCompleteness(left.variant)
  );
  const merged = { ...sortedGroup[0].variant };

  sortedGroup.slice(1).forEach(({ variant }) => {
    merged.sku = mergeVariantField(merged.sku, variant.sku);
    merged.barcode = mergeVariantField(merged.barcode, variant.barcode);
    merged.option1Name = mergeVariantField(merged.option1Name, variant.option1Name);
    merged.option1Value = mergeVariantField(merged.option1Value, variant.option1Value);
    merged.option2Name = mergeVariantField(merged.option2Name, variant.option2Name);
    merged.option2Value = mergeVariantField(merged.option2Value, variant.option2Value);
    merged.option3Name = mergeVariantField(merged.option3Name, variant.option3Name);
    merged.option3Value = mergeVariantField(merged.option3Value, variant.option3Value);
    merged.price = mergeVariantField(merged.price, variant.price);
    merged.compareAtPrice = mergeVariantField(merged.compareAtPrice, variant.compareAtPrice);
    merged.variantImageUrl = mergeVariantField(merged.variantImageUrl, variant.variantImageUrl);
    merged.excludedFromExport = Boolean(merged.excludedFromExport && variant.excludedFromExport);
  });

  return merged;
}

function mergeDuplicateVariants() {
  if (!currentProductDraft) {
    return;
  }

  updateDraftFromForm();
  const variants = normalizeVariants(currentProductDraft);
  const stats = getVariantDuplicateStats(variants);

  if (!stats.duplicateCount) {
    updateVariantDuplicateToolbar(variants);
    setStatus("未发现重复变体", "idle");
    return;
  }

  const mergedByFirstIndex = new Map(
    stats.groups.map((group) => [group[0].index, mergeDuplicateVariantGroup(group)])
  );
  const duplicateIndexes = new Set(
    stats.groups.flatMap((group) => group.slice(1).map((item) => item.index))
  );

  currentProductDraft.variants = variants
    .map((variant, index) => mergedByFirstIndex.get(index) || variant)
    .filter((_, index) => !duplicateIndexes.has(index));

  clearValidationResults();
  renderVariants(currentProductDraft.variants);
  queueSaveDraft(`已合并 ${stats.duplicateCount} 个重复变体`);
  setStatus(
    `已合并 ${stats.duplicateCount} 个重复变体，保留 ${currentProductDraft.variants.length} 个变体`,
    "success"
  );
}

function isStrictPrice(value) {
  const text = String(value || "").trim();

  return /^\d+(\.\d{1,2})?$/.test(text);
}

function parseStrictPriceNumber(value) {
  const text = String(value || "").trim();

  if (!isStrictPrice(text)) {
    return null;
  }

  const number = Number(text);
  return Number.isFinite(number) ? number : null;
}

function normalizeDefaultTitleText(value) {
  return String(value || "").trim().toLowerCase();
}

function isDefaultTitleText(value) {
  return normalizeDefaultTitleText(value) === "default title";
}

function isShopifyDefaultOptionName(value) {
  const text = normalizeDefaultTitleText(value);

  return text === "default title" || text === "title";
}

function getDefaultTitleVariantWarning(variant, exportableCount = 1) {
  const option1Name = String(variant?.option1Name || "").trim();
  const option1Value = String(variant?.option1Value || "").trim();
  const option2Name = String(variant?.option2Name || "").trim();
  const option2Value = String(variant?.option2Value || "").trim();
  const option3Name = String(variant?.option3Name || "").trim();
  const option3Value = String(variant?.option3Value || "").trim();
  const hasDefaultTitle = [
    option1Name,
    option1Value,
    option2Name,
    option2Value,
    option3Name,
    option3Value
  ].some(isDefaultTitleText);

  if (!hasDefaultTitle) {
    return "";
  }

  const isSingleDefaultVariant =
    exportableCount <= 1 &&
    isShopifyDefaultOptionName(option1Name) &&
    isDefaultTitleText(option1Value) &&
    !option2Name &&
    !option2Value &&
    !option3Name &&
    !option3Value;

  if (isSingleDefaultVariant) {
    return "变体使用 Shopify 默认占位值 Default Title，将按单规格商品导出；如果页面实际有颜色、尺码或容量，请先补充真实变体。";
  }

  return "变体包含 Default Title 默认占位值，请确认是否漏采真实规格，或改成实际颜色、尺码、容量。";
}

function hasDefaultTitleVariantWarning(variants = []) {
  return variants.some((variant) => getDefaultTitleVariantWarning(variant, variants.length));
}

function addValidationIssue(target, field, message, options = {}) {
  target.push({
    field,
    message,
    variantIndex: Number.isInteger(options.variantIndex) ? options.variantIndex : null
  });
}

function getVariantValidationPrefix(entry, exportableCount) {
  const displayIndex = Number(entry?.index || 0) + 1;

  return exportableCount > 1 ? `变体 #${displayIndex}` : "变体";
}

function getVariantOptionCombinationKey(variant) {
  return [
    variant.option1Value,
    variant.option2Value,
    variant.option3Value
  ]
    .map(normalizeVariantDuplicateText)
    .join("|");
}

function getImageUrlKeySet(images = []) {
  return new Set(
    images
      .map((image) => String(image.url || "").trim())
      .filter(Boolean)
      .flatMap((url) => [url.toLowerCase(), getImageDedupKey(url)])
      .filter(Boolean)
  );
}

function isVariantImageInProductImages(url, imageKeys) {
  const value = String(url || "").trim();

  if (!value) {
    return true;
  }

  return imageKeys.has(value.toLowerCase()) || imageKeys.has(getImageDedupKey(value));
}

function clearVariantValidationMarks() {
  variantList
    ?.querySelectorAll(".variant-item.has-validation-error, .variant-item.has-validation-warning")
    .forEach((item) => {
      item.classList.remove("has-validation-error", "has-validation-warning");
      item.removeAttribute("data-validation-message");
      item.removeAttribute("title");
    });
}

function applyVariantValidationMarks(result = { errors: [], warnings: [] }) {
  clearVariantValidationMarks();

  const issues = [
    ...(Array.isArray(result.errors) ? result.errors.map((issue) => ({ ...issue, level: "error" })) : []),
    ...(Array.isArray(result.warnings) ? result.warnings.map((issue) => ({ ...issue, level: "warning" })) : [])
  ].filter((issue) => Number.isInteger(issue.variantIndex));
  const firstIssueByVariant = new Map();

  issues.forEach((issue) => {
    const item = variantList?.querySelector(
      `.variant-item[data-variant-index="${issue.variantIndex}"]`
    );

    if (!item) {
      return;
    }

    if (issue.level === "error") {
      item.classList.add("has-validation-error");
      item.classList.remove("has-validation-warning");
    } else if (!item.classList.contains("has-validation-error")) {
      item.classList.add("has-validation-warning");
    }

    if (!firstIssueByVariant.has(issue.variantIndex)) {
      firstIssueByVariant.set(issue.variantIndex, issue.message);
      item.dataset.validationMessage = issue.message;
      item.title = issue.message;
    }
  });
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
  const allVariants = normalizeVariants(product, images);
  const variantEntries = allVariants
    .map((variant, index) => ({ variant, index }))
    .filter(({ variant }) => !variant.excludedFromExport);
  const variants = variantEntries.map(({ variant }) => variant);
  const imageKeys = getImageUrlKeySet(images);

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

  const skuEntries = new Map();
  const barcodeEntries = new Map();
  const optionCombinationEntries = new Map();

  variantEntries.forEach((entry) => {
    const { variant, index } = entry;
    const prefix = getVariantValidationPrefix(entry, variantEntries.length);
    const option1Name = String(variant.option1Name || "").trim();
    const option1Value = String(variant.option1Value || "").trim();
    const option2Name = String(variant.option2Name || "").trim();
    const option2Value = String(variant.option2Value || "").trim();
    const option3Name = String(variant.option3Name || "").trim();
    const option3Value = String(variant.option3Value || "").trim();
    const sku = String(variant.sku || "").trim();
    const barcode = String(variant.barcode || "").trim();
    const price = String(variant.price || product.price || "").trim();
    const compareAtPrice = String(
      variant.compareAtPrice || product.compareAtPrice || ""
    ).trim();
    const variantImageUrl = String(variant.variantImageUrl || "").trim();

    if (!option1Name) {
      addValidationIssue(errors, "variants", `${prefix} 的 Option1 名称不能为空。`, {
        variantIndex: index
      });
    }

    if (!option1Value) {
      addValidationIssue(errors, "variants", `${prefix} 的 Option1 值不能为空。`, {
        variantIndex: index
      });
    }

    if (option2Name && !option2Value) {
      addValidationIssue(errors, "variants", `${prefix} 已填写 Option2 名称，但 Option2 值为空。`, {
        variantIndex: index
      });
    }

    if (!option2Name && option2Value) {
      addValidationIssue(errors, "variants", `${prefix} 已填写 Option2 值，但 Option2 名称为空。`, {
        variantIndex: index
      });
    }

    if (option3Name && !option3Value) {
      addValidationIssue(errors, "variants", `${prefix} 已填写 Option3 名称，但 Option3 值为空。`, {
        variantIndex: index
      });
    }

    if (!option3Name && option3Value) {
      addValidationIssue(errors, "variants", `${prefix} 已填写 Option3 值，但 Option3 名称为空。`, {
        variantIndex: index
      });
    }

    if ((option3Name || option3Value) && (!option2Name || !option2Value)) {
      addValidationIssue(
        errors,
        "variants",
        `${prefix} 使用了 Option3，但 Option2 未完整填写。`,
        { variantIndex: index }
      );
    }

    const defaultTitleWarning = getDefaultTitleVariantWarning(
      variant,
      variantEntries.length
    );

    if (defaultTitleWarning) {
      addValidationIssue(warnings, "variants", `${prefix}：${defaultTitleWarning}`, {
        variantIndex: index
      });
    }

    if (!sku && variantEntries.length > 1) {
      addValidationIssue(warnings, "variants", `${prefix} SKU 为空，建议使用“补齐 SKU”。`, {
        variantIndex: index
      });
    }

    if (!price) {
      addValidationIssue(warnings, "variants", `${prefix} 价格为空，导出 CSV 时将使用 0.00。`, {
        variantIndex: index
      });
    } else if (!isStrictPrice(price)) {
      addValidationIssue(warnings, "variants", `${prefix} 价格格式建议为纯数字，例如 24.99。`, {
        variantIndex: index
      });
    } else if (parseStrictPriceNumber(price) <= 0) {
      addValidationIssue(warnings, "variants", `${prefix} 价格为 0 或负数，请确认是否正确。`, {
        variantIndex: index
      });
    }

    if (compareAtPrice && !isStrictPrice(compareAtPrice)) {
      addValidationIssue(
        warnings,
        "variants",
        `${prefix} 原价/对比价格式建议为纯数字，例如 39.99。`,
        { variantIndex: index }
      );
    } else if (
      compareAtPrice &&
      parseStrictPriceNumber(price) != null &&
      parseStrictPriceNumber(compareAtPrice) != null &&
      parseStrictPriceNumber(compareAtPrice) <= parseStrictPriceNumber(price)
    ) {
      addValidationIssue(warnings, "variants", `${prefix} 原价/对比价不高于售价，请确认。`, {
        variantIndex: index
      });
    }

    if (variantImageUrl && !/^https?:\/\//i.test(variantImageUrl)) {
      addValidationIssue(warnings, "variants", `${prefix} 的变体图片不是 http/https URL。`, {
        variantIndex: index
      });
    }

    if (variantImageUrl && /^http:\/\//i.test(variantImageUrl)) {
      addValidationIssue(warnings, "variants", `${prefix} 的变体图片不是 https，Shopify 可能无法稳定抓取。`, {
        variantIndex: index
      });
    }

    if (
      variantImageUrl &&
      /^https?:\/\//i.test(variantImageUrl) &&
      images.length &&
      !isVariantImageInProductImages(variantImageUrl, imageKeys)
    ) {
      addValidationIssue(
        warnings,
        "variants",
        `${prefix} 的变体图片不在商品图片列表中，导入后可能无法绑定。`,
        { variantIndex: index }
      );
    }

    if (sku) {
      const skuKey = sku.toLowerCase();
      const existing = skuEntries.get(skuKey) || [];
      existing.push(index);
      skuEntries.set(skuKey, existing);
    }

    if (barcode) {
      const barcodeKey = barcode.toLowerCase();
      const existing = barcodeEntries.get(barcodeKey) || [];
      existing.push(index);
      barcodeEntries.set(barcodeKey, existing);
    }

    const optionKey = getVariantOptionCombinationKey(variant);
    const existingOptions = optionCombinationEntries.get(optionKey) || [];
    existingOptions.push(index);
    optionCombinationEntries.set(optionKey, existingOptions);
  });

  skuEntries.forEach((indexes, sku) => {
    if (indexes.length <= 1) {
      return;
    }

    indexes.forEach((variantIndex) => {
      addValidationIssue(
        warnings,
        "variants",
        `变体 SKU 重复：${sku}（涉及 #${indexes.map((index) => index + 1).join("、#")}）。`,
        { variantIndex }
      );
    });
  });

  barcodeEntries.forEach((indexes, barcode) => {
    if (indexes.length <= 1) {
      return;
    }

    indexes.forEach((variantIndex) => {
      addValidationIssue(
        warnings,
        "variants",
        `变体 Barcode 重复：${barcode}（涉及 #${indexes.map((index) => index + 1).join("、#")}）。`,
        { variantIndex }
      );
    });
  });

  optionCombinationEntries.forEach((indexes) => {
    if (indexes.length <= 1 || variantEntries.length <= 1) {
      return;
    }

    indexes.forEach((variantIndex) => {
      addValidationIssue(
        errors,
        "variants",
        `变体选项组合重复（涉及 #${indexes.map((index) => index + 1).join("、#")}），Shopify 不允许重复变体。`,
        { variantIndex }
      );
    });
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

  activateWorkspaceTab("validation");
  validationPanel.hidden = false;
  clearElement(validationList);
  applyVariantValidationMarks(result);
  updateWorkspaceSummary();

  if (!totalIssues) {
    validationSummary.textContent = "校验通过";
    if (bottomValidationState) {
      bottomValidationState.textContent = "校验通过";
    }

    const item = document.createElement("li");
    item.className = "validation-item";
    item.dataset.level = "success";
    item.textContent = "必填字段和基础导出风险检查均已通过。";
    validationList.appendChild(item);
    return;
  }

  validationSummary.textContent = `${result.errors.length} 错误 / ${result.warnings.length} 风险`;
  if (bottomValidationState) {
    bottomValidationState.textContent = validationSummary.textContent;
  }

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
  if (Number.isInteger(issue?.variantIndex)) {
    const item = variantList?.querySelector(
      `.variant-item[data-variant-index="${issue.variantIndex}"]`
    );

    if (item) {
      item.scrollIntoView({ block: "nearest" });
      item.querySelector("input")?.focus({ preventScroll: true });
      return;
    }
  }

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

function checkVariantFields() {
  if (!currentProductDraft) {
    setStatus("请先采集或恢复一个商品草稿", "error");
    return;
  }

  clearValidationResults();
  updateDraftFromForm();
  currentProductDraft = normalizeDraft(currentProductDraft);
  renderVariants(currentProductDraft.variants);

  const validationResult = getExportValidation(currentProductDraft);
  const variantErrors = validationResult.errors.filter((issue) => issue.field === "variants");
  const variantWarnings = validationResult.warnings.filter((issue) => issue.field === "variants");

  renderValidationResults({
    errors: variantErrors,
    warnings: variantWarnings
  });

  if (variantErrors.length) {
    focusValidationField(variantErrors[0]);
    setStatus(`发现 ${variantErrors.length} 个变体错误，请先修正`, "error");
    return;
  }

  if (variantWarnings.length) {
    focusValidationField(variantWarnings[0]);
    setStatus(`发现 ${variantWarnings.length} 个变体风险，可按需修正`, "idle");
    return;
  }

  setStatus("变体字段校验通过", "success");
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
  const shouldLimitImageGridHeight = visibleImages.length > IMAGE_SCROLL_THRESHOLD;
  imageCount.textContent = `${productImages.length} 张`;
  imagePanel?.classList.toggle("has-scrollable-images", shouldLimitImageGridHeight);
  imageGrid.tabIndex = shouldLimitImageGridHeight ? 0 : -1;
  imageGrid.setAttribute(
    "aria-label",
    shouldLimitImageGridHeight
      ? `商品图片预览，${visibleImages.length} 张，可滚动`
      : "商品图片预览"
  );

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

  const fragment = document.createDocumentFragment();

  visibleImages.forEach(({ image, index }) => {
    const item = document.createElement("figure");
    item.className = "image-item";
    item.dataset.imageIndex = String(index);
    item.draggable = true;

    const preview = document.createElement("div");
    preview.className = "image-preview";
    preview.tabIndex = 0;
    preview.setAttribute("role", "button");
    preview.setAttribute("aria-label", `Preview image ${image.position}`);
    updateImagePreviewSource(preview, image.url, image.altText || "商品图片");

    const selectLabel = document.createElement("label");
    const selectCheckbox = document.createElement("input");
    selectLabel.className = "image-select-control";
    selectCheckbox.type = "checkbox";
    selectCheckbox.className = "image-select-checkbox";
    selectCheckbox.dataset.index = String(index);
    selectCheckbox.setAttribute("aria-label", `选择第 ${image.position} 张图片`);
    selectLabel.append(selectCheckbox);

    const viewButton = document.createElement("button");
    viewButton.type = "button";
    viewButton.className = "image-view-button";
    viewButton.textContent = "查看大图";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "image-delete-button";
    deleteButton.textContent = "删除";

    const mainButton = document.createElement("button");
    mainButton.type = "button";
    mainButton.className = "image-main-button";
    mainButton.textContent = index === 0 ? "主图" : "设主图";
    mainButton.disabled = index === 0;

    const imageActions = document.createElement("div");
    imageActions.className = "image-card-actions";
    imageActions.append(viewButton, mainButton, deleteButton);

    preview.append(selectLabel);

    const urlInput = document.createElement("input");
    const altInput = document.createElement("input");
    const checkStatus = document.createElement("span");
    const imageMeta = document.createElement("div");
    const imagePositionBadge = document.createElement("span");
    const imageAltPreview = document.createElement("strong");
    const imageUrlPreview = document.createElement("span");
    const imageFields = document.createElement("details");
    const imageFieldsSummary = document.createElement("summary");
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
    imageMeta.className = "image-card-meta";
    imagePositionBadge.className = "image-position-badge";
    imagePositionBadge.textContent = index === 0 ? `#${image.position} 主图` : `#${image.position}`;
    imageAltPreview.className = "image-alt-title";
    imageAltPreview.textContent = image.altText || currentProductDraft?.title || "未填写 Alt";
    imageUrlPreview.className = "image-url-preview";
    imageUrlPreview.textContent = image.url || "未填写 URL";
    imageUrlPreview.title = image.url || "";
    imageMeta.append(imagePositionBadge, imageAltPreview, imageUrlPreview);
    imageFields.className = "image-fields";
    imageFieldsSummary.textContent = "编辑信息";
    imageFields.append(imageFieldsSummary, urlInput, altInput);
    item.append(preview, imageMeta, imageActions, imageFields, checkStatus);
    fragment.appendChild(item);
  });

  imageGrid.appendChild(fragment);

  updateImageSelectionToolbar();
  updateImageCheckToolbar();
  updateWorkspaceSummary();
}

function addManualImage() {
  if (!currentProductDraft) {
    setStatus("请先采集商品，再添加图片", "error");
    return;
  }

  updateDraftFromForm();
  clearValidationResults();
  markImagesUserEdited();
  currentProductDraft.images = normalizeImages(currentProductDraft.images);
  currentProductDraft.images.push({
    url: "",
    position: currentProductDraft.images.length + 1,
    altText: currentProductDraft.title || ""
  });

  renderImages(currentProductDraft.images);
  queueSaveDraft("已添加图片输入框");

  const imageInputs = imageGrid.querySelectorAll(".image-url-input");
  imageInputs[imageInputs.length - 1]?.closest("details")?.setAttribute("open", "");
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

  label.append(span, input);
  return label;
}

function createVariantMetaPill(labelText, value) {
  const pill = document.createElement("div");
  const label = document.createElement("span");
  const content = document.createElement("strong");

  pill.className = "variant-meta-pill";
  label.textContent = labelText;
  content.textContent = value || "未填写";
  content.title = value || "未填写";
  pill.append(label, content);

  return pill;
}

function getVariantDisplayName(variant, index) {
  const values = [
    [variant.option1Name, variant.option1Value],
    [variant.option2Name, variant.option2Value],
    [variant.option3Name, variant.option3Value]
  ]
    .filter(([, value]) => String(value || "").trim())
    .map(([name, value]) => `${String(name || "Option").trim()}: ${String(value || "").trim()}`);

  return values.join(" / ") || `变体 #${index + 1}`;
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
  const variantSearchQuery = getVariantSearchQuery();
  let matchedVariantCount = 0;
  const shouldLimitVariantListHeight = normalizedVariants.length > 4;

  variantCount.textContent = variantSearchQuery
    ? `${matchedVariantCount}/${normalizedVariants.length} 命中`
    : `${exportableCount}/${normalizedVariants.length} 导出`;
  variantPanel?.classList.toggle("has-scrollable-variants", shouldLimitVariantListHeight);
  variantList.tabIndex = shouldLimitVariantListHeight ? 0 : -1;
  variantList.setAttribute(
    "aria-label",
    shouldLimitVariantListHeight
      ? `变体列表，${normalizedVariants.length} 个，可滚动`
      : "变体列表"
  );

  const fragment = document.createDocumentFragment();

  normalizedVariants.forEach((variant, index) => {
    const matchesSearch = variantMatchesSearch(variant, index, variantSearchQuery);
    const item = document.createElement("article");
    const header = document.createElement("div");
    const titleWrap = document.createElement("label");
    const selectCheckbox = document.createElement("input");
    const title = document.createElement("h3");
    const exportBadge = document.createElement("span");
    const deleteButton = document.createElement("button");
    const fields = document.createElement("div");

    item.className = "variant-item";
    item.classList.toggle("is-search-hidden", !matchesSearch);
    item.classList.toggle("is-export-excluded", variant.excludedFromExport);
    item.dataset.variantIndex = String(index);
    item.dataset.exportExcluded = String(Boolean(variant.excludedFromExport));
    header.className = "variant-item-header";
    titleWrap.className = "variant-title-control";
    selectCheckbox.type = "checkbox";
    selectCheckbox.className = "variant-select-checkbox";
    selectCheckbox.dataset.index = String(index);
    selectCheckbox.setAttribute("aria-label", `选择变体 #${index + 1}`);
    title.textContent = getVariantDisplayName(variant, index);
    exportBadge.className = "variant-export-badge";
    exportBadge.dataset.exportExcluded = String(Boolean(variant.excludedFromExport));
    exportBadge.textContent = variant.excludedFromExport ? "不导出" : "导出";
    titleWrap.append(selectCheckbox, title, exportBadge);
    deleteButton.type = "button";
    deleteButton.className = "ghost-button variant-delete-button";
    deleteButton.textContent = "删除";
    deleteButton.disabled = normalizedVariants.length <= 1;

    const compactMeta = document.createElement("div");
    const details = document.createElement("details");
    const detailsSummary = document.createElement("summary");

    compactMeta.className = "variant-compact-meta";
    compactMeta.append(
      createVariantMetaPill("SKU", variant.sku),
      createVariantMetaPill("价格", variant.price),
      createVariantMetaPill("Barcode", variant.barcode),
      createVariantMetaPill("原价/对比价", variant.compareAtPrice)
    );

    details.className = "variant-details";
    detailsSummary.textContent = "编辑完整字段";

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
    details.append(detailsSummary, fields);

    header.append(titleWrap, deleteButton);
    item.append(header, compactMeta, details);
    fragment.appendChild(item);

    if (matchesSearch) {
      matchedVariantCount += 1;
    }
  });

  variantList.appendChild(fragment);

  if (variantSearchQuery) {
    variantCount.textContent = `${matchedVariantCount}/${normalizedVariants.length} 命中`;
  }

  if (variantSearchQuery && !matchedVariantCount) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "没有匹配的变体。";
    variantList.appendChild(empty);
  }

  updateVariantSelectionToolbar();
  updateVariantDuplicateToolbar(normalizedVariants);
  updateVariantSkuToolbar(normalizedVariants);
  updateWorkspaceSummary();
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
  updateSiteTypeBadge(currentProductDraft.source);
  renderVariants(currentProductDraft.variants);
  renderImages(currentProductDraft.images);
  imageSourceInfo.textContent = getImageModeLabel(currentProductDraft);
  cacheHint.textContent = options.fromCache
    ? "已从缓存恢复，修改会自动保存"
    : "采集结果已缓存，修改会自动保存";
  updateWorkspaceSummary();
  activateWorkspaceTab("product");
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
    const tab = await syncCurrentTabContext();
    const preservedImages = getImagePreservationSnapshot(currentTabUrl);

    const response = await sendMessageWithInjection(tab.id, {
      type: "SPC_COLLECT_PRODUCT",
      options: getCollectorSettingsFromForm()
    });

    if (!response || !response.ok) {
      throw new Error(response?.error || "当前页面未返回有效商品信息");
    }

    renderProduct(applyPreservedImages(response.data, preservedImages));
    renderPageInfo(response.data.page || {});
    await saveDraft(currentProductDraft);

    const result = getProductStatusMessage(currentProductDraft);
    setStatus(
      preservedImages
        ? `${result.message}，已保留手动筛选的图片区域`
        : result.message,
      result.type
    );

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
  setStatus("请在页面上点击商品图片区域，侧边栏会保持打开", "loading");

  try {
    await savePopupUiReturnState("images", "image-picker");
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

    activePagePicker = {
      type: "image",
      tabId: tab.id
    };
    selectImageAreaButton.disabled = false;
    setStatus("图片区域选择已启动，请直接在页面点击目标区域", "loading");
  } catch (error) {
    setStatus(error.message || "图片区域选择启动失败", "error");
    selectImageAreaButton.disabled = false;
  }
}

async function syncPickerCompletionMessage(message, senderTabId) {
  const messageDomain = getDomain(message?.pageUrl || "");
  const currentDomain = getDomain(currentTabUrl || pageUrlInput.value || "");

  if (messageDomain && currentDomain && messageDomain !== currentDomain) {
    return;
  }

  try {
    if (message?.cancelled) {
      activePagePicker = null;
      selectImageAreaButton.disabled = false;
      setStatus(message.message || "已取消页面选择", message.failed ? "error" : "idle");
      return;
    }

    if (message?.picker === "image") {
      const tab = senderTabId ? { id: senderTabId } : await getCurrentTab();

      if (tab?.id) {
        await refreshImagePickerStatus(tab.id);
      }

      selectImageAreaButton.disabled = false;
      activePagePicker = null;
      activateWorkspaceTab("images");
      setStatus(message.message || "图片区域已保存，侧边栏已同步", "success");
      return;
    }

    if (message?.picker === "site-rule") {
      const label = SITE_RULE_FIELD_LABELS[message.field] || "字段";

      await refreshSiteRulePanel();
      await chromeStorageRemove(SITE_RULE_EXPAND_AFTER_PICK_KEY);
      setCollapsibleState(siteRuleToggleButton, siteRuleBody, true);
      activePagePicker = null;
      activateWorkspaceTab("tools");
      setStatus(message.message || `已保存${label}规则，侧边栏已同步`, "success");
    }
  } catch (error) {
    setStatus(error.message || "选择结果同步失败，请手动刷新侧边栏", "error");
  }
}

async function cancelActivePagePickerFromPanel() {
  if (!activePagePicker) {
    return;
  }

  const picker = activePagePicker;
  activePagePicker = null;
  selectImageAreaButton.disabled = false;

  try {
    const tabId = picker.tabId || (await getCurrentTab())?.id;

    if (!tabId) {
      throw new Error("没有找到当前活动标签页");
    }

    const response = await sendMessageWithInjection(tabId, {
      type: "SPC_CANCEL_ACTIVE_PICKER"
    });

    if (!response?.ok) {
      throw new Error(response?.error || "页面选择取消失败");
    }

    setStatus(response.message || "已取消页面选择", "idle");
  } catch (error) {
    setStatus(error.message || "页面选择取消失败", "error");
  }
}

function bindPickerEscapeListener() {
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key !== "Escape" || !activePagePicker) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      cancelActivePagePickerFromPanel();
    },
    true
  );
}

function bindPickerCompletionListener() {
  const runtime = globalThis.chrome?.runtime;

  if (!runtime?.onMessage?.addListener) {
    return;
  }

  runtime.onMessage.addListener((message, sender) => {
    if (message?.type !== "SPC_PICKER_COMPLETED") {
      return false;
    }

    window.setTimeout(() => {
      syncPickerCompletionMessage(message, sender?.tab?.id);
    }, 0);

    return false;
  });
}

async function refreshImagePickerStatus(tabId) {
  try {
    const response = await sendMessageWithInjection(tabId, {
      type: "SPC_GET_IMAGE_PICKER_STATUS"
    });

    if (response?.ok) {
      currentImagePickerStatus = response.data || null;

      if (currentProductDraft) {
        if (!syncImagePickerStatusToDraft()) {
          imageSourceInfo.textContent = getImageModeLabel(currentProductDraft);
        }
      }
    }
  } catch (error) {
    currentImagePickerStatus = null;
  }
}

async function resetImageCollectionMode() {
  if (resetImageModeButton) {
    resetImageModeButton.disabled = true;
  }

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
      currentProductDraft.imagesUserEdited = false;
      if (imageSourceInfo) {
        imageSourceInfo.textContent = "自动";
      }
      queueSaveDraft("已切回自动采图模式");
    }

    setStatus("已切回自动采图模式，重新采集后生效", "success");
  } catch (error) {
    setStatus(error.message || "切换自动采图失败", "error");
  } finally {
    if (resetImageModeButton) {
      resetImageModeButton.disabled = false;
    }
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
  ].filter(Boolean).forEach((input) => {
    addSafeEventListener(input, "input", () => {
      clearValidationResults();
      updateDraftFromForm();
      queueSaveDraft();
    });
    addSafeEventListener(input, "change", () => {
      clearValidationResults();
      updateDraftFromForm();
      queueSaveDraft();
    });
  });

  addSafeEventListener(productTitleInput, "input", () => {
    if (!currentProductDraft) {
      return;
    }

    productHandleInput.value = generateHandle(productTitleInput.value);
    clearValidationResults();
    updateDraftFromForm();
    queueSaveDraft();
  });

  addSafeEventListener(regenerateHandleButton, "click", () => {
    if (!currentProductDraft) {
      return;
    }

    productHandleInput.value = generateHandle(productTitleInput.value);
    clearValidationResults();
    updateDraftFromForm();
    queueSaveDraft("Handle 已重新生成并保存");
  });

  addSafeEventListener(clearDraftButton, "click", async () => {
    if (!currentDraftKey) {
      return;
    }

    await chromeStorageRemove(currentDraftKey);
    currentProductDraft = null;
    productPanel.hidden = true;
    updateSiteTypeBadge();
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
    await loadCollectorSettings();
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
    if (cachedBatch?.settings?.concurrency) {
      batchConcurrencyInput.value = String(cachedBatch.settings.concurrency);
    }
    if (cachedBatch?.settings?.discoveryPageLimit) {
      batchDiscoveryPageLimitInput.value = String(cachedBatch.settings.discoveryPageLimit);
    }
    if (cachedBatch?.settings?.categoryUrl) {
      batchCategoryUrlInput.value = cachedBatch.settings.categoryUrl;
    }
    if (cachedBatch?.settings?.categoryName) {
      batchCategoryNameInput.value = cachedBatch.settings.categoryName;
    }
    if (cachedBatch?.settings?.categoryType) {
      batchCategoryTypeInput.value = cachedBatch.settings.categoryType;
    }
    if (cachedBatch?.settings?.categoryTags) {
      batchCategoryTagsInput.value = cachedBatch.settings.categoryTags;
    }
    primeCategoryUrlFromCurrentTab(currentTabUrl);
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
      await restorePopupUiReturnState();
      return;
    }

    updateExportAvailability();

    if (currentTabUrl) {
      setStatus("已识别当前标签页，可采集商品信息", "idle");
    }
    await restorePopupUiReturnState();
  } catch (error) {
    setStatus("无法读取当前标签页", "error");
  }
}

bindButtonFeedback();
bindDraftInputs();
workspaceTabButtons.forEach((button) => {
  addSafeEventListener(button, "click", () => {
    activateWorkspaceTab(button.dataset.workspaceTab);
  });
});
summaryShortcutButtons.forEach((button) => {
  addSafeEventListener(button, "click", () => {
    activateWorkspaceTab(button.dataset.tabShortcut);
  });
});
addSafeEventListener(collectButton, "click", collectCurrentProduct);
addSafeEventListener(exportCsvButton, "click", exportCurrentProductCsv);
addSafeEventListener(resetAllButton, "click", resetAllState);
addSafeEventListener(bottomExportCsvButton, "click", exportCurrentProductCsv);
addSafeEventListener(bottomResetButton, "click", resetAllState);
addSafeEventListener(testSiteRuleButton, "click", testSiteRule);
addSafeEventListener(saveSiteRuleButton, "click", saveSiteRule);
addSafeEventListener(clearSiteRuleButton, "click", clearSiteRule);
siteRulePickButtons.forEach((button) => {
  addSafeEventListener(button, "click", () => {
    startSiteRulePicker(button.dataset.siteRuleField);
  });
});
siteRuleClearButtons.forEach((button) => {
  addSafeEventListener(button, "click", () => {
    clearSiteRuleField(button.dataset.siteRuleClearField);
  });
});
addSafeEventListener(discoverBatchUrlsButton, "click", discoverBatchUrlsFromCurrentPage);
addSafeEventListener(discoverCategoryUrlsButton, "click", () =>
  discoverBatchUrlsFromCurrentPage({ category: true })
);
addSafeEventListener(prepareBatchButton, "click", prepareBatchQueue);
addSafeEventListener(precheckBatchButton, "click", precheckBatchQueue);
addSafeEventListener(startBatchButton, "click", startBatchCollection);
addSafeEventListener(stopBatchButton, "click", stopBatchCollection);
addSafeEventListener(exportBatchCsvButton, "click", exportBatchCsv);
addSafeEventListener(exportSelectedBatchCsvButton, "click", () => {
  exportBatchCsv({ selectedOnly: true });
});
addSafeEventListener(retryFailedBatchButton, "click", retryFailedBatchItems);
addSafeEventListener(selectAllBatchButton, "click", toggleBatchSelection);
addSafeEventListener(deleteSelectedBatchButton, "click", deleteSelectedBatchItems);
addSafeEventListener(fixDuplicateHandlesButton, "click", fixDuplicateBatchHandles);
addSafeEventListener(clearBatchButton, "click", clearBatchQueue);
addSafeEventListener(batchTimeoutInput, "change", () => {
  batchTimeoutInput.value = String(getBatchTimeoutSeconds());
  saveBatchState();
  setStatus(`采集超时已设置为 ${getBatchTimeoutSeconds()} 秒`, "success");
});
addSafeEventListener(batchConcurrencyInput, "change", () => {
  batchConcurrencyInput.value = String(getBatchConcurrency());
  saveBatchState();
  setStatus(`批量采集并发数已设置为 ${getBatchConcurrency()}`, "success");
});
addSafeEventListener(batchDiscoveryPageLimitInput, "change", () => {
  batchDiscoveryPageLimitInput.value = String(getBatchDiscoveryPageLimit());
  saveBatchState();
  setStatus(`分类发现页数上限已设置为 ${getBatchDiscoveryPageLimit()} 页`, "success");
});
[
  batchCategoryUrlInput,
  batchCategoryNameInput,
  batchCategoryTypeInput,
  batchCategoryTagsInput
].forEach((input) => {
  addSafeEventListener(input, "change", saveBatchState);
});
addSafeEventListener(amazonVariantPaginationInput, "change", saveCollectorSettingsFromForm);
addSafeEventListener(batchSearchInput, "input", renderBatchQueue);
addSafeEventListener(batchVendorInput, "input", updateBatchEditControls);
addSafeEventListener(batchTypeInput, "input", updateBatchEditControls);
addSafeEventListener(batchTagsInput, "input", updateBatchEditControls);
addSafeEventListener(batchStatusSelect, "change", updateBatchEditControls);
addSafeEventListener(batchPublishedSelect, "change", updateBatchEditControls);
addSafeEventListener(applyBatchEditButton, "click", applyBatchEditsToSelectedItems);
addSafeEventListener(batchList, "click", handleBatchListClick);
addSafeEventListener(batchList, "change", handleBatchListChange);
addSafeEventListener(batchList, "keydown", handleBatchListKeydown);
addSafeEventListener(clearBatchLogButton, "click", () => {
  batchLogs = [];
  renderBatchLog();
  saveBatchState();
});
addSafeEventListener(selectImageAreaButton, "click", startImageAreaPicker);
addSafeEventListener(addImageButton, "click", addManualImage);
addSafeEventListener(addVariantButton, "click", addVariant);
addSafeEventListener(resetImageModeButton, "click", resetImageCollectionMode);
addSafeEventListener(variantList, "click", handleVariantListClick);
addSafeEventListener(variantList, "change", handleVariantListChange);
addSafeEventListener(variantList, "input", handleVariantListInput);
addSafeEventListener(variantSelectAllButton, "click", () => {
  const checkboxes = getTargetVariantCheckboxes();
  setVariantSelection(checkboxes.some((checkbox) => !checkbox.checked));
});
addSafeEventListener(variantSearchInput, "input", () => {
  if (!currentProductDraft) {
    return;
  }

  updateDraftFromForm();
  renderVariants(currentProductDraft.variants);
});
addSafeEventListener(deleteSelectedVariantsButton, "click", deleteSelectedVariants);
addSafeEventListener(excludeSelectedVariantsButton, "click", () => {
  setSelectedVariantsExportState(true);
});
addSafeEventListener(includeSelectedVariantsButton, "click", () => {
  setSelectedVariantsExportState(false);
});
addSafeEventListener(mergeDuplicateVariantsButton, "click", mergeDuplicateVariants);
addSafeEventListener(fillVariantSkuButton, "click", fillVariantSkus);
addSafeEventListener(checkVariantsButton, "click", checkVariantFields);
addSafeEventListener(imageGrid, "click", handleImageGridClick);
addSafeEventListener(imageGrid, "keydown", handleImageGridKeydown);
addSafeEventListener(imageGrid, "change", handleImageGridChange);
addSafeEventListener(imageGrid, "input", handleImageGridInput);
addSafeEventListener(imageGrid, "dragstart", handleImageDragStart);
addSafeEventListener(imageGrid, "dragover", handleImageDragOver);
addSafeEventListener(imageGrid, "drop", handleImageDrop);
addSafeEventListener(imageGrid, "dragend", handleImageDragEnd);
addSafeEventListener(imageSelectAllButton, "click", () => {
  const checkboxes = Array.from(imageGrid.querySelectorAll(".image-select-checkbox"));
  setImageSelection(checkboxes.some((checkbox) => !checkbox.checked));
});
addSafeEventListener(checkImagesButton, "click", checkCurrentImages);
addSafeEventListener(filterSmallImagesButton, "click", filterSmallImages);
addSafeEventListener(filterDuplicateImagesButton, "click", filterDuplicateImages);
addSafeEventListener(fillImageAltButton, "click", fillImageAltText);
addSafeEventListener(replaceImageDomainButton, "click", replaceImageDomain);
addSafeEventListener(downloadSelectedImagesButton, "click", downloadSelectedImages);
addSafeEventListener(imageSourceFilter, "change", () => {
  renderImages(currentProductDraft?.images || []);
});
addSafeEventListener(deleteSelectedImagesButton, "click", deleteSelectedImages);
bindPickerCompletionListener();
bindPickerEscapeListener();
bindMenuDismiss();
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
