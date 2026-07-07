(function initializeShopifyProductCollectorContentScript() {
  if (window.__SHOPIFY_PRODUCT_COLLECTOR_CONTENT_READY__) {
    return;
  }

  window.__SHOPIFY_PRODUCT_COLLECTOR_CONTENT_READY__ = true;

  const SITE_RULE_STORAGE_PREFIX = "spc:site-rule:";
  let amazonImageScriptTextsCache = null;
  const amazonVariantScriptImageCache = new Map();
  const IMAGE_NODE_SELECTOR = [
    "img",
    "source",
    "meta",
    "[data-a-dynamic-image]",
    "[data-src]",
    "[data-original]",
    "[data-original-src]",
    "[data-lazy]",
    "[data-lazy-src]",
    "[data-old-hires]",
    "[data-image]",
    "[data-image-url]",
    "[data-bg]",
    "[data-bgset]",
    "[data-background]",
    "[data-background-image]",
    "[data-hires]",
    "[data-a-hires]",
    "[data-large-image]",
    "[data-zoom-hires]",
    "[data-zoom-image]",
    "[data-src-large]",
    "[data-full]",
    "[data-full-src]",
    "[style*='url(']"
  ].join(", ");
  let activeImagePickerCleanup = null;
  let activeSiteRulePickerCleanup = null;
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

  function getPageInfo() {
    return {
      title: document.title || "",
      url: window.location.href
    };
  }

  function cleanText(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function delay(ms) {
    return new Promise((resolve) => {
      window.setTimeout(resolve, ms);
    });
  }

  function normalizeCollectorOptions(options = {}) {
    const sourceOptions = options && typeof options === "object" ? options : {};

    return {
      amazonFollowVariantPages: Boolean(sourceOptions.amazonFollowVariantPages)
    };
  }

  function getMetaContent(selectors) {
    return getMetaContents(selectors)[0] || "";
  }

  function getMetaContents(selectors) {
    const values = [];

    for (const selector of selectors) {
      document.querySelectorAll(selector).forEach((element) => {
        const content = cleanText(element?.getAttribute("content"));

        if (content) {
          values.push(content);
        }
      });
    }

    return values;
  }

  function toAbsoluteUrl(url) {
    if (url != null && typeof url !== "string" && typeof url !== "number") {
      return "";
    }

    const value = cleanText(url);

    if (!value || value.startsWith("data:") || value.startsWith("blob:")) {
      return "";
    }

    try {
      return new URL(value, window.location.href).href;
    } catch (error) {
      return "";
    }
  }

  function isAmazonUrl(url) {
    try {
      return /(^|\.)amazon\./i.test(new URL(url, window.location.href).hostname);
    } catch (error) {
      return false;
    }
  }

  function getAmazonAsinFromUrlText(value) {
    const text = String(value || "");
    const decodedText = (() => {
      try {
        return decodeURIComponent(text);
      } catch (error) {
        return text;
      }
    })();
    const candidates = [text, decodedText];
    const patterns = [
      /\/(?:dp|gp\/product|gp\/aw\/d)\/([A-Z0-9]{10})(?:[/?#&]|$)/i,
      /[?&](?:asin|ASIN)=([A-Z0-9]{10})(?:[&#]|$)/i
    ];

    for (const candidate of candidates) {
      for (const pattern of patterns) {
        const match = candidate.match(pattern);

        if (match?.[1]) {
          return match[1].toUpperCase();
        }
      }
    }

    return "";
  }

  function normalizeAmazonProductUrl(parsedUrl) {
    const asin = getAmazonAsinFromUrlText(parsedUrl.href);

    if (!asin) {
      return "";
    }

    return new URL(`/dp/${asin}`, parsedUrl.origin).href;
  }

  function normalizeDiscoveredProductUrl(url) {
    const absoluteUrl = toAbsoluteUrl(url);

    if (!absoluteUrl) {
      return "";
    }

    try {
      const parsedUrl = new URL(absoluteUrl);
      const productMatch = parsedUrl.pathname.match(
        /^(.*?\/(?:products?|product-detail|item|items)\/)([^/?#.]+)(?:\.[^/?#]+)?/i
      );

      parsedUrl.hash = "";

      if (isAmazonUrl(parsedUrl.href)) {
        return normalizeAmazonProductUrl(parsedUrl);
      }

      if (productMatch) {
        parsedUrl.pathname = `${productMatch[1]}${productMatch[2]}`.replace(/\/{2,}/g, "/");
        parsedUrl.search = "";
        return parsedUrl.href;
      }

      return "";
    } catch (error) {
      return "";
    }
  }

  function getDiscoveredUrlSourceLabel(urls) {
    if (/\/collections?\//i.test(window.location.pathname)) {
      return "Collection 页面";
    }

    if (/amazon\./i.test(window.location.hostname)) {
      return "Amazon 页面";
    }

    if (urls.some((url) => /\/products\//i.test(url))) {
      return "商品列表页";
    }

    return "当前页面";
  }

  function getProductCardRoot(anchor) {
    return (
      anchor.closest?.(
        [
          "[data-product-id]",
          "[data-product-handle]",
          "[data-product-card]",
          "[data-asin]",
          "[data-component-type='s-search-result']",
          ".product-card",
          ".product-item",
          ".grid-product",
          ".card-wrapper",
          ".card",
          ".s-result-item",
          ".sg-col-inner",
          "article",
          "li"
        ].join(", ")
      ) || anchor
    );
  }

  function getDiscoveredProductTitle(anchor, root) {
    const candidates = [
      anchor.getAttribute("aria-label"),
      anchor.getAttribute("title"),
      root.querySelector?.("[data-product-title]")?.textContent,
      root.querySelector?.("[data-cy='title-recipe'] h2 span")?.textContent,
      root.querySelector?.("h2 a span, h2 span")?.textContent,
      root.querySelector?.(".s-title-instructions-style h2")?.textContent,
      root.querySelector?.(".a-size-base-plus.a-color-base.a-text-normal")?.textContent,
      root.querySelector?.(".product-card__title, .card__heading, .product-title, h2, h3")?.textContent,
      anchor.textContent,
      root.textContent
    ];

    return cleanText(candidates.find((value) => cleanText(value)) || "");
  }

  function getProductHandleFromUrl(url) {
    try {
      const parsedUrl = new URL(url, window.location.href);
      const match = parsedUrl.pathname.match(/\/products?\/([^/?#.]+)/i);

      return cleanText(match?.[1] || "");
    } catch (error) {
      return "";
    }
  }

  function normalizeMatchToken(value) {
    return cleanText(value)
      .toLowerCase()
      .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function elementMatchesProductImage(element, tokens) {
    if (!element || !tokens.length) {
      return false;
    }

    const text = [
      element.getAttribute?.("alt"),
      element.getAttribute?.("aria-label"),
      element.getAttribute?.("title"),
      element.getAttribute?.("src"),
      element.getAttribute?.("data-src"),
      element.getAttribute?.("data-original"),
      element.getAttribute?.("data-image"),
      element.getAttribute?.("data-bg"),
      element.getAttribute?.("data-bgset"),
      element.className,
      element.id
    ]
      .map(normalizeMatchToken)
      .join(" ");

    return tokens.some((token) => token && text.includes(token));
  }

  function getDiscoveredProductImage(anchor, root, url, title = "") {
    const candidates = [
      root.querySelector?.("img"),
      root.querySelector?.("source"),
      root.querySelector?.("[data-bg], [data-bgset], [data-background-image]"),
      anchor.querySelector?.("img"),
      root
    ];

    for (const candidate of candidates) {
      const urls = collectImageUrlsFromElement(candidate);
      const image = uniqueImages(urls)[0];

      if (image?.url) {
        return image.url;
      }
    }

    const tokens = [
      normalizeMatchToken(getProductHandleFromUrl(url)),
      normalizeMatchToken(title)
    ].filter(Boolean);
    const matchedElement = Array.from(document.querySelectorAll(IMAGE_NODE_SELECTOR)).find(
      (element) => elementMatchesProductImage(element, tokens)
    );
    const matchedImage = uniqueImages(collectImageUrlsFromElement(matchedElement))[0];

    if (matchedImage?.url) {
      return matchedImage.url;
    }

    return "";
  }

  function discoverProductUrls() {
    const anchors = Array.from(document.querySelectorAll("a[href]"));
    const seen = new Set();
    const urls = [];
    const items = [];

    anchors.forEach((anchor) => {
      const url = normalizeDiscoveredProductUrl(anchor.getAttribute("href"));

      if (!url || seen.has(url)) {
        return;
      }

      seen.add(url);
      urls.push(url);
      const root = getProductCardRoot(anchor);
      const title = getDiscoveredProductTitle(anchor, root);
      items.push({
        url,
        title,
        previewImageUrl: getDiscoveredProductImage(anchor, root, url, title)
      });
    });

    return {
      urls,
      items,
      sourceLabel: getDiscoveredUrlSourceLabel(urls),
      anchorCount: anchors.length,
      page: getPageInfo()
    };
  }

  function getImageSelectorStorageKey() {
    return `spc:image-selector:${window.location.hostname}`;
  }

  function getSiteRuleStorageKey() {
    return `${SITE_RULE_STORAGE_PREFIX}${window.location.hostname.toLowerCase()}`;
  }

  function normalizeSiteRule(rawRule = {}) {
    const sourceRule = rawRule && typeof rawRule === "object" ? rawRule : {};
    const selectors = sourceRule.selectors || sourceRule || {};

    return {
      domain: cleanText(sourceRule.domain || window.location.hostname).toLowerCase(),
      selectors: {
        title: cleanText(selectors.title),
        price: cleanText(selectors.price),
        compareAtPrice: cleanText(selectors.compareAtPrice),
        description: cleanText(selectors.description),
        vendor: cleanText(selectors.vendor),
        sku: cleanText(selectors.sku),
        images: cleanText(selectors.images),
        variants: cleanText(selectors.variants)
      },
      updatedAt: sourceRule.updatedAt || ""
    };
  }

  function hasSiteRuleSelectors(rule) {
    return Object.values(normalizeSiteRule(rule).selectors).some(Boolean);
  }

  function readStoredSiteRule() {
    return new Promise((resolve) => {
      if (!chrome.storage?.local) {
        resolve(null);
        return;
      }

      chrome.storage.local.get(getSiteRuleStorageKey(), (result) => {
        resolve(result[getSiteRuleStorageKey()] || null);
      });
    });
  }

  function saveStoredSiteRule(rule) {
    return new Promise((resolve) => {
      if (!chrome.storage?.local) {
        resolve();
        return;
      }

      const normalizedRule = normalizeSiteRule(rule);

      chrome.storage.local.set(
        {
          [getSiteRuleStorageKey()]: {
            ...normalizedRule,
            updatedAt: new Date().toISOString()
          }
        },
        resolve
      );
    });
  }

  function isSiteRuleField(field) {
    return Object.prototype.hasOwnProperty.call(SITE_RULE_FIELD_LABELS, field);
  }

  function saveStoredSiteRuleSelector(field, selector) {
    return readStoredSiteRule().then((storedRule) => {
      const rule = normalizeSiteRule(storedRule || {});

      if (!isSiteRuleField(field)) {
        throw new Error("不支持的站点规则字段");
      }

      rule.selectors[field] = cleanText(selector);
      return saveStoredSiteRule(rule).then(() => rule);
    });
  }

  function clearStoredSiteRule() {
    return new Promise((resolve) => {
      if (!chrome.storage?.local) {
        resolve();
        return;
      }

      chrome.storage.local.remove(getSiteRuleStorageKey(), resolve);
    });
  }

  function readStoredImageSelector() {
    return new Promise((resolve) => {
      if (!chrome.storage?.local) {
        resolve("");
        return;
      }

      chrome.storage.local.get(getImageSelectorStorageKey(), (result) => {
        resolve(result[getImageSelectorStorageKey()] || "");
      });
    });
  }

  function saveStoredImageSelector(selector) {
    return new Promise((resolve) => {
      if (!chrome.storage?.local) {
        resolve();
        return;
      }

      chrome.storage.local.set(
        {
          [getImageSelectorStorageKey()]: selector
        },
        resolve
      );
    });
  }

  function clearStoredImageSelector() {
    return new Promise((resolve) => {
      if (!chrome.storage?.local) {
        resolve();
        return;
      }

      chrome.storage.local.remove(getImageSelectorStorageKey(), resolve);
    });
  }

  function normalizeAmazonImageUrl(url) {
    const absoluteUrl = toAbsoluteUrl(url);

    if (!/media-amazon\.com|ssl-images-amazon\.com/i.test(absoluteUrl)) {
      return absoluteUrl;
    }

    return absoluteUrl
      .replace(/\._[^/.]+_\.(jpg|jpeg|png|webp)(\?.*)?$/i, ".$1$2")
      .replace(/\.SS\d+[^/.]*\.(jpg|jpeg|png|webp)(\?.*)?$/i, ".$1$2");
  }

  function normalizeShopifyImageUrl(url) {
    const absoluteUrl = toAbsoluteUrl(url);
    const secureUrl = absoluteUrl.replace(/^http:\/\//i, "https://");

    if (!/cdn\.shopify\.com|\/cdn\/shop\//i.test(secureUrl)) {
      return secureUrl;
    }

    return secureUrl.replace(
      /_(?:pico|icon|thumb|small|compact|medium|large|grande|master|\d+x\d+|\d+x|x\d+)(\.(?:jpg|jpeg|png|webp))(\?.*)?$/i,
      "$1$2"
    );
  }

  function isImagePathLike(url) {
    const text = String(url || "").toLowerCase();

    return /\.(?:jpg|jpeg|png|webp|gif|avif)(?:[?#].*)?$/.test(text);
  }

  function unwrapProxiedImageUrl(url) {
    const absoluteUrl = toAbsoluteUrl(url);

    if (!absoluteUrl) {
      return "";
    }

    try {
      const parsedUrl = new URL(absoluteUrl);
      const proxyParamNames = ["url", "src", "image", "img", "href"];

      for (const paramName of proxyParamNames) {
        const rawValue = parsedUrl.searchParams.get(paramName);

        if (!rawValue) {
          continue;
        }

        const decodedValue = (() => {
          try {
            return decodeURIComponent(rawValue);
          } catch (error) {
            return rawValue;
          }
        })();
        const candidateUrl = toAbsoluteUrl(decodedValue);

        if (candidateUrl && (isImagePathLike(candidateUrl) || isImagePathLike(decodedValue))) {
          return candidateUrl;
        }
      }
    } catch (error) {
      return absoluteUrl;
    }

    return absoluteUrl;
  }

  function normalizeProductImageUrl(url) {
    return normalizeShopifyImageUrl(normalizeAmazonImageUrl(unwrapProxiedImageUrl(url)));
  }

  function normalizeImageDedupPath(pathname) {
    const decodedPath = (() => {
      try {
        return decodeURIComponent(pathname);
      } catch (error) {
        return pathname;
      }
    })();

    return decodedPath
      .toLowerCase()
      .replace(/\/(?:resize|resized|fit|crop|thumb|thumbnail|small|medium|large)\/(?:\d{2,5}x\d{2,5}|w\d{2,5}|h\d{2,5})\//gi, "/")
      .replace(/\/(?:w|h|width|height)[_-]?\d{2,5}(?:x\d{2,5})?\//gi, "/")
      .replace(/\/(?:c_(?:fill|fit|crop|scale)|q_auto|f_auto|w_\d{2,5}|h_\d{2,5})(?:,[^/]*)*\//gi, "/")
      .replace(/@(?:2x|3x)(?=\.(?:jpg|jpeg|png|webp|gif|avif)$)/i, "")
      .replace(
        /[_-](?:pico|icon|thumb|thumbnail|small|compact|medium|large|grande|master|\d{2,5}x\d{2,5}|\d{2,5}_\d{2,5}|w\d{2,5}|h\d{2,5}|x\d{2,5}|\d{2,5}x|\d{2,5}w|\d{2,5}h)(?=\.(?:jpg|jpeg|png|webp|gif|avif)$)/i,
        ""
      );
  }

  function getImageDedupKey(url) {
    const normalizedUrl = normalizeProductImageUrl(url);

    try {
      const parsedUrl = new URL(normalizedUrl);
      return `${parsedUrl.hostname.replace(/^www\./i, "").toLowerCase()}${normalizeImageDedupPath(parsedUrl.pathname)}`;
    } catch (error) {
      return normalizedUrl
        .replace(/^https?:\/\//i, "")
        .replace(/\?.*$/, "")
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
    const sizeMatches = [
      ...text.matchAll(/(?:^|[?&/_-])(?:width|w)=?(\d{2,5})(?:[&/_-]|$)/gi),
      ...text.matchAll(/(?:^|[?&/_-])(?:height|h)=?(\d{2,5})(?:[&/_-]|$)/gi)
    ];
    const dimensionMatches = [...text.matchAll(/(\d{2,5})[x_](\d{2,5})/gi)];
    const dimensionScore = dimensionMatches.reduce((score, match) => {
      const width = Number(match[1] || 0);
      const height = Number(match[2] || 0);
      return Math.max(score, width * height);
    }, 0);
    const singleDimensionScore = sizeMatches.reduce((score, match) => {
      const size = Number(match[1] || 0);
      return Math.max(score, size * size);
    }, 0);
    const qualityBonus = /(?:master|original|full|large|hires|zoom)/i.test(text) ? 250000 : 0;
    const thumbnailPenalty = /(?:thumb|thumbnail|pico|icon|small|compact)/i.test(text)
      ? -250000
      : 0;

    return Math.max(dimensionScore, singleDimensionScore) + qualityBonus + thumbnailPenalty;
  }

  function parseSrcset(srcset) {
    return String(srcset || "")
      .split(",")
      .map((part) => cleanText(part).split(/\s+/)[0])
      .filter(Boolean);
  }

  function normalizeImageValue(image) {
    if (!image) {
      return [];
    }

    if (Array.isArray(image)) {
      return image.flatMap(normalizeImageValue);
    }

    if (typeof image === "object") {
      return normalizeImageValue(
        image.url ||
          image.contentUrl ||
          image.thumbnailUrl ||
          image.image ||
          image.src ||
          image["@id"]
      );
    }

    return [toAbsoluteUrl(image)].filter(Boolean);
  }

  function parseJsonAttribute(element, attribute) {
    const value = element?.getAttribute(attribute);

    if (!value) {
      return [];
    }

    try {
      const parsed = JSON.parse(value);

      if (parsed && typeof parsed === "object") {
        return Object.entries(parsed)
          .sort((left, right) => {
            const leftSize = Array.isArray(left[1]) ? left[1] : [0, 0];
            const rightSize = Array.isArray(right[1]) ? right[1] : [0, 0];

            return rightSize[0] * rightSize[1] - leftSize[0] * leftSize[1];
          })
          .map(([url]) => url);
      }
    } catch (error) {
      return [];
    }

    return [];
  }

  function parseCssImageUrls(cssText) {
    const urls = [];
    const pattern = /url\((['"]?)(.*?)\1\)/gi;
    let match = pattern.exec(String(cssText || ""));

    while (match) {
      urls.push(match[2]);
      match = pattern.exec(String(cssText || ""));
    }

    return urls;
  }

  function isLikelyProductImage(url) {
    const normalized = String(url || "").toLowerCase();

    if (!normalized) {
      return false;
    }

    const blockedFragments = [
      "logo",
      "icon",
      "sprite",
      "favicon",
      "placeholder",
      "tracking",
      "analytics",
      "pixel",
      "play-icon",
      "video",
      "loader",
      "loading",
      "spinner",
      "transparent",
      "blank",
      "avatar",
      "payment",
      "social",
      "rating",
      "star-rating",
      "badge"
    ];

    if (blockedFragments.some((fragment) => normalized.includes(fragment))) {
      return false;
    }

    if (normalized.endsWith(".svg") || normalized.includes(".svg?")) {
      return false;
    }

    try {
      const parsedUrl = new URL(normalized);

      if (/\/(?:products|collections|pages)\/files\//i.test(parsedUrl.pathname)) {
        return false;
      }
    } catch (error) {
      return false;
    }

    return /^https?:\/\//.test(normalized);
  }

  function isVideoThumbnailElement(element) {
    return Boolean(
      element?.closest?.(
        ".videoThumbnail, [data-thumb-action*='video'], [data-action*='video']"
      ) || /video/i.test(element?.getAttribute?.("alt") || "")
    );
  }

  function collectImageUrlsFromElement(element) {
    if (!element || isVideoThumbnailElement(element)) {
      return [];
    }

    const urls = [
      element.currentSrc,
      element.src,
      element.getAttribute?.("content"),
      element.getAttribute?.("data-src"),
      element.getAttribute?.("data-original"),
      element.getAttribute?.("data-original-src"),
      element.getAttribute?.("data-lazy-src"),
      element.getAttribute?.("data-lazy"),
      element.getAttribute?.("data-old-hires"),
      element.getAttribute?.("data-image"),
      element.getAttribute?.("data-image-url"),
      element.getAttribute?.("data-bg"),
      element.getAttribute?.("data-background"),
      element.getAttribute?.("data-background-image"),
      element.getAttribute?.("data-hires"),
      element.getAttribute?.("data-a-hires"),
      element.getAttribute?.("data-large-image"),
      element.getAttribute?.("data-zoom-hires"),
      element.getAttribute?.("data-zoom-image"),
      element.getAttribute?.("data-src-large"),
      element.getAttribute?.("data-full"),
      element.getAttribute?.("data-full-src")
    ];

    urls.push(...parseSrcset(element.getAttribute?.("srcset")));
    urls.push(...parseSrcset(element.getAttribute?.("data-srcset")));
    urls.push(...parseSrcset(element.getAttribute?.("data-bgset")));
    urls.push(...parseJsonAttribute(element, "data-a-dynamic-image"));
    urls.push(...parseCssImageUrls(element.getAttribute?.("style")));
    urls.push(...parseCssImageUrls(element.style?.backgroundImage));
    urls.push(...parseCssImageUrls(element.style?.background));

    return urls.filter(Boolean).map(normalizeProductImageUrl);
  }

  function extractAmazonImageUrlsFromText(text) {
    const urls = [];
    const imageUrlPattern =
      /https?:\\?\/\\?\/(?:m\.media-amazon\.com|images-na\.ssl-images-amazon\.com)\\?\/images\\?\/I\\?\/[^"'\s\\]+?\.(?:jpg|jpeg|png|webp)/gi;
    let match = imageUrlPattern.exec(String(text || ""));

    while (match) {
      urls.push(match[0].replace(/\\\//g, "/").replace(/\\u002F/g, "/"));
      match = imageUrlPattern.exec(String(text || ""));
    }

    return urls.map(normalizeProductImageUrl);
  }

  function getAmazonImageScriptTexts() {
    if (!/amazon\./i.test(window.location.hostname)) {
      return [];
    }

    if (!amazonImageScriptTextsCache) {
      amazonImageScriptTextsCache = Array.from(document.scripts)
        .map((script) => script.textContent || "")
        .filter((text) => text.includes("media-amazon.com/images/I/"));
    }

    return amazonImageScriptTextsCache;
  }

  function collectAmazonImagesFromScripts() {
    return getAmazonImageScriptTexts().flatMap(extractAmazonImageUrlsFromText);
  }

  function getImageCandidateElements(root) {
    if (!root) {
      return [];
    }

    const elements = root.matches?.(IMAGE_NODE_SELECTOR) ? [root] : [];

    root.querySelectorAll?.(IMAGE_NODE_SELECTOR).forEach((element) => {
      if (!elements.includes(element)) {
        elements.push(element);
      }
    });

    return elements;
  }

  function inspectImagesInElement(root, selector = "") {
    const elements = getImageCandidateElements(root);
    const images = uniqueImages(elements.flatMap(collectImageUrlsFromElement));
    const urls = images.map((image) => image.url);

    return {
      selector,
      nodeCount: elements.length,
      urlCount: urls.length,
      imageCount: urls.length,
      urls
    };
  }

  function getElementSignalText(element) {
    return [
      element?.id,
      element?.className,
      element?.getAttribute?.("role"),
      element?.getAttribute?.("aria-label"),
      element?.getAttribute?.("data-testid"),
      element?.getAttribute?.("data-test")
    ]
      .map((value) => cleanText(String(value || "")))
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
  }

  function isLikelyDecorativeImageElement(element) {
    if (!element) {
      return true;
    }

    const signalText = getElementSignalText(element);
    const ancestorSignalText = getElementSignalText(
      element.closest?.("header, footer, nav, aside, [role='banner'], [role='navigation']")
    );
    const blockedPattern =
      /\b(logo|icon|sprite|avatar|payment|social|rating|star|trustpilot|review|reviews|footer|header|nav|menu|cart|account|search|newsletter|blog|article|post|member|membership|advertisement|recommend|related|upsell)\b/i;

    if (blockedPattern.test(signalText) || blockedPattern.test(ancestorSignalText)) {
      return true;
    }

    const rect = element.getBoundingClientRect?.();
    const width = Math.max(Number(rect?.width || 0), Number(element.naturalWidth || 0));
    const height = Math.max(Number(rect?.height || 0), Number(element.naturalHeight || 0));

    return width > 0 && height > 0 && Math.max(width, height) < 42;
  }

  function getVisibleImageElements(root = document) {
    return Array.from(root.querySelectorAll?.("img") || []).filter((element) => {
      if (!element.isConnected || isLikelyDecorativeImageElement(element)) {
        return false;
      }

      const urls = collectImageUrlsFromElement(element);

      if (!urls.some((url) => isLikelyProductImage(url))) {
        return false;
      }

      const rect = element.getBoundingClientRect?.();
      const width = Math.max(Number(rect?.width || 0), Number(element.naturalWidth || 0));
      const height = Math.max(Number(rect?.height || 0), Number(element.naturalHeight || 0));

      return Math.max(width, height) >= 80;
    });
  }

  function collectImageUrlsFromElements(elements) {
    return uniqueImages(elements.flatMap(collectImageUrlsFromElement)).map((image) => image.url);
  }

  function scoreProductGalleryRoot(root) {
    if (!root || root === document.body || root === document.documentElement) {
      return null;
    }

    const imageElements = getVisibleImageElements(root);
    const urls = collectImageUrlsFromElements(imageElements);

    if (urls.length < 2) {
      return null;
    }

    const rect = root.getBoundingClientRect?.();
    const top = Number(rect?.top || 0);
    const height = Number(rect?.height || 0);
    const width = Number(rect?.width || 0);
    const rootSignalText = getElementSignalText(root);
    const imageArea = imageElements.reduce((sum, element) => {
      const imageRect = element.getBoundingClientRect?.();
      return sum + Number(imageRect?.width || 0) * Number(imageRect?.height || 0);
    }, 0);
    const largeImageCount = imageElements.filter((element) => {
      const imageRect = element.getBoundingClientRect?.();
      return Math.max(Number(imageRect?.width || 0), Number(imageRect?.height || 0)) >= 180;
    }).length;
    let score = urls.length * 8 + largeImageCount * 18 + Math.min(imageArea / 28000, 28);

    if (/\b(product|gallery|media|image|photo|thumb|carousel|slider|swiper|shop|head|main)\b/i.test(rootSignalText)) {
      score += 28;
    }

    if (/\b(recommend|related|upsell|cross|review|comment|blog|article|footer|header|nav|menu|cart|member|membership|advertisement|banner)\b/i.test(rootSignalText)) {
      score -= 48;
    }

    if (top >= 0 && top < Math.max(window.innerHeight || 0, 720) * 1.6) {
      score += 24;
    } else if (top > Math.max(window.innerHeight || 0, 720) * 2.5) {
      score -= 40;
    }

    if (height > 0 && width > 0 && height * width > 0) {
      score += Math.min((height * width) / 45000, 16);
    }

    if (urls.length > 60) {
      score -= 50;
    }

    return { root, urls, score };
  }

  function getAncestorGalleryCandidates(imageElement) {
    const candidates = [];
    let current = imageElement?.parentElement;
    let depth = 0;

    while (current && current !== document.body && depth < 8) {
      const imageCount = current.querySelectorAll?.("img")?.length || 0;

      if (imageCount >= 2) {
        candidates.push(current);
      }

      current = current.parentElement;
      depth += 1;
    }

    return candidates;
  }

  function collectPrimaryGalleryImageUrls() {
    const scoredCandidates = [];
    const seenRoots = new Set();
    const strongSelectors = [
      "[data-testid*='gallery' i]",
      "[data-test*='gallery' i]",
      "[class*='product'][class*='gallery']",
      "[class*='product'][class*='media']",
      "[class*='product'][class*='image']",
      "[class*='product'][class*='photo']",
      "[class*='product'][class*='thumb']",
      "[class*='gallery'][class*='product']",
      "[class*='media'][class*='product']",
      "[class*='shop-head'][class*='left']",
      "[class*='shop-head'][class*='media']"
    ];

    function addCandidate(root) {
      if (!root || seenRoots.has(root)) {
        return;
      }

      seenRoots.add(root);
      const scored = scoreProductGalleryRoot(root);

      if (scored) {
        scoredCandidates.push(scored);
      }
    }

    strongSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach(addCandidate);
    });

    getVisibleImageElements(document)
      .slice(0, 160)
      .forEach((imageElement) => {
        getAncestorGalleryCandidates(imageElement).forEach(addCandidate);
      });

    scoredCandidates.sort((left, right) => right.score - left.score);

    const best = scoredCandidates[0];

    return best && best.score >= 38
      ? {
          urls: best.urls,
          selector: getImageAreaSelectorFromTarget(best.root),
          score: best.score
        }
      : {
          urls: [],
          selector: "",
          score: 0
        };
  }

  function collectFallbackDomImageUrls() {
    const selectorGroups = [
      [
        "[data-testid*='product' i] img",
        "[data-test*='product' i] img",
        "[class*='product'][class*='gallery'] img",
        "[class*='product'][class*='media'] img",
        "[class*='product'][class*='image'] img",
        "[class*='product'][class*='thumb'] img"
      ],
      ["main picture source", "main img"],
      ["picture source", "img"]
    ];
    let broadFallbackUrls = [];

    for (const selectorGroup of selectorGroups) {
      const elements = selectorGroup.flatMap((selector) =>
        Array.from(document.querySelectorAll(selector))
      );
      const filteredElements = elements.filter((element) =>
        element.matches?.("img") ? !isLikelyDecorativeImageElement(element) : true
      );
      const urls = collectImageUrlsFromElements(filteredElements);

      if (selectorGroup.includes("img")) {
        broadFallbackUrls = urls;
      }

      if (urls.length >= 2 && !selectorGroup.includes("img")) {
        return urls;
      }
    }

    return broadFallbackUrls;
  }

  function inspectImagesFromSelector(selector) {
    const emptyResult = {
      selector: selector || "",
      nodeCount: 0,
      urlCount: 0,
      imageCount: 0,
      urls: []
    };

    if (!selector) {
      return emptyResult;
    }

    let root;

    try {
      root = document.querySelector(selector);
    } catch (error) {
      return emptyResult;
    }

    if (!root) {
      return emptyResult;
    }

    return inspectImagesInElement(root, selector);
  }

  function collectImagesFromSelector(selector) {
    return inspectImagesFromSelector(selector).urls;
  }

  function escapeCssIdentifier(value) {
    if (window.CSS?.escape) {
      return CSS.escape(value);
    }

    return String(value).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
  }

  function hasStableId(element) {
    const id = element?.id || "";

    if (!id) {
      return false;
    }

    return !/^a-autoid-\d+/i.test(id);
  }

  function buildSelectorPath(element) {
    const parts = [];
    let current = element;

    while (current && current.nodeType === Node.ELEMENT_NODE && current !== document.body) {
      if (hasStableId(current)) {
        parts.unshift(`#${escapeCssIdentifier(current.id)}`);
        break;
      }

      const tag = current.tagName.toLowerCase();
      const classes = Array.from(current.classList || [])
        .filter((className) => /^[a-zA-Z0-9_-]+$/.test(className))
        .slice(0, 3)
        .map((className) => `.${escapeCssIdentifier(className)}`)
        .join("");
      const parent = current.parentElement;
      const sameTagSiblings = parent
        ? Array.from(parent.children).filter(
            (child) => child.tagName === current.tagName
          )
        : [];
      const index =
        sameTagSiblings.length > 1
          ? `:nth-of-type(${sameTagSiblings.indexOf(current) + 1})`
          : "";

      parts.unshift(`${tag}${classes}${index}`);

      if (parts.length >= 5) {
        break;
      }

      current = current.parentElement;
    }

    return parts.join(" > ");
  }

  function getImageAreaSelectorFromTarget(target) {
    const element =
      target?.nodeType === Node.ELEMENT_NODE
        ? target
        : target?.parentElement || document.body;

    return buildSelectorPath(element);
  }

  function showPickerToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.cssText = [
      "position:fixed",
      "z-index:2147483647",
      "left:50%",
      "top:18px",
      "transform:translateX(-50%)",
      "max-width:min(560px,calc(100vw - 32px))",
      "padding:10px 14px",
      "border-radius:8px",
      "background:#147a4f",
      "color:#fff",
      "font:14px/1.45 Arial,sans-serif",
      "box-shadow:0 12px 36px rgba(0,0,0,.28)"
    ].join(";");
    document.documentElement.appendChild(toast);

    window.setTimeout(() => toast.remove(), 2600);
  }

  function requestPopupReopen() {
    try {
      chrome.runtime.sendMessage({ type: "SPC_OPEN_POPUP_AFTER_PICK" }, () => {
        void chrome.runtime.lastError;
      });
    } catch (error) {
      // Some Chromium builds do not allow programmatic popup opening.
    }
  }

  function startImageAreaPicker() {
    if (activeImagePickerCleanup) {
      activeImagePickerCleanup();
    }
    if (activeSiteRulePickerCleanup) {
      activeSiteRulePickerCleanup();
    }

    let highlightedElement = null;
    let lastHoveredElement = null;
    let previousOutline = "";
    let previousBackground = "";
    const banner = document.createElement("div");
    const selectorLabel = document.createElement("div");

    banner.textContent =
      "悬停选择元素，点击或 Enter 确认；↑ 扩大到父级，↓ 回到子级，Esc 取消";
    banner.style.cssText = [
      "position:fixed",
      "z-index:2147483647",
      "left:50%",
      "top:18px",
      "transform:translateX(-50%)",
      "max-width:min(620px,calc(100vw - 32px))",
      "padding:10px 14px",
      "border-radius:8px",
      "background:#17201a",
      "color:#fff",
      "font:14px/1.45 Arial,sans-serif",
      "box-shadow:0 12px 36px rgba(0,0,0,.28)",
      "pointer-events:none"
    ].join(";");
    selectorLabel.style.cssText = [
      "position:fixed",
      "z-index:2147483647",
      "max-width:min(520px,calc(100vw - 24px))",
      "padding:6px 8px",
      "border-radius:6px",
      "background:#147a4f",
      "color:#fff",
      "font:12px/1.35 Arial,sans-serif",
      "box-shadow:0 8px 22px rgba(0,0,0,.24)",
      "pointer-events:none",
      "word-break:break-all"
    ].join(";");

    function clearHighlight() {
      if (highlightedElement) {
        highlightedElement.style.outline = previousOutline;
        highlightedElement.style.backgroundColor = previousBackground;
      }

      highlightedElement = null;
      previousOutline = "";
      previousBackground = "";
      selectorLabel.textContent = "";
      selectorLabel.style.display = "none";
    }

    function getElementLabel(element) {
      const selector = getImageAreaSelectorFromTarget(element);
      const imageInfo = inspectImagesInElement(element, selector);

      return `${selector || element.tagName.toLowerCase()} · ${imageInfo.nodeCount} 个图片节点 · ${imageInfo.urlCount} 个可用URL`;
    }

    function positionSelectorLabel(element) {
      const rect = element.getBoundingClientRect();
      const top = Math.max(8, Math.min(window.innerHeight - 48, rect.top - 34));
      const left = Math.max(8, Math.min(window.innerWidth - 280, rect.left));

      selectorLabel.style.top = `${top}px`;
      selectorLabel.style.left = `${left}px`;
    }

    function highlight(target, options = {}) {
      const shouldTrackHover = options.trackHover !== false;
      const element =
        target?.nodeType === Node.ELEMENT_NODE
          ? target
          : target?.parentElement || null;

      if (
        !element ||
        element === highlightedElement ||
        element === banner ||
        element === document.documentElement ||
        element === document.body
      ) {
        return;
      }

      clearHighlight();
      highlightedElement = element;

      if (shouldTrackHover) {
        lastHoveredElement = element;
      }

      previousOutline = highlightedElement.style.outline;
      previousBackground = highlightedElement.style.backgroundColor;
      highlightedElement.style.outline = "3px solid #147a4f";
      highlightedElement.style.backgroundColor = "rgba(20, 122, 79, 0.14)";
      selectorLabel.style.display = "block";
      selectorLabel.textContent = getElementLabel(highlightedElement);
      positionSelectorLabel(highlightedElement);
    }

    function confirmSelection() {
      if (!highlightedElement) {
        return;
      }

      const selector = getImageAreaSelectorFromTarget(highlightedElement);
      const imageInfo = inspectImagesInElement(highlightedElement, selector);
      const imageStatus = imageInfo.urlCount
        ? `${imageInfo.urlCount} 张可用图片`
        : imageInfo.nodeCount
          ? "有图片节点但没有可用URL"
          : "未发现图片节点";

      saveStoredImageSelector(selector).then(() => {
        cleanup(`已保存图片区域（${imageStatus}），正在重新打开插件`);
        requestPopupReopen();
      });
    }

    function cleanup(message) {
      clearHighlight();
      banner.remove();
      selectorLabel.remove();
      document.removeEventListener("mouseover", onMouseOver, true);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("scroll", onViewportChange, true);
      window.removeEventListener("resize", onViewportChange, true);
      activeImagePickerCleanup = null;

      if (message) {
        showPickerToast(message);
      }
    }

    function onMouseOver(event) {
      highlight(event.target);
    }

    function onClick(event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      confirmSelection();
    }

    function onKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        cleanup("已取消图片区域选择");
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();
        confirmSelection();
        return;
      }

      if (
        event.key === "ArrowUp" &&
        highlightedElement?.parentElement &&
        highlightedElement.parentElement !== document.body &&
        highlightedElement.parentElement !== document.documentElement
      ) {
        event.preventDefault();
        highlight(highlightedElement.parentElement, { trackHover: false });
        return;
      }

      if (
        event.key === "ArrowDown" &&
        lastHoveredElement &&
        highlightedElement?.contains(lastHoveredElement) &&
        highlightedElement !== lastHoveredElement
      ) {
        event.preventDefault();
        highlight(lastHoveredElement, { trackHover: false });
      }
    }

    function onViewportChange() {
      if (highlightedElement) {
        positionSelectorLabel(highlightedElement);
      }
    }

    document.documentElement.appendChild(banner);
    document.documentElement.appendChild(selectorLabel);
    selectorLabel.style.display = "none";
    document.addEventListener("mouseover", onMouseOver, true);
    document.addEventListener("click", onClick, true);
    document.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("scroll", onViewportChange, true);
    window.addEventListener("resize", onViewportChange, true);

    activeImagePickerCleanup = cleanup;
  }

  function getSiteRuleFieldAttributes(field) {
    const attributes = {
      title: ["content", "aria-label", "title"],
      price: [
        "content",
        "data-price",
        "data-product-price",
        "data-current-price",
        "data-sale-price",
        "data-price-amount"
      ],
      compareAtPrice: [
        "content",
        "data-compare-at-price",
        "data-was-price",
        "data-original-price",
        "data-price-amount"
      ],
      description: ["content", "aria-label", "title"],
      vendor: ["content", "data-vendor", "data-brand"],
      sku: ["content", "data-sku", "sku"]
    };

    return attributes[field] || ["content", "aria-label", "title"];
  }

  function getSiteRuleFieldSample(field, selector, element) {
    if (field === "images") {
      const imageInfo = inspectImagesInElement(element, selector);
      const imageCount = uniqueImages(collectRuleImages(selector)).length || imageInfo.urlCount;

      if (imageCount) {
        return `${imageCount} 张可用图片`;
      }

      if (imageInfo.nodeCount) {
        return "有图片节点但没有可用 URL";
      }

      return "未发现图片节点";
    }

    if (field === "variants") {
      const variants = collectRuleVariants(selector);

      if (variants.length) {
        return `${variants.length} 个变体`;
      }

      return "未识别到变体";
    }

    const rawValue =
      queryRuleValue(selector, getSiteRuleFieldAttributes(field)) ||
      getElementRuleValue(element, getSiteRuleFieldAttributes(field));
    const value =
      field === "price" || field === "compareAtPrice"
        ? normalizePrice(rawValue)
        : cleanText(rawValue);

    return value ? `命中：${value.slice(0, 46)}` : "未命中文本";
  }

  function startSiteRulePicker(field) {
    if (!isSiteRuleField(field)) {
      throw new Error("不支持的站点规则字段");
    }

    if (activeSiteRulePickerCleanup) {
      activeSiteRulePickerCleanup();
    }
    if (activeImagePickerCleanup) {
      activeImagePickerCleanup();
    }

    const fieldLabel = SITE_RULE_FIELD_LABELS[field];
    let highlightedElement = null;
    let lastHoveredElement = null;
    let previousOutline = "";
    let previousBackground = "";
    let isConfirming = false;
    const banner = document.createElement("div");
    const selectorLabel = document.createElement("div");

    banner.textContent = `正在选择「${fieldLabel}」规则：点击元素或按 Enter 保存；↑ 扩大到父级，↓ 回到子级，Esc 取消`;
    banner.style.cssText = [
      "position:fixed",
      "z-index:2147483647",
      "left:50%",
      "top:18px",
      "transform:translateX(-50%)",
      "max-width:min(680px,calc(100vw - 32px))",
      "padding:10px 14px",
      "border-radius:8px",
      "background:#17201a",
      "color:#fff",
      "font:14px/1.45 Arial,sans-serif",
      "box-shadow:0 12px 36px rgba(0,0,0,.28)",
      "pointer-events:none"
    ].join(";");
    selectorLabel.style.cssText = [
      "position:fixed",
      "z-index:2147483647",
      "max-width:min(560px,calc(100vw - 24px))",
      "padding:6px 8px",
      "border-radius:6px",
      "background:#0f766e",
      "color:#fff",
      "font:12px/1.35 Arial,sans-serif",
      "box-shadow:0 8px 22px rgba(0,0,0,.24)",
      "pointer-events:none",
      "word-break:break-all"
    ].join(";");

    function clearHighlight() {
      if (highlightedElement) {
        highlightedElement.style.outline = previousOutline;
        highlightedElement.style.backgroundColor = previousBackground;
      }

      highlightedElement = null;
      previousOutline = "";
      previousBackground = "";
      selectorLabel.textContent = "";
      selectorLabel.style.display = "none";
    }

    function getSelectorFromTarget(target) {
      if (field === "images") {
        return getImageAreaSelectorFromTarget(target);
      }

      return buildSelectorPath(target);
    }

    function getElementLabel(element) {
      const selector = getSelectorFromTarget(element);
      const sample = getSiteRuleFieldSample(field, selector, element);

      return `${fieldLabel} · ${selector || element.tagName.toLowerCase()} · ${sample}`;
    }

    function positionSelectorLabel(element) {
      const rect = element.getBoundingClientRect();
      const top = Math.max(8, Math.min(window.innerHeight - 48, rect.top - 34));
      const left = Math.max(8, Math.min(window.innerWidth - 300, rect.left));

      selectorLabel.style.top = `${top}px`;
      selectorLabel.style.left = `${left}px`;
    }

    function highlight(target, options = {}) {
      const shouldTrackHover = options.trackHover !== false;
      const element =
        target?.nodeType === Node.ELEMENT_NODE
          ? target
          : target?.parentElement || null;

      if (
        !element ||
        element === highlightedElement ||
        element === banner ||
        element === selectorLabel ||
        element === document.documentElement ||
        element === document.body
      ) {
        return;
      }

      clearHighlight();
      highlightedElement = element;

      if (shouldTrackHover) {
        lastHoveredElement = element;
      }

      previousOutline = highlightedElement.style.outline;
      previousBackground = highlightedElement.style.backgroundColor;
      highlightedElement.style.outline = "3px solid #0f766e";
      highlightedElement.style.backgroundColor = "rgba(15, 118, 110, 0.14)";
      selectorLabel.style.display = "block";
      selectorLabel.textContent = getElementLabel(highlightedElement);
      positionSelectorLabel(highlightedElement);
    }

    function cleanup(message) {
      clearHighlight();
      banner.remove();
      selectorLabel.remove();
      document.removeEventListener("mouseover", onMouseOver, true);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("scroll", onViewportChange, true);
      window.removeEventListener("resize", onViewportChange, true);
      activeSiteRulePickerCleanup = null;

      if (message) {
        showPickerToast(message);
      }
    }

    function confirmSelection() {
      if (!highlightedElement || isConfirming) {
        return;
      }

      isConfirming = true;
      const selector = getSelectorFromTarget(highlightedElement);
      const sample = getSiteRuleFieldSample(field, selector, highlightedElement);

      saveStoredSiteRuleSelector(field, selector)
        .then(() => {
          cleanup(`已保存${fieldLabel}规则（${sample}），正在重新打开插件`);
          requestPopupReopen();
        })
        .catch((error) => {
          isConfirming = false;
          showPickerToast(error.message || "站点规则保存失败");
        });
    }

    function onMouseOver(event) {
      highlight(event.target);
    }

    function onClick(event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      confirmSelection();
    }

    function onKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        cleanup("已取消站点规则选择");
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();
        confirmSelection();
        return;
      }

      if (
        event.key === "ArrowUp" &&
        highlightedElement?.parentElement &&
        highlightedElement.parentElement !== document.body &&
        highlightedElement.parentElement !== document.documentElement
      ) {
        event.preventDefault();
        highlight(highlightedElement.parentElement, { trackHover: false });
        return;
      }

      if (
        event.key === "ArrowDown" &&
        lastHoveredElement &&
        highlightedElement?.contains(lastHoveredElement) &&
        highlightedElement !== lastHoveredElement
      ) {
        event.preventDefault();
        highlight(lastHoveredElement, { trackHover: false });
      }
    }

    function onViewportChange() {
      if (highlightedElement) {
        positionSelectorLabel(highlightedElement);
      }
    }

    document.documentElement.appendChild(banner);
    document.documentElement.appendChild(selectorLabel);
    selectorLabel.style.display = "none";
    document.addEventListener("mouseover", onMouseOver, true);
    document.addEventListener("click", onClick, true);
    document.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("scroll", onViewportChange, true);
    window.addEventListener("resize", onViewportChange, true);

    activeSiteRulePickerCleanup = cleanup;
  }

  function uniqueImages(urls) {
    const seen = new Set();
    const indexesByKey = new Map();
    const output = [];

    for (const url of urls) {
      const absoluteUrl = normalizeProductImageUrl(url);
      const dedupKey = getImageDedupKey(absoluteUrl);

      if (!isLikelyProductImage(absoluteUrl)) {
        continue;
      }

      if (seen.has(dedupKey)) {
        const existingIndex = indexesByKey.get(dedupKey);
        const existingImage = output[existingIndex];

        if (
          existingImage &&
          getImageUrlQualityScore(absoluteUrl) > getImageUrlQualityScore(existingImage.url)
        ) {
          existingImage.url = absoluteUrl;
        }

        continue;
      }

      seen.add(dedupKey);
      indexesByKey.set(dedupKey, output.length);
      output.push({
        url: absoluteUrl,
        position: output.length + 1,
        altText: ""
      });

    }

    return output;
  }

  function getJsonLdObjects() {
    const scripts = Array.from(
      document.querySelectorAll('script[type="application/ld+json"]')
    );
    const objects = [];

    for (const script of scripts) {
      const rawJson = script.textContent?.trim();

      if (!rawJson) {
        continue;
      }

      try {
        objects.push(JSON.parse(rawJson));
      } catch (error) {
        continue;
      }
    }

    return objects;
  }

  function isProductType(value) {
    if (Array.isArray(value)) {
      return value.some(isProductType);
    }

    return String(value || "").toLowerCase() === "product";
  }

  function findJsonLdProducts(value, products = [], seen = new Set()) {
    if (!value) {
      return products;
    }

    if (Array.isArray(value)) {
      value.forEach((item) => findJsonLdProducts(item, products, seen));
      return products;
    }

    if (typeof value !== "object") {
      return products;
    }

    if (seen.has(value)) {
      return products;
    }

    seen.add(value);

    if (isProductType(value["@type"])) {
      products.push(value);
    }

    Object.values(value).forEach((child) => {
      if (child && typeof child === "object") {
        findJsonLdProducts(child, products, seen);
      }
    });

    return products;
  }

  function firstArrayItem(value) {
    return Array.isArray(value) ? value[0] : value;
  }

  function collectOfferCandidates(value, offers = []) {
    if (!value) {
      return offers;
    }

    if (Array.isArray(value)) {
      value.forEach((item) => collectOfferCandidates(item, offers));
      return offers;
    }

    if (typeof value !== "object") {
      return offers;
    }

    if (
      value.price ||
      value.lowPrice ||
      value.highPrice ||
      value.priceCurrency ||
      value.availability
    ) {
      offers.push(value);
    }

    if (value.offers && value.offers !== value) {
      collectOfferCandidates(value.offers, offers);
    }

    if (value.priceSpecification && value.priceSpecification !== value) {
      collectOfferCandidates(value.priceSpecification, offers);
    }

    return offers;
  }

  function getDirectOfferList(value) {
    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value.filter((item) => item && typeof item === "object");
    }

    if (typeof value !== "object") {
      return [];
    }

    if (Array.isArray(value.offers)) {
      return value.offers.filter((item) => item && typeof item === "object");
    }

    return [value];
  }

  function getOfferPrice(offer) {
    const priceSpecification = firstArrayItem(offer?.priceSpecification) || {};

    return (
      offer?.price ||
      offer?.lowPrice ||
      offer?.highPrice ||
      priceSpecification.price ||
      priceSpecification.minPrice ||
      priceSpecification.maxPrice ||
      ""
    );
  }

  function getOfferCurrency(offer) {
    const priceSpecification = firstArrayItem(offer?.priceSpecification) || {};

    return offer?.priceCurrency || priceSpecification.priceCurrency || "";
  }

  function scoreOffer(offer) {
    return [
      getOfferPrice(offer) ? 8 : 0,
      getOfferCurrency(offer) ? 3 : 0,
      offer?.availability ? 2 : 0
    ].reduce((sum, value) => sum + value, 0);
  }

  function getOffer(product) {
    const offers = collectOfferCandidates(product?.offers);

    return offers.sort((left, right) => scoreOffer(right) - scoreOffer(left))[0] || {};
  }

  function scoreJsonLdProduct(product) {
    const offer = getOffer(product);

    return [
      cleanText(product?.name) ? 12 : 0,
      getOfferPrice(offer) ? 10 : 0,
      normalizeImageValue(product?.image).length ? 7 : 0,
      cleanText(product?.description) ? 4 : 0,
      getBrandName(product?.brand) ? 3 : 0,
      cleanText(product?.sku || product?.mpn) ? 2 : 0
    ].reduce((sum, value) => sum + value, 0);
  }

  function selectBestJsonLdProduct(products) {
    return products
      .filter(Boolean)
      .sort((left, right) => scoreJsonLdProduct(right) - scoreJsonLdProduct(left))[0];
  }

  function cleanVariantValue(value) {
    return cleanText(value)
      .replace(/\s*[|,-]\s*$/g, "")
      .trim();
  }

  function deriveVariantValue(baseTitle, candidateTitle, fallback) {
    const title = cleanVariantValue(candidateTitle);
    const base = cleanVariantValue(baseTitle);

    if (title && base && title.toLowerCase() !== base.toLowerCase()) {
      const withoutBase = cleanVariantValue(
        title.replace(new RegExp(base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), "")
      );

      return withoutBase || title;
    }

    return title || cleanVariantValue(fallback);
  }

  function getProductBarcode(product) {
    return cleanText(
      product?.gtin ||
        product?.gtin8 ||
        product?.gtin12 ||
        product?.gtin13 ||
        product?.gtin14 ||
        product?.upc ||
        product?.ean ||
        product?.isbn
    );
  }

  function normalizeJsonLdVariant(candidate, baseProduct, index, fallbackOffer = {}) {
    const offer = getOffer(candidate) || fallbackOffer || {};
    const baseTitle = cleanText(baseProduct?.name);
    const candidateTitle = cleanText(candidate?.name || offer.name);
    const optionValue = deriveVariantValue(
      baseTitle,
      candidateTitle,
      candidate?.sku || offer.sku || `Variant ${index + 1}`
    );
    const imageUrl = normalizeImageValue(candidate?.image || offer.image)[0] || "";

    return {
      sku: cleanText(candidate?.sku || offer.sku || candidate?.mpn || ""),
      barcode: getProductBarcode(candidate),
      option1Name: "Option",
      option1Value: optionValue || `Variant ${index + 1}`,
      option2Name: "",
      option2Value: "",
      option3Name: "",
      option3Value: "",
      price: normalizePrice(getOfferPrice(offer)),
      compareAtPrice: "",
      variantImageUrl: imageUrl
    };
  }

  function collectJsonLdVariants(product) {
    const rawVariants = [
      product?.hasVariant,
      product?.variant,
      product?.variants
    ].flatMap((value) => (Array.isArray(value) ? value : value ? [value] : []));
    const productVariants = rawVariants
      .filter((item) => item && typeof item === "object")
      .map((item, index) => normalizeJsonLdVariant(item, product, index));

    if (productVariants.length) {
      return productVariants;
    }

    const directOffers = getDirectOfferList(product?.offers);

    if (directOffers.length <= 1) {
      return [];
    }

    return directOffers.map((offer, index) =>
      normalizeJsonLdVariant(
        {
          name: offer.name,
          sku: offer.sku,
          image: offer.image
        },
        product,
        index,
        offer
      )
    );
  }

  function parseJsonSafely(value) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return null;
    }
  }

  function getBalancedJsonText(source, startIndex, openChar = "{", closeChar = "}") {
    const text = String(source || "");
    const start = text.indexOf(openChar, startIndex);

    if (start < 0) {
      return "";
    }

    let depth = 0;
    let quote = "";
    let escaped = false;

    for (let index = start; index < text.length; index += 1) {
      const char = text[index];

      if (quote) {
        if (escaped) {
          escaped = false;
        } else if (char === "\\") {
          escaped = true;
        } else if (char === quote) {
          quote = "";
        }

        continue;
      }

      if (char === "\"" || char === "'") {
        quote = char;
        continue;
      }

      if (char === openChar) {
        depth += 1;
      } else if (char === closeChar) {
        depth -= 1;

        if (depth === 0) {
          return text.slice(start, index + 1);
        }
      }
    }

    return "";
  }

  function collectProductLikeObjects(value, results = [], depth = 0) {
    if (!value || depth > 5 || results.length > 40) {
      return results;
    }

    if (Array.isArray(value)) {
      value.forEach((item) => collectProductLikeObjects(item, results, depth + 1));
      return results;
    }

    if (typeof value !== "object") {
      return results;
    }

    if (Array.isArray(value.variants) && (value.title || value.name || value.handle)) {
      results.push(value);
    }

    [
      value.product,
      value.currentProduct,
      value.selectedProduct,
      value.data,
      value.productData,
      value.products
    ].forEach((item) => collectProductLikeObjects(item, results, depth + 1));

    return results;
  }

  function collectProductObjectsFromScripts() {
    const candidates = [];
    const productTokens = [/\bproduct\s*:/g, /"product"\s*:/g];

    document.querySelectorAll("script").forEach((script) => {
      const text = script.textContent || "";

      if (!/variants/i.test(text)) {
        return;
      }

      if (/application\/json|application\/ld\+json/i.test(script.type || "")) {
        collectProductLikeObjects(parseJsonSafely(text), candidates);
        return;
      }

      productTokens.forEach((pattern) => {
        let match = pattern.exec(text);

        while (match && candidates.length <= 40) {
          const jsonText = getBalancedJsonText(text, pattern.lastIndex);
          const parsed = jsonText ? parseJsonSafely(jsonText) : null;

          collectProductLikeObjects(parsed, candidates);
          match = pattern.exec(text);
        }

        pattern.lastIndex = 0;
      });
    });

    return candidates;
  }

  function getCurrentProductHandle() {
    const match = window.location.pathname.match(/\/products\/([^/?#]+)/i);
    return cleanText(match?.[1]).toLowerCase();
  }

  function getProductHandle(product) {
    const handle = cleanText(product?.handle);

    if (handle) {
      return handle;
    }

    const url = cleanText(product?.url || product?.href);
    const match = url.match(/\/products\/([^/?#]+)/i);
    return cleanText(match?.[1]);
  }

  function scoreShopifyProduct(product) {
    const variants = Array.isArray(product?.variants) ? product.variants : [];
    const handle = getProductHandle(product).toLowerCase();
    const currentHandle = getCurrentProductHandle();
    const title = cleanText(product?.title || product?.name).toLowerCase();
    const pageTitle = sanitizeDocumentTitle(document.title).toLowerCase();
    let score = 0;

    if (variants.length > 1) {
      score += 40;
    } else if (variants.length === 1) {
      score += 10;
    }

    if (currentHandle && handle === currentHandle) {
      score += 100;
    }

    if (currentHandle && cleanText(product?.url).toLowerCase().includes(`/products/${currentHandle}`)) {
      score += 50;
    }

    if (title && pageTitle.includes(title.slice(0, 24))) {
      score += 25;
    }

    if (product?.price || product?.price_min || product?.priceMax) {
      score += 5;
    }

    return score;
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

    return normalizePrice(text);
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

  function getShopifyImageUrl(value) {
    if (!value) {
      return "";
    }

    if (typeof value === "string") {
      return normalizeProductImageUrl(value);
    }

    return normalizeProductImageUrl(value.src || value.url || value.originalSrc || value.image);
  }

  function getCurrentShopifyVariantId() {
    try {
      return new URL(window.location.href).searchParams.get("variant") || "";
    } catch (error) {
      return "";
    }
  }

  function getShopifySelectedVariant(product) {
    const variants = Array.isArray(product?.variants) ? product.variants : [];

    if (!variants.length) {
      return null;
    }

    const variantId = getCurrentShopifyVariantId();

    if (variantId) {
      const matchedVariant = variants.find((variant) => String(variant.id || "") === variantId);

      if (matchedVariant) {
        return matchedVariant;
      }
    }

    return variants.find((variant) => variant.available !== false) || variants[0] || null;
  }

  function collectShopifyImages(product) {
    const productImages = normalizeImageValue(product?.images || product?.image);
    const variants = Array.isArray(product?.variants) ? product.variants : [];
    const selectedVariant = getShopifySelectedVariant(product);
    const selectedVariantImage = getShopifyImageUrl(
      selectedVariant?.featured_image || selectedVariant?.image
    );
    const variantImages = variants
      .map((variant) => getShopifyImageUrl(variant.featured_image || variant.image))
      .filter(Boolean);

    return uniqueImages([selectedVariantImage, ...variantImages, ...productImages]).map(
      (image) => image.url
    );
  }

  function getShopifyAjaxProductUrlsForBase(baseUrl) {
    return [`${baseUrl}.js`, `${baseUrl}.json`];
  }

  function getShopifyProductLinkInfo(href) {
    let url;

    try {
      url = new URL(href, window.location.origin);
    } catch (error) {
      return null;
    }

    if (url.origin !== window.location.origin) {
      return null;
    }

    const match = url.pathname.match(/^(.*\/products\/)([^/?#/.]+)(?:\.[^/?#]+)?/i);

    if (!match) {
      return null;
    }

    return {
      handle: cleanText(match[2]).toLowerCase(),
      baseUrl: `${url.origin}${match[1]}${match[2]}`
    };
  }

  function getShopifyAjaxProductUrls() {
    const match = window.location.pathname.match(/^(.*\/products\/)([^/?#/.]+)(?:\.[^/?#]+)?/i);

    if (!match || /amazon\./i.test(window.location.hostname)) {
      return [];
    }

    const baseUrl = `${window.location.origin}${match[1]}${match[2]}`;

    return getShopifyAjaxProductUrlsForBase(baseUrl);
  }

  function normalizeShopifyAjaxProductResponse(response) {
    const product = response?.product && typeof response.product === "object"
      ? response.product
      : response;

    return product && Array.isArray(product.variants) && product.variants.length
      ? product
      : null;
  }

  async function fetchShopifyProductFromUrls(urls = []) {
    if (!urls.length) {
      return null;
    }

    for (const url of urls) {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 5500);

      try {
        const response = await fetch(url, {
          credentials: "same-origin",
          headers: {
            Accept: "application/json"
          },
          signal: controller.signal
        });

        if (!response.ok) {
          continue;
        }

        const product = normalizeShopifyAjaxProductResponse(await response.json());

        if (product) {
          return product;
        }
      } catch (error) {
        continue;
      } finally {
        window.clearTimeout(timeout);
      }
    }

    return null;
  }

  async function fetchShopifyAjaxProduct() {
    return fetchShopifyProductFromUrls(getShopifyAjaxProductUrls());
  }

  async function fetchShopifyProductByLinkInfo(linkInfo) {
    if (!linkInfo?.baseUrl) {
      return null;
    }

    const product = await fetchShopifyProductFromUrls(
      getShopifyAjaxProductUrlsForBase(linkInfo.baseUrl)
    );

    return product
      ? {
          ...product,
          handle: getProductHandle(product) || linkInfo.handle
        }
      : null;
  }

  function getShopifyOptionName(product, index) {
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

  function getShopifyVariantValue(variant, product, index) {
    const directValue = cleanText(
      variant?.[`option${index + 1}`] ||
        (Array.isArray(variant?.options) ? variant.options[index] : "")
    );

    if (directValue) {
      return directValue;
    }

    if (index === 0) {
      return deriveVariantValue(
        product?.title || product?.name,
        variant?.public_title || variant?.title || variant?.name,
        variant?.sku || `Variant ${index + 1}`
      );
    }

    return "";
  }

  function normalizeShopifySiblingTitleTokens(title) {
    const stopWords = new Set([
      "a",
      "an",
      "and",
      "the",
      "with",
      "for",
      "mini",
      "jumbo",
      "full",
      "fullsize",
      "full-size",
      "travel",
      "size",
      "sized"
    ]);

    return cleanText(title)
      .toLowerCase()
      .replace(/\b\d+(?:\.\d+)?\s*(?:ml|mL|l|oz|fl\s*oz|g|kg|ct|count|pack|packs|pc|pcs)\b/gi, " ")
      .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, " ")
      .split(/\s+/)
      .map((token) => token.trim())
      .filter((token) => token.length > 1 && !stopWords.has(token));
  }

  function getShopifySiblingTitleSimilarity(baseTitle, candidateTitle) {
    const baseTokens = normalizeShopifySiblingTitleTokens(baseTitle);
    const candidateTokens = normalizeShopifySiblingTitleTokens(candidateTitle);

    if (!baseTokens.length || !candidateTokens.length) {
      return { score: 0, sharedCount: 0, baseCount: baseTokens.length };
    }

    const candidateSet = new Set(candidateTokens);
    const sharedCount = [...new Set(baseTokens)].filter((token) => candidateSet.has(token)).length;
    const score = sharedCount / Math.max(baseTokens.length, candidateTokens.length);

    return { score, sharedCount, baseCount: baseTokens.length };
  }

  function isLikelyShopifySiblingProduct(baseProduct, candidateProduct) {
    const baseHandle = getProductHandle(baseProduct).toLowerCase();
    const candidateHandle = getProductHandle(candidateProduct).toLowerCase();

    if (!candidateProduct || !candidateHandle || candidateHandle === baseHandle) {
      return true;
    }

    if (isBlockedShopifySiblingProduct(baseProduct, candidateProduct)) {
      return false;
    }

    const { score, sharedCount, baseCount } = getShopifySiblingTitleSimilarity(
      baseProduct?.title || baseProduct?.name,
      candidateProduct?.title || candidateProduct?.name
    );

    return score >= 0.58 && sharedCount >= Math.min(3, baseCount);
  }

  function isBlockedShopifySiblingProduct(baseProduct, candidateProduct) {
    const baseTitle = cleanText(baseProduct?.title || baseProduct?.name);
    const candidateTitle = cleanText(candidateProduct?.title || candidateProduct?.name);
    const samplePattern = /\b(sample|deluxe\s+sample|gift|free|trial|tester)\b/i;
    const firstVariant = Array.isArray(candidateProduct?.variants)
      ? candidateProduct.variants[0]
      : null;
    const candidatePrice = Number(formatShopifyMoney(firstVariant?.price, true));
    const baseIsSample = samplePattern.test(baseTitle);
    const candidateIsSample = samplePattern.test(candidateTitle);

    if (candidateIsSample && !baseIsSample) {
      return true;
    }

    if (candidatePrice === 0 && !baseIsSample) {
      return true;
    }

    return false;
  }

  function extractShopifySizeValue(text) {
    const match = cleanText(text).match(
      /\b\d+(?:\.\d+)?\s*(?:mL|ml|L|l|fl\s*oz|oz|g|kg|ct|count|pack|packs|pc|pcs)\b/
    );

    return match ? cleanText(match[0]).replace(/\bml\b/i, "mL") : "";
  }

  function getShopifySiblingOptionValue(product, index) {
    const firstVariant = Array.isArray(product?.variants) ? product.variants[0] : null;
    const directValue = getShopifyVariantValue(firstVariant, product, 0);
    const titleValue = extractShopifySizeValue(product?.title || product?.name);

    if (directValue && !/^default title$/i.test(directValue)) {
      return directValue;
    }

    if (titleValue) {
      return titleValue;
    }

    return deriveVariantValue(
      product?.title || product?.name,
      firstVariant?.title || firstVariant?.name,
      `Variant ${index + 1}`
    );
  }

  function getShopifySiblingOptionName(values) {
    return values.length && values.every((value) => extractShopifySizeValue(value))
      ? "Size"
      : "Option";
  }

  function getShopifySiblingMergedTitle(product) {
    const title = cleanText(product?.title || product?.name)
      .replace(/^\s*(mini|jumbo|full[-\s]?size|travel[-\s]?size)\s+/i, "")
      .replace(/\s+\d+(?:\.\d+)?\s*(?:mL|ml|L|l|fl\s*oz|oz|g|kg|ct|count|pack|packs|pc|pcs)\s*$/i, "")
      .trim();

    return title.length >= 8 ? title : cleanText(product?.title || product?.name);
  }

  function getShopifySiblingSizeSortValue(value) {
    const match = cleanText(value).match(
      /(\d+(?:\.\d+)?)\s*(mL|ml|L|l|fl\s*oz|oz|g|kg|ct|count|pack|packs|pc|pcs)\b/
    );

    if (!match) {
      return Number.POSITIVE_INFINITY;
    }

    const number = Number(match[1]);
    const unit = match[2].toLowerCase().replace(/\s+/g, "");
    const multipliers = {
      l: 1000,
      ml: 1,
      floz: 29.5735,
      oz: 28.3495,
      kg: 1000,
      g: 1,
      ct: 1,
      count: 1,
      pack: 1,
      packs: 1,
      pc: 1,
      pcs: 1
    };

    return Number.isFinite(number) ? number * (multipliers[unit] || 1) : Number.POSITIVE_INFINITY;
  }

  function addShopifySiblingLinkCandidate(links, seen, href, source = "dom") {
    const normalizedHref = String(href || "")
      .replace(/\\u002F/g, "/")
      .replace(/\\\//g, "/")
      .replace(/&amp;/g, "&")
      .trim();
    const linkInfo = getShopifyProductLinkInfo(normalizedHref);

    if (!linkInfo || !linkInfo.handle || seen.has(linkInfo.handle)) {
      return;
    }

    if (/^(?:products?|collections?|pages?|blogs?|cart|search|account)$/i.test(linkInfo.handle)) {
      return;
    }

    seen.add(linkInfo.handle);
    links.push({
      ...linkInfo,
      source
    });
  }

  function collectShopifySiblingLinksFromAttributes(links, seen) {
    const attributes = [
      "href",
      "data-url",
      "data-href",
      "data-product-url",
      "data-product-handle",
      "data-handle",
      "data-product"
    ];

    document.querySelectorAll(attributes.map((attribute) => `[${attribute}]`).join(",")).forEach((element) => {
      attributes.forEach((attribute) => {
        const value = element.getAttribute?.(attribute);

        if (!value) {
          return;
        }

        if (attribute.includes("handle") && !/\/products\//i.test(value)) {
          addShopifySiblingLinkCandidate(links, seen, `/products/${value}`, `attr:${attribute}`);
          return;
        }

        if (/\/products\//i.test(value)) {
          addShopifySiblingLinkCandidate(links, seen, value, `attr:${attribute}`);
        }
      });
    });
  }

  function collectShopifySiblingLinksFromText(links, seen, text, source) {
    const sourceText = String(text || "");
    const patterns = [
      /https?:\\?\/\\?\/[^"'<>\s\\]+?\\?\/products\\?\/[a-z0-9][a-z0-9-]*(?:\?variant=\d+)?(?=[/?#"'\\\s<>&]|$)/gi,
      /(?:\\u002F|\\\/|\/)products(?:\\u002F|\\\/|\/)[a-z0-9][a-z0-9-]*(?:\?variant=\d+)?(?=[/?#"'\\\s<>&]|$)/gi
    ];

    patterns.forEach((pattern) => {
      let match = pattern.exec(sourceText);

      while (match) {
        addShopifySiblingLinkCandidate(links, seen, match[0], source);
        match = pattern.exec(sourceText);
      }

      pattern.lastIndex = 0;
    });
  }

  function getShopifySiblingLinkScore(linkInfo, baseProduct) {
    const currentHandle = getCurrentProductHandle();
    let score = 0;

    if (linkInfo.handle === currentHandle) {
      score += 100;
    }

    if (/attr:href|html|script/i.test(linkInfo.source || "")) {
      score += 8;
    }

    const titleTokens = normalizeShopifySiblingTitleTokens(baseProduct?.title || baseProduct?.name);

    titleTokens.forEach((token) => {
      if (linkInfo.handle.includes(token)) {
        score += 6;
      }
    });

    if (extractShopifySizeValue(linkInfo.handle.replace(/-/g, " "))) {
      score += 10;
    }

    return score;
  }

  function collectShopifySiblingProductLinks() {
    const seen = new Set();
    const links = [];

    collectShopifySiblingLinksFromAttributes(links, seen);
    collectShopifySiblingLinksFromText(
      links,
      seen,
      document.documentElement?.innerHTML || "",
      "html"
    );
    Array.from(document.scripts || []).forEach((script) => {
      collectShopifySiblingLinksFromText(links, seen, script.textContent || "", "script");
    });

    return links;
  }

  async function collectShopifySiblingProducts(baseProduct) {
    if (!baseProduct || !Array.isArray(baseProduct.variants) || baseProduct.variants.length !== 1) {
      return [];
    }

    const currentHandle = getCurrentProductHandle();
    const siblingProducts = [baseProduct];
    const seenHandles = new Set([
      getProductHandle(baseProduct).toLowerCase() || currentHandle
    ].filter(Boolean));
    const links = collectShopifySiblingProductLinks()
      .sort(
        (left, right) =>
          getShopifySiblingLinkScore(right, baseProduct) -
          getShopifySiblingLinkScore(left, baseProduct)
      );

    for (const linkInfo of links) {
      if (seenHandles.has(linkInfo.handle)) {
        continue;
      }

      const product =
        linkInfo.handle === currentHandle
          ? baseProduct
          : await fetchShopifyProductByLinkInfo(linkInfo);

      if (!product || !Array.isArray(product.variants) || product.variants.length !== 1) {
        continue;
      }

      if (!isLikelyShopifySiblingProduct(baseProduct, product)) {
        continue;
      }

      seenHandles.add(linkInfo.handle);
      siblingProducts.push(product);
    }

    return siblingProducts;
  }

  async function maybeMergeShopifySiblingProducts(baseProduct) {
    const siblingProducts = await collectShopifySiblingProducts(baseProduct);

    if (siblingProducts.length < 2) {
      return baseProduct;
    }

    const optionValues = siblingProducts.map((product, index) =>
      getShopifySiblingOptionValue(product, index)
    );
    const optionName = getShopifySiblingOptionName(optionValues);
    const seenValues = new Set();
    const mergedProducts = siblingProducts
      .map((product, index) => ({
        product,
        optionValue: optionValues[index]
      }))
      .filter((item) => {
        const key = cleanText(item.optionValue).toLowerCase();

        if (!key || seenValues.has(key)) {
          return false;
        }

        seenValues.add(key);
        return true;
      })
      .sort((left, right) => {
        const leftSize = getShopifySiblingSizeSortValue(left.optionValue);
        const rightSize = getShopifySiblingSizeSortValue(right.optionValue);

        if (leftSize !== rightSize) {
          return leftSize - rightSize;
        }

        return 0;
      });

    if (mergedProducts.length < 2) {
      return baseProduct;
    }

    return {
      ...baseProduct,
      title: getShopifySiblingMergedTitle(baseProduct),
      variants: mergedProducts.map(({ product, optionValue }) => {
        const variant = product.variants[0] || {};
        const imageUrl = collectShopifyImages(product)[0] || "";

        return {
          ...variant,
          title: optionValue,
          option1: optionValue,
          options: [optionValue],
          featured_image: imageUrl || variant.featured_image || variant.image,
          image: imageUrl || variant.image || variant.featured_image
        };
      }),
      options: [
        {
          name: optionName,
          values: mergedProducts.map((item) => item.optionValue)
        }
      ],
      __spcSiblingProductVariants: true
    };
  }

  function normalizeShopifyVariant(variant, product, index, variantCount) {
    const option1Value = getShopifyVariantValue(variant, product, 0);
    const isDefaultOnly =
      variantCount === 1 && (!option1Value || /^default title$/i.test(option1Value));
    const imageUrl = getShopifyImageUrl(variant?.featured_image || variant?.image);

    return {
      sku: cleanText(variant?.sku),
      barcode: cleanText(variant?.barcode),
      option1Name: isDefaultOnly ? "Default Title" : getShopifyOptionName(product, 0),
      option1Value: isDefaultOnly ? "Default Title" : option1Value || `Variant ${index + 1}`,
      option2Name: getShopifyVariantValue(variant, product, 1)
        ? getShopifyOptionName(product, 1)
        : "",
      option2Value: getShopifyVariantValue(variant, product, 1),
      option3Name: getShopifyVariantValue(variant, product, 2)
        ? getShopifyOptionName(product, 2)
        : "",
      option3Value: getShopifyVariantValue(variant, product, 2),
      price: formatShopifyMoney(variant?.price, true),
      compareAtPrice: formatShopifyMoney(
        variant?.compare_at_price || variant?.compareAtPrice,
        true
      ),
      variantImageUrl: imageUrl
    };
  }

  function normalizeShopifyProductObject(product, source = "shopify") {
    const variants = product.variants
      .map((variant, index) =>
        normalizeShopifyVariant(variant, product, index, product.variants.length)
      );
    const firstVariant = variants[0] || {};

    return {
      title: cleanText(product.title || product.name),
      description: htmlToText(product.description || product.body_html),
      vendor: cleanText(product.vendor || getBrandName(product.brand)),
      type: cleanText(product.type || product.product_type),
      tags: Array.isArray(product.tags) ? product.tags.join(", ") : cleanText(product.tags),
      sku: firstVariant.sku || cleanText(product.sku),
      price:
        formatShopifyMoney(product.price_min || product.price, true) ||
        firstVariant.price ||
        "",
      compareAtPrice:
        formatShopifyMoney(
          product.compare_at_price_min || product.compare_at_price,
          true
        ) ||
        firstVariant.compareAtPrice ||
        "",
      images: collectShopifyImages(product),
      variants,
      source
    };
  }

  async function collectShopifyProduct() {
    const ajaxProduct = await fetchShopifyAjaxProduct();

    if (ajaxProduct) {
      const mergedProduct = await maybeMergeShopifySiblingProducts(ajaxProduct);
      const normalizedProduct = normalizeShopifyProductObject(mergedProduct, "shopify-api");

      if (mergedProduct.__spcSiblingProductVariants) {
        normalizedProduct.images = collectShopifyImages(ajaxProduct);
        normalizedProduct.source = "shopify-api";
      }

      return normalizedProduct;
    }

    const candidates = collectProductObjectsFromScripts()
      .filter((product) => Array.isArray(product?.variants) && product.variants.length)
      .sort((left, right) => scoreShopifyProduct(right) - scoreShopifyProduct(left));
    const product = candidates[0];

    if (!product || scoreShopifyProduct(product) <= 0) {
      return {};
    }

    return normalizeShopifyProductObject(product, "shopify");
  }

  function isBlockedDomOptionText(value) {
    return /add to cart|checkout|buy now|shipping|guarantee|warning|stock notice|customer|reviews?|returns?|refund|lowest price|cancel or edit|free gift|free shipping|out of stock protection/i.test(
      value
    );
  }

  function hasSubscriptionVariantText(value) {
    return /\b(subscribe|subscription|selling\s*plan|delivery\s*frequency|deliver(?:ed|s)?\s*every|one[-\s]?time|recurr(?:ing)?|auto[-\s]?ship|autoship|prepay|prepaid|every\s+\d+|(?:\d+\s*)?(?:day|week|month)s?)\b/i.test(
      cleanText(value)
    );
  }

  function elementHasSubscriptionVariantSignal(element) {
    if (!element) {
      return false;
    }

    return [
      element.id,
      element.className,
      element.getAttribute?.("name"),
      element.getAttribute?.("aria-label"),
      element.getAttribute?.("data-selling-plan"),
      element.getAttribute?.("data-selling-plan-id"),
      element.getAttribute?.("data-selling-plan-name"),
      element.getAttribute?.("data-subscription"),
      element.getAttribute?.("data-subscription-plan")
    ].some(hasSubscriptionVariantText);
  }

  function normalizeSubscriptionGroupLabel(label, fallback = "Purchase Option") {
    const text = cleanDomOptionValue(label);

    if (/frequency|deliver/i.test(text)) {
      return "Delivery Frequency";
    }

    if (/one[-\s]?time|subscribe|subscription|selling\s*plan|recurr|auto[-\s]?ship|autoship/i.test(text)) {
      return "Purchase Option";
    }

    return text || fallback;
  }

  function cleanDomOptionValue(value) {
    const parts = String(value || "")
      .split(/\r?\n| {2,}/)
      .map((part) =>
        cleanText(part)
          .replace(/\b(subscribe\s*(?:&|and)?\s*save)\s+\d+%.*$/i, "$1")
          .replace(/\b(save|off)\s+\d+%.*$/i, "")
          .replace(/^\$[\d,.]+(?:\s*\/\w+)?$/i, "")
          .replace(/^popular$/i, "")
          .replace(/^\/\w+$/i, "")
          .trim()
      )
      .filter(Boolean)
      .filter((part) => !isBlockedDomOptionText(part));
    const bestPart = parts.find((part) => /[a-z\u4e00-\u9fa5]/i.test(part)) || parts[0] || "";

    return cleanText(bestPart)
      .replace(/\s+\$[\d,.].*$/i, "")
      .replace(/\b(save|off)\s+\d+%.*$/i, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getLabelForInput(input) {
    if (!input) {
      return null;
    }

    if (input.id) {
      const label = document.querySelector(`label[for="${CSS.escape(input.id)}"]`);

      if (label) {
        return label;
      }
    }

    return input.closest("label");
  }

  function getDomOptionText(control) {
    if (!control) {
      return "";
    }

    if (control.matches?.("option")) {
      return cleanDomOptionValue(control.textContent || control.value);
    }

    if (control.matches?.("input")) {
      const label = getLabelForInput(control);
      return cleanDomOptionValue(label?.innerText || label?.textContent || "");
    }

    return cleanDomOptionValue(control.innerText || control.textContent || "");
  }

  function getDomOptionPriceInfo(element) {
    const text = cleanText(element?.innerText || element?.textContent || "");
    const priceValues = [
      ...collectMoneyValuesFromAttributes(element, [
        "data-variant-price",
        "data-variant-subscription-price",
        "data-subscription-price",
        "data-selling-plan-price",
        "data-price",
        "data-current-price",
        "data-sale-price"
      ]),
      ...collectMoneyValuesFromAttributes(element, [
        "data-subscription-line-cents",
        "data-subscription-price-cents",
        "data-selling-plan-price-cents",
        "data-price-cents"
      ], true),
      ...collectMoneyValuesFromSelectors(element, [
        "[data-variant-price]",
        "[data-variant-subscription-price]",
        "[data-subscription-price]",
        "[data-selling-plan-price]",
        "[data-price]",
        "[data-current-price]",
        "[data-sale-price]",
        "[class*='subscription'][class*='price']",
        "[class*='selling'][class*='price']",
        "[class*='current'][class*='price']",
        "[class*='sale'][class*='price']"
      ]),
      ...extractLabeledMoneyValues(text, getCurrentPriceLabelPattern())
    ];
    const compareValues = [
      ...collectMoneyValuesFromAttributes(element, [
        "data-variant-compare",
        "data-subscription-compare",
        "data-selling-plan-compare",
        "data-compare-at-price",
        "data-compare-price",
        "data-original-price",
        "data-was-price"
      ]),
      ...collectMoneyValuesFromAttributes(element, [
        "data-subscription-compare-cents",
        "data-selling-plan-compare-cents",
        "data-compare-at-price-cents",
        "data-compare-price-cents"
      ], true),
      ...collectMoneyValuesFromSelectors(element, [
        "[data-variant-compare]",
        "[data-subscription-compare]",
        "[data-selling-plan-compare]",
        "[data-compare-at-price]",
        "[data-compare-price]",
        "[data-original-price]",
        "[data-was-price]",
        ".compare-at-price",
        ".compare-price",
        ".was-price",
        ".original-price",
        ".regular-price",
        ".price--compare",
        ".price__compare",
        ".price-item--regular",
        "s",
        "del"
      ]),
      ...extractLabeledMoneyValues(text, getComparePriceLabelPattern())
    ];

    return getPriceInfoFromMoneyValues(
      priceValues,
      compareValues,
      extractMoneyValues(text)
    );
  }

  function getDomGroupLabel(group, index) {
    const label =
      group.querySelector(":scope > legend")?.textContent ||
      group.querySelector(":scope > [class*='label']")?.textContent ||
      group.getAttribute("aria-label") ||
      group.getAttribute("data-option-name") ||
      group.getAttribute("data-name") ||
      "";
    const cleaned = cleanDomOptionValue(label);

    if (cleaned && !isBlockedDomOptionText(cleaned)) {
      return cleaned.replace(/:$/, "");
    }

    return index === 0 ? "Option" : `Option${index + 1}`;
  }

  function getDomOptionControlSelector(group) {
    const selectors = [
      "input[type='radio']",
      "select option",
      "button",
      "[role='radio']",
      "[data-option-value]",
      "[data-value]"
    ];

    if (elementHasSubscriptionVariantSignal(group)) {
      selectors.push(
        "label",
        "[data-selling-plan]",
        "[data-selling-plan-id]",
        "[data-selling-plan-option]",
        "[data-selling-plan-value]",
        "[data-subscription-option]",
        "[data-subscription-plan]"
      );
    }

    return selectors.join(", ");
  }

  function getDomOptionRoot(control) {
    return (
      control.closest?.(
        [
          "label",
          "li",
          "button",
          "[role='radio']",
          "[data-option-value]",
          "[data-value]",
          "[data-selling-plan]",
          "[data-selling-plan-id]",
          "[data-selling-plan-option]",
          "[data-subscription-option]",
          "[data-subscription-plan]"
        ].join(", ")
      ) || control
    );
  }

  function getDomOptionImageUrl(control) {
    const imageRoot = getDomOptionRoot(control);
    const images = uniqueImages(inspectImagesInElement(imageRoot).urls);

    return images[0]?.url || "";
  }

  function collectDomOptionControls(group) {
    const controls = [...group.querySelectorAll(getDomOptionControlSelector(group))];
    const options = [];
    const seen = new Set();

    controls.forEach((control) => {
      if (control.matches?.("option") && !cleanText(control.value)) {
        return;
      }

      const value = getDomOptionText(control);

      if (!value || isBlockedDomOptionText(value) || seen.has(value.toLowerCase())) {
        return;
      }

      seen.add(value.toLowerCase());
      const optionRoot = getDomOptionRoot(control);
      options.push({
        value,
        imageUrl: getDomOptionImageUrl(control),
        ...getDomOptionPriceInfo(optionRoot)
      });
    });

    return options;
  }

  function collectDomVariantGroups() {
    const selectors = [
      "variant-selects fieldset",
      "fieldset",
      "[role='radiogroup']",
      "[data-selling-plan-group]",
      "[data-selling-plans]",
      "[data-selling-plans-variants]",
      "[data-subscription-options]",
      "[data-subscription]",
      "[data-product-options]",
      "[data-product-option]",
      "[class*='selling-plan']",
      "[class*='subscription']",
      "[class*='delivery-frequency']",
      "[class*='variant'][class*='option']",
      "[class*='product'][class*='option']",
      "[class*='swatch']"
    ];
    const groups = [];
    const seen = new Set();

    document.querySelectorAll(selectors.join(", ")).forEach((group) => {
      const options = collectDomOptionControls(group);

      if (options.length < 2 || options.length > 12) {
        return;
      }

      const label = getDomGroupLabel(group, groups.length);
      const isSubscriptionGroup =
        elementHasSubscriptionVariantSignal(group) ||
        hasSubscriptionVariantText(label) ||
        options.some((option) => hasSubscriptionVariantText(option.value));

      if (!isSubscriptionGroup && /delivers every|delivery|frequency|selling plan|subscribe/i.test(label)) {
        return;
      }

      const valueKey = options.map((option) => option.value).join("|").toLowerCase();
      const key = `${label}:${valueKey}`;

      if (seen.has(key) || seen.has(valueKey)) {
        return;
      }

      seen.add(key);
      seen.add(valueKey);
      groups.push({
        label: isSubscriptionGroup
          ? normalizeSubscriptionGroupLabel(label, groups.length === 0 ? "Purchase Option" : `Option${groups.length + 1}`)
          : label,
        options
      });
    });

    return groups.slice(0, 3);
  }

  function buildDomVariantsFromGroups(groups) {
    if (!groups.length) {
      return [];
    }

    const variants = [];

    function visit(groupIndex, selected) {
      if (groupIndex >= groups.length) {
        const priceOption = [...selected].reverse().find((option) => option.price);
        const compareOption = [...selected].reverse().find((option) => option.compareAtPrice);
        const imageOption = selected.find((option) => option.imageUrl);

        variants.push({
          sku: "",
          barcode: "",
          option1Name: groups[0]?.label || "Option",
          option1Value: selected[0]?.value || `Variant ${variants.length + 1}`,
          option2Name: groups[1]?.label || "",
          option2Value: selected[1]?.value || "",
          option3Name: groups[2]?.label || "",
          option3Value: selected[2]?.value || "",
          price: priceOption?.price || "",
          compareAtPrice: compareOption?.compareAtPrice || "",
          variantImageUrl: imageOption?.imageUrl || ""
        });
        return;
      }

      groups[groupIndex].options.forEach((option) => {
        visit(groupIndex + 1, [...selected, option]);
      });
    }

    visit(0, []);
    return variants;
  }

  function collectDomVariants() {
    return buildDomVariantsFromGroups(collectDomVariantGroups());
  }

  function normalizePrice(value) {
    const text = cleanText(value);

    if (!text) {
      return "";
    }

    const priceCandidate = text
      .replace(/\s/g, "")
      .match(/\d[\d.,]*/)?.[0];

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

    const matches = compact.match(/\d+(?:\.\d{1,2})?/g);

    if (!matches || !matches.length) {
      return "";
    }

    return matches[0];
  }

  function sanitizeDocumentTitle(title) {
    const value = cleanText(title);

    if (!value) {
      return "";
    }

    return value
      .replace(/^Amazon\.com\s*[:：]\s*/i, "")
      .replace(/\s*[:：]\s*Amazon\.com.*$/i, "")
      .replace(/\s*[-|]\s*Amazon\.com.*$/i, "")
      .replace(/\s*[:：]\s*(Sports|Electronics|Home|Kitchen|Clothing|Books).*/i, "")
      .trim();
  }

  function isWeakTitle(title) {
    const normalized = cleanText(title).toLowerCase();

    if (!normalized) {
      return true;
    }

    const weakTitles = [
      "chat history",
      "menu",
      "search",
      "cart",
      "account",
      "customer reviews",
      "product details"
    ];

    return weakTitles.includes(normalized) || normalized.length < 4;
  }

  function getBrandName(brand) {
    if (!brand) {
      return "";
    }

    if (Array.isArray(brand)) {
      return brand.map(getBrandName).find(Boolean) || "";
    }

    if (typeof brand === "string") {
      return cleanText(brand);
    }

    return cleanText(brand.name || brand.alternateName || brand["@id"]);
  }

  function generateHandle(title) {
    return cleanText(title)
      .toLowerCase()
      .replace(/['"]/g, "")
      .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 120);
  }

  function queryText(selectors) {
    for (const selector of selectors) {
      const element = document.querySelector(selector);
      const text = cleanText(element?.textContent);

      if (text) {
        return text;
      }
    }

    return "";
  }

  function queryAttribute(selectors, attribute) {
    for (const selector of selectors) {
      const element = document.querySelector(selector);
      const value = cleanText(element?.getAttribute(attribute));

      if (value) {
        return value;
      }
    }

    return "";
  }

  function safeQuerySelectorAll(selector) {
    if (!selector) {
      return [];
    }

    try {
      return Array.from(document.querySelectorAll(selector));
    } catch (error) {
      return [];
    }
  }

  function getElementRuleValue(element, attributes = []) {
    if (!element) {
      return "";
    }

    for (const attribute of attributes) {
      const value = cleanText(element.getAttribute?.(attribute));

      if (value) {
        return value;
      }
    }

    if ("value" in element) {
      const value = cleanText(element.value);

      if (value) {
        return value;
      }
    }

    return cleanText(element.textContent);
  }

  function queryRuleValue(selector, attributes = []) {
    return getElementRuleValue(safeQuerySelectorAll(selector)[0], attributes);
  }

  function collectRuleImages(selector) {
    const images = [];

    safeQuerySelectorAll(selector).forEach((element) => {
      if (element.matches?.(IMAGE_NODE_SELECTOR)) {
        images.push(...collectImageUrlsFromElement(element));
        return;
      }

      images.push(...inspectImagesInElement(element, selector).urls);
    });

    return images;
  }

  function getCurrentPriceLabelPattern() {
    return /(?:sale|now|current|today|price|subscribe|subscription|one-time|deal|售价|现价|当前价|订阅价)/i;
  }

  function getComparePriceLabelPattern() {
    return /(?:compare|was|original|regular|list|retail|msrp|before|strike|strikethrough|原价|划线价|对比价|市场价|零售价)/i;
  }

  function stripUnitPriceText(value) {
    return String(value || "")
      .replace(
        /\([^)]*(?:\/|per\s+|ounce|ounces|oz|fl\s*oz|ml|g|kg|lb|lbs|count|ct|unit|each)[^)]*\)/gi,
        " "
      )
      .replace(
        /[$€£¥]\s*\d[\d,.]*\s*(?:\/|\bper\b)\s*(?:ounce|ounces|oz|fl\s*oz|ml|g|kg|lb|lbs|count|ct|unit|each)\b/gi,
        " "
      );
  }

  function extractMoneyValues(value) {
    const text = stripUnitPriceText(value);
    const matches = text.match(/(?:[$€£¥]\s*)?\d[\d,.]*(?:\.\d{1,2})?/g) || [];
    const values = [];
    const seen = new Set();

    matches.forEach((match) => {
      if (!/[$€£¥]/.test(match) && !/[.,]\d{1,2}$/.test(match)) {
        return;
      }

      const value = normalizePrice(match);

      if (!value || seen.has(value)) {
        return;
      }

      seen.add(value);
      values.push(value);
    });

    return values;
  }

  function uniqueMoneyValues(values = []) {
    const seen = new Set();

    return values
      .map((value) => normalizePrice(value))
      .filter((value) => {
        if (!value || seen.has(value)) {
          return false;
        }

        seen.add(value);
        return true;
      });
  }

  function collectMoneyValuesFromAttributes(element, attributes = [], isCents = false) {
    return attributes.flatMap((attribute) => {
      const value = element?.getAttribute?.(attribute);

      if (!value) {
        return [];
      }

      if (isCents || /cents/i.test(attribute)) {
        return [formatShopifyMoney(value, true)].filter(Boolean);
      }

      return extractMoneyValues(value);
    });
  }

  function collectMoneyValuesFromSelectors(element, selectors = []) {
    return selectors.flatMap((selector) =>
      Array.from(element?.querySelectorAll?.(selector) || [])
        .slice(0, 6)
        .flatMap((node) => extractMoneyValues(node.textContent || ""))
    );
  }

  function extractLabeledMoneyValues(text, labelPattern) {
    return String(text || "")
      .split(/[\n\r|•]+/)
      .filter((part) => labelPattern.test(part))
      .flatMap(extractMoneyValues);
  }

  function getPriceInfoFromMoneyValues(priceValues = [], compareValues = [], fallbackValues = []) {
    const currentPrices = uniqueMoneyValues(priceValues);
    const comparePrices = uniqueMoneyValues(compareValues);
    const fallbackPrices = uniqueMoneyValues(fallbackValues);
    let price = currentPrices[0] || fallbackPrices[0] || "";
    let compareAtPrice =
      comparePrices.find((candidate) => candidate !== price) ||
      fallbackPrices.find((candidate) => candidate !== price) ||
      "";

    const priceNumber = Number(price);
    const compareNumber = Number(compareAtPrice);

    if (
      price &&
      compareAtPrice &&
      Number.isFinite(priceNumber) &&
      Number.isFinite(compareNumber) &&
      priceNumber > compareNumber
    ) {
      [price, compareAtPrice] = [compareAtPrice, price];
    }

    return { price, compareAtPrice };
  }

  function extractRuleMoneyValues(value) {
    return extractMoneyValues(value);
  }

  function getRuleVariantItemText(element) {
    return cleanText(element?.innerText || element?.textContent || "");
  }

  function getRuleVariantPriceInfo(element) {
    const text = getRuleVariantItemText(element);
    const priceValues = [
      ...collectMoneyValuesFromAttributes(element, [
        "data-price",
        "data-current-price",
        "data-sale-price",
        "data-product-price",
        "data-variant-price"
      ]),
      ...collectMoneyValuesFromAttributes(element, [
        "data-price-cents",
        "data-current-price-cents",
        "data-sale-price-cents",
        "data-product-price-cents",
        "data-variant-price-cents"
      ], true),
      ...collectMoneyValuesFromSelectors(element, [
        "[data-price]",
        "[data-current-price]",
        "[data-sale-price]",
        "[data-product-price]",
        "[data-variant-price]",
        ".current-price",
        ".sale-price",
        ".price__sale",
        ".price-item--sale"
      ]),
      ...extractLabeledMoneyValues(text, getCurrentPriceLabelPattern())
    ];
    const compareValues = [
      ...collectMoneyValuesFromAttributes(element, [
        "data-compare-at-price",
        "data-compare-price",
        "data-original-price",
        "data-was-price",
        "data-list-price"
      ]),
      ...collectMoneyValuesFromAttributes(element, [
        "data-compare-at-price-cents",
        "data-compare-price-cents",
        "data-original-price-cents",
        "data-was-price-cents",
        "data-list-price-cents"
      ], true),
      ...collectMoneyValuesFromSelectors(element, [
        "[data-compare-at-price]",
        "[data-compare-price]",
        "[data-original-price]",
        "[data-was-price]",
        "[data-list-price]",
        ".compare-at-price",
        ".compare-price",
        ".was-price",
        ".original-price",
        ".regular-price",
        ".price__regular",
        ".price-item--regular",
        "s",
        "del"
      ]),
      ...extractLabeledMoneyValues(text, getComparePriceLabelPattern())
    ];

    return getPriceInfoFromMoneyValues(
      priceValues,
      compareValues,
      extractRuleMoneyValues(text)
    );
  }

  function cleanRuleVariantLabelCandidate(value) {
    const label = cleanDomOptionValue(value);

    if (
      !label ||
      label.length > 90 ||
      extractRuleMoneyValues(label).length ||
      /^(order now|add to cart|buy now|checkout|cancel anytime|free shipping|shipping|per bag|per day|popular)$/i.test(label) ||
      /\b(save|off)\s*\d+%/i.test(label)
    ) {
      return "";
    }

    return label;
  }

  function scoreRuleVariantLabel(label) {
    let score = 0;

    if (hasSubscriptionVariantText(label)) {
      score += 32;
    } else if (/\b(month|supply|pack|count|size|color|colour|flavo[u]?r|kit|bundle|ritual)\b/i.test(label)) {
      score += 28;
    } else if (/\b(bottle|bag|serving|week|oz|ml|g)\b/i.test(label)) {
      score += 14;
    }

    if (/\d/.test(label)) {
      score += 6;
    }

    if (label.length <= 45) {
      score += 4;
    }

    if (/\b(ideal|great for|solution|delivered|days?|customer|review)\b/i.test(label)) {
      score -= 8;
    }

    return score;
  }

  function getRuleVariantLabel(element, index) {
    const attributeLabel = [
      element.getAttribute?.("aria-label"),
      element.getAttribute?.("data-value"),
      element.getAttribute?.("data-title"),
      element.getAttribute?.("data-name"),
      element.getAttribute?.("title"),
      element.value
    ]
      .map(cleanRuleVariantLabelCandidate)
      .find(Boolean);

    if (attributeLabel) {
      return attributeLabel;
    }

    const ownLabel = cleanRuleVariantLabelCandidate(element.textContent);
    const candidates = [
      ownLabel,
      ...Array.from(
        element.querySelectorAll?.(
          "p, span, strong, b, em, label, button, [role='radio'], [data-value], [class*='title'], [class*='name'], [class*='option']"
        ) || []
      ).map((node) => cleanRuleVariantLabelCandidate(node.textContent))
    ].filter(Boolean);
    const uniqueCandidates = [...new Set(candidates)];
    const bestCandidate = uniqueCandidates
      .map((label) => ({ label, score: scoreRuleVariantLabel(label) }))
      .sort((left, right) => right.score - left.score)[0]?.label;

    return bestCandidate || `Variant ${index + 1}`;
  }

  function getRuleVariantImageUrl(element, index, fallbackImages = []) {
    const images = uniqueImages(inspectImagesInElement(element).urls);

    return images[0]?.url || normalizeProductImageUrl(fallbackImages[index] || fallbackImages[0]) || "";
  }

  function getRuleVariantItemScore(element) {
    const text = getRuleVariantItemText(element);

    if (!text || text.length > 1400) {
      return 0;
    }

    const prices = extractRuleMoneyValues(text);
    const label = getRuleVariantLabel(element, 0);
    const hasControlShape = element.matches?.(
      "button, label, option, [role='radio'], [aria-checked], [data-value], [data-variant], [data-option-value], [data-selling-plan], [data-selling-plan-id], [data-subscription-option], [data-subscription-plan]"
    );
    const hasVariantWords =
      hasSubscriptionVariantText(text) ||
      /\b(month|supply|pack|count|size|color|colour|flavo[u]?r|kit|bundle|ritual|bottle|bag|serving|week|oz|ml|g)\b/i.test(text);
    const hasImages = Boolean(inspectImagesInElement(element).urls.length);

    if (!prices.length && !hasControlShape && !hasVariantWords && !hasImages) {
      return 0;
    }

    if (!label || /^variant\s+1$/i.test(label)) {
      return 0;
    }

    return prices.length * 18 + (hasImages ? 10 : 0) + (hasVariantWords ? 8 : 0) + (hasControlShape ? 6 : 0);
  }

  function findRuleVariantItems(root) {
    const parentCandidates = [
      root,
      ...Array.from(
        root.querySelectorAll?.(
          "div, ul, ol, fieldset, [role='radiogroup'], [data-selling-plan-group], [data-selling-plans], [data-subscription-options], [data-subscription], [class*='grid'], [class*='option'], [class*='plan'], [class*='variant'], [class*='bundle'], [class*='subscription'], [class*='selling-plan'], [class*='delivery-frequency']"
        ) || []
      )
    ];
    const groups = [];

    parentCandidates.forEach((parent, parentIndex) => {
      const items = Array.from(parent.children || [])
        .map((element) => ({
          element,
          score: getRuleVariantItemScore(element)
        }))
        .filter((item) => item.score > 0);

      if (items.length < 2 || items.length > 12) {
        return;
      }

      const totalScore =
        items.reduce((sum, item) => sum + item.score, 0) +
        (parent === root ? 12 : 0) -
        parentIndex * 0.2;

      groups.push({
        items: items.map((item) => item.element),
        score: totalScore
      });
    });

    return groups.sort((left, right) => right.score - left.score)[0]?.items || [];
  }

  function collectRuleVariantsFromCards(root, fallbackImages = []) {
    const items = findRuleVariantItems(root);

    if (!items.length) {
      return [];
    }

    const optionName = getDomGroupLabel(root, 0) || "Option";

    return items.map((item, index) => {
      const priceInfo = getRuleVariantPriceInfo(item);

      return {
        sku: "",
        barcode: "",
        option1Name: optionName,
        option1Value: getRuleVariantLabel(item, index),
        option2Name: "",
        option2Value: "",
        option3Name: "",
        option3Value: "",
        price: priceInfo.price,
        compareAtPrice: priceInfo.compareAtPrice,
        variantImageUrl: getRuleVariantImageUrl(item, index, fallbackImages)
      };
    });
  }

  function collectRuleVariantsFromControls(root) {
    const options = collectDomOptionControls(root);

    if (options.length < 2 || options.length > 12) {
      return [];
    }

    return buildDomVariantsFromGroups([
      {
        label: getDomGroupLabel(root, 0),
        options
      }
    ]);
  }

  function dedupeRuleVariants(variants) {
    const seen = new Set();

    return variants.filter((variant) => {
      const key = [
        variant.option1Name,
        variant.option1Value,
        variant.option2Name,
        variant.option2Value,
        variant.option3Name,
        variant.option3Value,
        variant.price,
        variant.compareAtPrice,
        variant.variantImageUrl
      ]
        .map((value) => cleanText(value).toLowerCase())
        .join("|");

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    });
  }

  function collectRuleVariants(selector, fallbackImages = []) {
    const variants = [];

    safeQuerySelectorAll(selector).forEach((root) => {
      const cardVariants = collectRuleVariantsFromCards(root, fallbackImages);

      if (cardVariants.length) {
        variants.push(...cardVariants);
        return;
      }

      variants.push(...collectRuleVariantsFromControls(root));
    });

    return dedupeRuleVariants(variants);
  }

  function collectSiteRuleProduct(rule, source = "site-rule") {
    const normalizedRule = normalizeSiteRule(rule);

    if (!hasSiteRuleSelectors(normalizedRule)) {
      return {};
    }

    const selectors = normalizedRule.selectors;
    const imageUrls = selectors.images ? collectRuleImages(selectors.images) : [];
    const variants = selectors.variants ? collectRuleVariants(selectors.variants, imageUrls) : [];

    return {
      title: queryRuleValue(selectors.title, ["content", "aria-label", "title"]),
      description: queryRuleValue(selectors.description, ["content", "aria-label", "title"]),
      vendor: queryRuleValue(selectors.vendor, ["content", "data-vendor", "data-brand"]),
      sku: queryRuleValue(selectors.sku, ["content", "data-sku", "sku"]),
      price: normalizePrice(
        queryRuleValue(selectors.price, [
          "content",
          "data-price",
          "data-product-price",
          "data-current-price",
          "data-sale-price",
          "data-price-amount"
        ])
      ),
      compareAtPrice: normalizePrice(
        queryRuleValue(selectors.compareAtPrice, [
          "content",
          "data-compare-at-price",
          "data-was-price",
          "data-original-price",
          "data-price-amount"
        ])
      ),
      images: imageUrls,
      variants,
      imagePriority: imageUrls.length ? "site-rule" : "",
      source
    };
  }

  function getSiteRuleVariantSamples(variants = []) {
    return variants.slice(0, 4).map((variant) => {
      const optionParts = [
        variant.option1Value,
        variant.option2Value,
        variant.option3Value
      ].filter(Boolean);
      const priceParts = [
        variant.price ? `价格 ${variant.price}` : "",
        variant.compareAtPrice ? `原价 ${variant.compareAtPrice}` : ""
      ].filter(Boolean);

      return [...optionParts, ...priceParts].join(" / ");
    });
  }

  function testSiteRule(rule) {
    const product = collectSiteRuleProduct(rule, "custom-rule");

    return {
      fields: {
        title: product.title || "",
        price: product.price || "",
        compareAtPrice: product.compareAtPrice || "",
        description: product.description || "",
        vendor: product.vendor || "",
        sku: product.sku || ""
      },
      imageCount: uniqueImages(product.images || []).length,
      variantCount: Array.isArray(product.variants) ? product.variants.length : 0,
      sampleVariants: getSiteRuleVariantSamples(product.variants || []),
      sampleImages: uniqueImages(product.images || [])
        .slice(0, 3)
        .map((image) => image.url),
      source: product.source || "custom-rule"
    };
  }

  function queryAmazonPrice() {
    const whole = queryText([
      "#corePriceDisplay_desktop_feature_div .a-price .a-price-whole",
      "#corePrice_feature_div .a-price .a-price-whole",
      "#apex_desktop .a-price .a-price-whole"
    ]);
    const fraction = queryText([
      "#corePriceDisplay_desktop_feature_div .a-price .a-price-fraction",
      "#corePrice_feature_div .a-price .a-price-fraction",
      "#apex_desktop .a-price .a-price-fraction"
    ]);

    if (whole) {
      const wholeDigits = whole.replace(/\D/g, "");
      const fractionDigits = fraction.replace(/\D/g, "").slice(0, 2) || "00";

      return normalizePrice(`${wholeDigits}.${fractionDigits}`);
    }

    return normalizePrice(
      queryText([
        "#corePriceDisplay_desktop_feature_div .a-offscreen",
        "#corePrice_feature_div .a-offscreen",
        "#apex_desktop .a-offscreen",
        "#priceblock_ourprice",
        "#priceblock_dealprice",
        "#price_inside_buybox"
      ])
    );
  }

  function queryAmazonCompareAtPrice() {
    const compareAtText =
      queryText([
        "#corePriceDisplay_desktop_feature_div .basisPrice .a-offscreen",
        "#corePriceDisplay_desktop_feature_div .apex-basisprice-value .a-offscreen",
        "#corePriceDisplay_desktop_feature_div [data-a-strike='true'] .a-offscreen",
        "#corePrice_feature_div .basisPrice .a-offscreen",
        "#corePrice_feature_div [data-a-strike='true'] .a-offscreen",
        "#apex_desktop .basisPrice .a-offscreen",
        "#apex_desktop [data-a-strike='true'] .a-offscreen"
      ]) ||
      queryText([
        "#corePriceDisplay_desktop_feature_div .basisPrice",
        "#corePrice_feature_div .basisPrice",
        "#apex_desktop .basisPrice"
      ]);

    return normalizePrice(compareAtText);
  }

  function queryAmazonVendor() {
    const byline = queryText(["#bylineInfo", "#brand", "a#bylineInfo"]);

    return byline
      .replace(/^Visit the\s+/i, "")
      .replace(/\s+Store$/i, "")
      .replace(/^Brand\s*[:：]\s*/i, "")
      .trim();
  }

  function cleanAmazonVariantName(value, fallback = "Option") {
    const name = cleanText(value)
      .replace(/:.*/g, "")
      .replace(/^inline\s+twister\s+row\s+/i, "")
      .replace(/^select\s+/i, "")
      .replace(/\bname$/i, "")
      .replace(/[_-]+/g, " ")
      .trim();

    if (/^size$/i.test(name)) {
      return "Size";
    }

    if (/^color$/i.test(name)) {
      return "Color";
    }

    return name || fallback;
  }

  function cleanAmazonVariantValue(value) {
    return cleanText(value)
      .replace(/\bcurrently selected\b/gi, "")
      .replace(/\bclick to select\b/gi, "")
      .replace(/\bprice history\b/gi, "")
      .replace(/\s+\$[\d,.]+.*$/i, "")
      .replace(/\s+list price:.*$/i, "")
      .replace(/\s+was:.*$/i, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function isPriceOnlyAmazonVariantValue(value) {
    const text = cleanText(value);

    return (
      Boolean(text) &&
      /[$€£¥]/.test(text) &&
      /^[$€£¥]?\s*\d[\d,.]*(?:\s*\([^)]*\))?$/i.test(text)
    );
  }

  function isBlockedAmazonVariantValue(value) {
    return (
      !value ||
      value.length > 90 ||
      isPriceOnlyAmazonVariantValue(value) ||
      /^(text|background|window|white|black|red|green|blue|yellow|magenta)$/i.test(value) ||
      /video|image|see all|customer reviews|price history|add to cart|buy now|previous page|next page/i.test(value)
    );
  }

  function extractAmazonVariantValueFromText(value) {
    const text = cleanAmazonVariantValue(value);

    if (!text) {
      return "";
    }

    const numberedShade = text.match(/#\s*\d{2,5}\s+[\w][\w\s.'-]{1,50}/i);

    if (numberedShade?.[0]) {
      return cleanAmazonVariantValue(numberedShade[0].replace(/#\s*/, "#"));
    }

    const selectedShade = text.match(/(?:color|colour|shade)\s*[:：]\s*(.+)$/i);

    if (selectedShade?.[1]) {
      return cleanAmazonVariantValue(selectedShade[1]);
    }

    return text;
  }

  function getAmazonVariantAsin(element) {
    const values = [
      element?.getAttribute?.("data-defaultasin"),
      element?.getAttribute?.("data-asin"),
      element?.getAttribute?.("data-csa-c-item-id"),
      element?.getAttribute?.("data-csa-c-asin"),
      element?.getAttribute?.("data-dp-url"),
      element?.querySelector?.("[data-defaultasin]")?.getAttribute("data-defaultasin"),
      element?.querySelector?.("[data-asin]")?.getAttribute("data-asin"),
      element?.querySelector?.("[data-dp-url]")?.getAttribute("data-dp-url"),
      element?.querySelector?.("a[href]")?.getAttribute("href"),
      element?.closest?.("a[href]")?.getAttribute("href"),
      element?.id
    ];

    for (const value of values) {
      const text = cleanText(value);
      const directMatch = text.match(/\b([A-Z0-9]{10})\b/i);
      const asin = getAmazonAsinFromUrlText(text) || directMatch?.[1] || "";

      if (asin) {
        return asin.toUpperCase();
      }
    }

    return "";
  }

  function getAmazonVariantOptionIdentity(option) {
    const asin = cleanText(option?.asin).toLowerCase();
    const value = cleanAmazonVariantValue(option?.value).toLowerCase();

    if (asin) {
      return `asin:${asin}`;
    }

    return value ? `value:${value}` : "";
  }

  function getAmazonVariantImageMatchText(value) {
    return cleanAmazonVariantValue(value)
      .toLowerCase()
      .replace(/[#:/(),]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getAmazonVariantImageContext(element) {
    const image = element?.matches?.("img, source") ? element : element?.querySelector?.("img, source");
    const linkedElement = element?.querySelector?.("a[href]") || element?.closest?.("a[href]");

    return [
      element?.getAttribute?.("aria-label"),
      element?.getAttribute?.("title"),
      element?.getAttribute?.("data-title"),
      element?.getAttribute?.("data-value"),
      element?.getAttribute?.("data-asin"),
      element?.getAttribute?.("data-defaultasin"),
      element?.getAttribute?.("data-dp-url"),
      image?.getAttribute?.("alt"),
      image?.getAttribute?.("title"),
      linkedElement?.getAttribute?.("aria-label"),
      linkedElement?.getAttribute?.("title"),
      linkedElement?.getAttribute?.("href"),
      element?.innerText,
      element?.textContent
    ]
      .map(cleanText)
      .filter(Boolean)
      .join(" ")
      .slice(0, 1200);
  }

  function getAmazonVariantImageMatchScore(context, value, asin) {
    const normalizedContext = getAmazonVariantImageMatchText(context);
    const normalizedValue = getAmazonVariantImageMatchText(value);
    const asinText = cleanText(asin).toLowerCase();
    let score = 0;

    if (asinText && normalizedContext.includes(asinText)) {
      score += 24;
    }

    if (normalizedValue.length >= 4 && normalizedContext.includes(normalizedValue)) {
      score += 28;
    }

    const shadeNumber = cleanText(value).match(/#?\s*(\d{2,5})/);

    if (shadeNumber?.[1] && normalizedContext.includes(shadeNumber[1])) {
      score += 8;
    }

    return score;
  }

  function getAmazonImageUrlQualityScore(url) {
    const text = String(url || "");
    const prefix = Number(text.match(/\/images\/I\/(\d{2})/i)?.[1] || 0);
    let score = /media-amazon\.com|ssl-images-amazon\.com/i.test(text) ? 6 : 0;

    if (prefix >= 70) {
      score += 14;
    } else if (prefix >= 60) {
      score += 12;
    } else if (prefix >= 50) {
      score += 8;
    } else if (prefix >= 40) {
      score += 4;
    }

    return score;
  }

  function addAmazonVariantImageCandidate(candidates, url, score) {
    const normalizedUrl = normalizeProductImageUrl(url);

    if (!isLikelyProductImage(normalizedUrl)) {
      return;
    }

    candidates.push({
      url: normalizedUrl,
      score: score + getAmazonImageUrlQualityScore(normalizedUrl)
    });
  }

  function collectAmazonVariantImageCandidatesFromElement(element, value, asin, baseScore) {
    if (!element) {
      return [];
    }

    const candidates = [];
    const targets = [element];

    element.querySelectorAll?.(
      "img, source, [data-a-dynamic-image], [data-old-hires], [data-hires], [data-large-image], [data-zoom-hires], [style]"
    ).forEach((target) => {
      if (!targets.includes(target)) {
        targets.push(target);
      }
    });

    const rootMatchScore = getAmazonVariantImageMatchScore(
      getAmazonVariantImageContext(element),
      value,
      asin
    );

    targets.forEach((target) => {
      const targetMatchScore = getAmazonVariantImageMatchScore(
        getAmazonVariantImageContext(target),
        value,
        asin
      );
      const score = baseScore + Math.max(rootMatchScore, targetMatchScore);

      collectImageUrlsFromElement(target).forEach((url) => {
        addAmazonVariantImageCandidate(candidates, url, score);
      });
    });

    return candidates;
  }

  function getAmazonVariantImageLookupKeys(value, asin) {
    const keys = [];
    const cleanValue = cleanAmazonVariantValue(value);
    const shadeMatch = cleanValue.match(/#?\s*(\d{2,5})\s+([A-Za-z][\w.'-]+)/);

    if (asin) {
      keys.push({ value: cleanText(asin), score: 76 });
    }

    if (cleanValue.length >= 5) {
      keys.push({ value: cleanValue, score: 66 });
    }

    if (shadeMatch) {
      keys.push({ value: `#${shadeMatch[1]} ${shadeMatch[2]}`, score: 64 });
      keys.push({ value: `${shadeMatch[1]} ${shadeMatch[2]}`, score: 62 });
    }

    const seen = new Set();

    return keys.filter((item) => {
      const key = item.value.toLowerCase();

      if (!item.value || seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    });
  }

  function collectAmazonImagesNearText(anchorText) {
    const anchor = cleanText(anchorText);
    const cacheKey = anchor.toLowerCase();

    if (anchor.length < 4) {
      return [];
    }

    if (amazonVariantScriptImageCache.has(cacheKey)) {
      return amazonVariantScriptImageCache.get(cacheKey);
    }

    const urls = [];
    const needle = anchor.toLowerCase();

    getAmazonImageScriptTexts().forEach((scriptText) => {
      const lowerText = scriptText.toLowerCase();
      let index = lowerText.indexOf(needle);
      let matchCount = 0;

      while (index !== -1 && matchCount < 8 && urls.length < 40) {
        const start = Math.max(0, index - 2600);
        const end = Math.min(scriptText.length, index + needle.length + 2600);

        urls.push(...extractAmazonImageUrlsFromText(scriptText.slice(start, end)));
        index = lowerText.indexOf(needle, index + needle.length);
        matchCount += 1;
      }
    });

    const result = uniqueImages(urls).slice(0, 8).map((image) => image.url);

    amazonVariantScriptImageCache.set(cacheKey, result);
    return result;
  }

  function collectAmazonVariantImageCandidatesFromScripts(value, asin) {
    const candidates = [];

    getAmazonVariantImageLookupKeys(value, asin).forEach((lookup) => {
      collectAmazonImagesNearText(lookup.value).forEach((url, index) => {
        addAmazonVariantImageCandidate(candidates, url, lookup.score - index);
      });
    });

    return candidates;
  }

  function pickBestAmazonVariantImageUrl(candidates) {
    const seen = new Set();

    return candidates
      .sort((left, right) => right.score - left.score)
      .find((candidate) => {
        const key = getImageDedupKey(candidate.url);

        if (seen.has(key)) {
          return false;
        }

        seen.add(key);
        return true;
      })?.url || "";
  }

  function getAmazonVariantImageUrl(optionRoot, element, value, asin) {
    const candidates = [
      ...collectAmazonVariantImageCandidatesFromElement(optionRoot, value, asin, 44),
      ...collectAmazonVariantImageCandidatesFromElement(element, value, asin, 38),
      ...collectAmazonVariantImageCandidatesFromScripts(value, asin)
    ];

    return pickBestAmazonVariantImageUrl(candidates);
  }

  function getAmazonVariantText(element) {
    const image = element.querySelector?.("img");
    const linkedElement = element.querySelector?.("a[href]") || element.closest?.("a[href]");
    const attributeText = [
      element.getAttribute?.("aria-label"),
      element.getAttribute?.("title"),
      element.getAttribute?.("data-title"),
      element.getAttribute?.("data-value"),
      image?.getAttribute("alt"),
      image?.getAttribute("title"),
      linkedElement?.getAttribute("aria-label"),
      linkedElement?.getAttribute("title")
    ]
      .map(extractAmazonVariantValueFromText)
      .find((text) => text && !isBlockedAmazonVariantValue(text));

    if (attributeText) {
      return attributeText;
    }

    const text =
      element.querySelector?.(".a-button-text")?.innerText ||
      element.querySelector?.(".a-button-text")?.textContent ||
      element.querySelector?.(".swatch-title-text-display")?.innerText ||
      element.querySelector?.(".swatch-title-text-display")?.textContent ||
      element.getAttribute?.("title") ||
      element.getAttribute?.("aria-label") ||
      element.innerText ||
      element.textContent ||
      "";

    return extractAmazonVariantValueFromText(text);
  }

  function getAmazonVariantPriceInfo(element) {
    const text = cleanText(element?.innerText || element?.textContent || "");
    const priceValues = [
      ...collectMoneyValuesFromAttributes(element, [
        "data-price",
        "data-current-price",
        "data-sale-price",
        "data-a-price",
        "data-base-price"
      ]),
      ...collectMoneyValuesFromAttributes(element, [
        "data-price-cents",
        "data-current-price-cents",
        "data-sale-price-cents"
      ], true),
      ...collectMoneyValuesFromSelectors(element, [
        ".a-price .a-offscreen",
        ".a-color-price",
        "[data-price]",
        "[data-current-price]",
        "[data-sale-price]",
        "[class*='price'][class*='current']",
        "[class*='price'][class*='sale']"
      ]),
      ...extractLabeledMoneyValues(text, getCurrentPriceLabelPattern())
    ];
    const compareValues = [
      ...collectMoneyValuesFromAttributes(element, [
        "data-compare-at-price",
        "data-compare-price",
        "data-list-price",
        "data-original-price",
        "data-was-price"
      ]),
      ...collectMoneyValuesFromSelectors(element, [
        ".a-text-strike",
        "[data-a-strike='true'] .a-offscreen",
        "[data-compare-at-price]",
        "[data-compare-price]",
        "[data-list-price]",
        "[data-original-price]",
        "[data-was-price]",
        "s",
        "del"
      ]),
      ...extractLabeledMoneyValues(text, getComparePriceLabelPattern())
    ];

    return getPriceInfoFromMoneyValues(
      priceValues,
      compareValues,
      extractMoneyValues(text)
    );
  }

  function getAmazonVariantOptionRoot(element, group) {
    const root = element?.closest?.(
      [
        "li[data-defaultasin]",
        "li[data-asin]",
        "li[data-dp-url]",
        "li[id*='_name_']",
        "li[id*='_color_']",
        "li[id*='_size_']",
        "li.swatchAvailable",
        "li.swatchSelect",
        "li.swatchUnavailable",
        "[data-defaultasin]",
        "[data-asin]",
        "[data-dp-url]",
        "[data-csa-c-asin]",
        "[data-csa-c-item-id]",
        ".a-button",
        "button"
      ].join(", ")
    );

    return root && group?.contains?.(root) ? root : element;
  }

  function collectAmazonVariantOptions(group) {
    const optionSelectors = [
      "li[data-defaultasin]",
      "li[data-asin]",
      "li[data-dp-url]",
      "[data-defaultasin]",
      "[data-asin]",
      "[data-dp-url]",
      "[data-csa-c-asin]",
      "[data-csa-c-item-id]",
      "a[href*='/dp/']",
      "a[href*='/gp/product/']",
      "li[id*='_name_']",
      "li[id*='_color_']",
      "li[id*='_size_']",
      "li.swatchAvailable",
      "li.swatchSelect",
      "li.swatchUnavailable"
    ];
    let optionElements = [...group.querySelectorAll(optionSelectors.join(", "))];

    if (!optionElements.length) {
      optionElements = [...group.querySelectorAll(".a-button, button, option")];
    }

    const seen = new Set();
    const options = [];

    optionElements.forEach((element) => {
      const optionRoot = getAmazonVariantOptionRoot(element, group);
      const value = getAmazonVariantText(optionRoot);

      if (isBlockedAmazonVariantValue(value)) {
        return;
      }

      const asin = getAmazonVariantAsin(optionRoot) || getAmazonVariantAsin(element);
      const nextOption = {
        value,
        asin,
        imageUrl: getAmazonVariantImageUrl(optionRoot, element, value, asin),
        ...getAmazonVariantPriceInfo(optionRoot)
      };
      const key = getAmazonVariantOptionIdentity(nextOption);
      const existingOption = options.find(
        (option) => getAmazonVariantOptionIdentity(option) === key
      );

      if (!key) {
        return;
      }

      if (existingOption || seen.has(key)) {
        mergeAmazonVariantOption(existingOption, nextOption);
        return;
      }

      seen.add(key);
      options.push(nextOption);
    });

    return options;
  }

  function mergeAmazonVariantOption(targetOption, sourceOption) {
    if (!targetOption || !sourceOption) {
      return;
    }

    targetOption.asin = targetOption.asin || sourceOption.asin || "";
    targetOption.value = targetOption.value || sourceOption.value || "";
    targetOption.price = targetOption.price || sourceOption.price || "";
    targetOption.compareAtPrice =
      targetOption.compareAtPrice || sourceOption.compareAtPrice || "";

    if (
      sourceOption.imageUrl &&
      (
        !targetOption.imageUrl ||
        getAmazonImageUrlQualityScore(sourceOption.imageUrl) >
          getAmazonImageUrlQualityScore(targetOption.imageUrl)
      )
    ) {
      targetOption.imageUrl = sourceOption.imageUrl;
    }
  }

  function mergeAmazonVariantGroups(targetGroups, sourceGroups) {
    sourceGroups.forEach((sourceGroup) => {
      if (!sourceGroup?.options?.length) {
        return;
      }

      const labelKey = cleanAmazonVariantName(sourceGroup.label).toLowerCase();
      let targetGroup = targetGroups.find(
        (group) => cleanAmazonVariantName(group.label).toLowerCase() === labelKey
      );

      if (!targetGroup) {
        targetGroups.push({
          label: sourceGroup.label,
          options: [...sourceGroup.options]
        });
        return;
      }

      const seen = new Set(
        targetGroup.options.map((option) => getAmazonVariantOptionIdentity(option))
      );

      sourceGroup.options.forEach((option) => {
        const key = getAmazonVariantOptionIdentity(option);
        const existingOption = targetGroup.options.find(
          (targetOption) => getAmazonVariantOptionIdentity(targetOption) === key
        );

        if (existingOption) {
          mergeAmazonVariantOption(existingOption, option);
          return;
        }

        if (seen.has(key)) {
          return;
        }

        seen.add(key);
        targetGroup.options.push(option);
      });
    });

    return targetGroups;
  }

  function collectAmazonVariantGroupsFromCurrentPage() {
    const twister = document.querySelector("#twister_feature_div, #twister");

    if (!twister) {
      return [];
    }

    const groups = [];
    const seen = new Set();

    twister
      .querySelectorAll(
        "[id^='variation_'], [id^='inline-twister-row-'], [id*='variation'][class*='a-section']"
      )
      .forEach((group) => {
        const idLabel = cleanAmazonVariantName(
          group.id
            ?.replace(/^variation_/i, "")
            .replace(/^inline-twister-row-/i, "")
            .replace(/_name$/i, ""),
          `Option${groups.length + 1}`
        );
        const label = cleanAmazonVariantName(
          group.querySelector(".a-form-label, .dimension-heading, .dimension-text, label")
            ?.textContent,
          idLabel
        );
        const options = collectAmazonVariantOptions(group);
        const key = `${label}:${options.map((option) => option.value).join("|")}`.toLowerCase();

        if (
          options.length < 2 ||
          seen.has(key) ||
          /^(text|background|window)$/i.test(label)
        ) {
          return;
        }

        seen.add(key);
        groups.push({ label, options });
      });

    return groups.slice(0, 3);
  }

  function getAmazonVariantPageLinks() {
    const twister = document.querySelector("#twister_feature_div, #twister");

    if (!twister) {
      return [];
    }

    return Array.from(twister.querySelectorAll("a"))
      .map((link) => ({
        link,
        pageNumber: Number(cleanText(link.textContent))
      }))
      .filter((item) => Number.isInteger(item.pageNumber) && item.pageNumber > 0)
      .sort((left, right) => left.pageNumber - right.pageNumber);
  }

  function getAmazonSelectedVariantPageNumber() {
    const selectedLink = document.querySelector(
      "#twister_feature_div .a-selected, #twister .a-selected"
    );
    const selectedText = cleanText(selectedLink?.textContent);
    const selectedNumber = Number(selectedText);

    return Number.isInteger(selectedNumber) && selectedNumber > 0 ? selectedNumber : 1;
  }

  function getAmazonVariantPageLink(pageNumber) {
    return getAmazonVariantPageLinks().find((item) => item.pageNumber === pageNumber)?.link || null;
  }

  function queueAmazonVariantPageNumbers(pageQueue, queuedPageNumbers) {
    getAmazonVariantPageLinks().forEach((item) => {
      if (queuedPageNumbers.has(item.pageNumber)) {
        return;
      }

      queuedPageNumbers.add(item.pageNumber);
      pageQueue.push(item.pageNumber);
    });
  }

  async function collectAmazonVariantGroups(collectorOptions = {}) {
    const options = normalizeCollectorOptions(collectorOptions);
    const groups = collectAmazonVariantGroupsFromCurrentPage();

    if (!options.amazonFollowVariantPages) {
      return groups;
    }

    const pageLinks = getAmazonVariantPageLinks();

    if (pageLinks.length <= 1) {
      return groups;
    }

    const originalPage = getAmazonSelectedVariantPageNumber();
    const queuedPageNumbers = new Set();
    const visitedPageNumbers = new Set([originalPage]);
    const pageQueue = [];

    queueAmazonVariantPageNumbers(pageQueue, queuedPageNumbers);

    while (pageQueue.length) {
      const pageNumber = pageQueue.shift();

      if (pageNumber === getAmazonSelectedVariantPageNumber()) {
        continue;
      }

      if (visitedPageNumbers.has(pageNumber)) {
        continue;
      }

      const link = getAmazonVariantPageLink(pageNumber);

      if (!link) {
        continue;
      }

      visitedPageNumbers.add(pageNumber);
      link.click();
      await delay(450);
      mergeAmazonVariantGroups(
        groups,
        collectAmazonVariantGroupsFromCurrentPage()
      );
      queueAmazonVariantPageNumbers(pageQueue, queuedPageNumbers);
    }

    const originalLink = getAmazonVariantPageLink(originalPage);

    if (originalLink && originalPage !== getAmazonSelectedVariantPageNumber()) {
      originalLink.click();
      await delay(250);
    }

    return groups;
  }

  function buildAmazonVariants(groups, basePrice, baseCompareAtPrice, imageUrls) {
    if (!groups.length) {
      return [];
    }

    const usableGroups = groups;
    const variants = [];

    function visit(groupIndex, selected) {
      if (groupIndex >= usableGroups.length) {
        const priceOption = [...selected].reverse().find((option) => option.price);
        const compareOption = [...selected].reverse().find((option) => option.compareAtPrice);
        const imageOption = selected.find((option) => option.imageUrl);

        variants.push({
          sku: cleanText(selected.find((option) => option.asin)?.asin),
          barcode: "",
          option1Name: usableGroups[0]?.label || "Option",
          option1Value: selected[0]?.value || `Variant ${variants.length + 1}`,
          option2Name: usableGroups[1]?.label || "",
          option2Value: selected[1]?.value || "",
          option3Name: usableGroups[2]?.label || "",
          option3Value: selected[2]?.value || "",
          price: priceOption?.price || basePrice || "",
          compareAtPrice: compareOption?.compareAtPrice || baseCompareAtPrice || "",
          variantImageUrl: imageOption?.imageUrl || imageUrls[variants.length] || imageUrls[0] || ""
        });
        return;
      }

      usableGroups[groupIndex].options.forEach((option) => {
        visit(groupIndex + 1, [...selected, option]);
      });
    }

    visit(0, []);
    return variants;
  }

  async function collectAmazonVariants(basePrice, baseCompareAtPrice, imageUrls, collectorOptions = {}) {
    const options = normalizeCollectorOptions(collectorOptions);

    return buildAmazonVariants(
      await collectAmazonVariantGroups(options),
      basePrice,
      baseCompareAtPrice,
      imageUrls
    );
  }

  async function collectAmazonProduct(collectorOptions = {}) {
    if (!/amazon\./i.test(window.location.hostname)) {
      return {};
    }

    const title =
      queryText(["#productTitle", "#title #productTitle"]) ||
      sanitizeDocumentTitle(document.title);
    const featureBullets = queryText([
      "#feature-bullets",
      "#productOverview_feature_div",
      "#productDescription"
    ]);
    const imageUrls = [];

    [
      "#landingImage",
      "#imgTagWrapperId img",
      "#imageBlock img[data-a-dynamic-image]",
      "#altImages li.imageThumbnail:not(.videoThumbnail) img",
      "#ivImagesTab img",
      "#ivThumbs img",
      ".ivThumbImage",
      "#ivLargeImage img"
    ].forEach((selector) => {
      document
        .querySelectorAll(selector)
        .forEach((element) => imageUrls.push(...collectImageUrlsFromElement(element)));
    });
    imageUrls.push(...collectAmazonImagesFromScripts());
    const price = queryAmazonPrice();
    const compareAtPrice = queryAmazonCompareAtPrice();
    const variants = await collectAmazonVariants(price, compareAtPrice, imageUrls, collectorOptions);

    return {
      title,
      description: featureBullets,
      vendor: queryAmazonVendor(),
      sku: "",
      price,
      compareAtPrice,
      images: imageUrls,
      variants,
      imagePriority: "primary-gallery",
      source: "amazon"
    };
  }

  function getPlatformProductSignals(product) {
    return [
      product?.title,
      product?.price,
      product?.sku,
      product?.vendor,
      product?.description,
      ...(Array.isArray(product?.images) ? product.images : []),
      ...(Array.isArray(product?.variants) ? product.variants : [])
    ].filter(Boolean).length;
  }

  function collectLinkedImageUrls(selectors) {
    const urls = [];

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        urls.push(...collectImageUrlsFromElement(element));

        const href = element.getAttribute?.("href");

        if (href) {
          urls.push(href);
        }
      });
    });

    return urls;
  }

  function getOptionNameFromAttribute(attribute, index) {
    const label = cleanText(attribute)
      .replace(/^attribute_/i, "")
      .replace(/^pa_/i, "")
      .replace(/[_-]+/g, " ");

    return label
      ? label.replace(/\b\w/g, (match) => match.toUpperCase())
      : `Option${index + 1}`;
  }

  function parseJsonDataAttribute(element, attribute) {
    const rawValue = element?.getAttribute?.(attribute);

    if (!rawValue) {
      return null;
    }

    try {
      const textarea = document.createElement("textarea");
      textarea.innerHTML = rawValue;
      return JSON.parse(textarea.value);
    } catch (error) {
      return null;
    }
  }

  function collectWooCommerceVariants(basePrice, baseCompareAtPrice) {
    const form = document.querySelector("form.variations_form[data-product_variations]");
    const variations = parseJsonDataAttribute(form, "data-product_variations");

    if (!Array.isArray(variations)) {
      return [];
    }

    return variations
      .filter((variation) => variation && variation.is_purchasable !== false)
      .map((variation, index) => {
        const attributes = Object.entries(variation.attributes || {}).filter(([, value]) =>
          cleanText(value)
        );
        const imageUrl =
          variation.image?.full_src ||
          variation.image?.src ||
          variation.image?.gallery_thumbnail_src ||
          "";

        return {
          sku: cleanText(variation.sku),
          barcode: "",
          option1Name: attributes[0]
            ? getOptionNameFromAttribute(attributes[0][0], 0)
            : "Option",
          option1Value: cleanText(attributes[0]?.[1] || `Variant ${index + 1}`),
          option2Name: attributes[1] ? getOptionNameFromAttribute(attributes[1][0], 1) : "",
          option2Value: cleanText(attributes[1]?.[1]),
          option3Name: attributes[2] ? getOptionNameFromAttribute(attributes[2][0], 2) : "",
          option3Value: cleanText(attributes[2]?.[1]),
          price: normalizePrice(variation.display_price) || basePrice || "",
          compareAtPrice:
            normalizePrice(variation.display_regular_price) || baseCompareAtPrice || "",
          variantImageUrl: imageUrl
        };
      });
  }

  function collectWooCommerceProduct() {
    const isWooCommerce = Boolean(
      document.querySelector(
        [
          "body.single-product",
          ".woocommerce",
          ".product.type-product",
          "form.variations_form",
          ".woocommerce-product-gallery"
        ].join(", ")
      )
    );

    if (!isWooCommerce) {
      return {};
    }

    const price = normalizePrice(
      queryText([
        ".summary .price ins .woocommerce-Price-amount",
        ".summary .price .woocommerce-Price-amount",
        "p.price ins .amount",
        "p.price .amount",
        ".woocommerce-variation-price .amount"
      ])
    );
    const compareAtPrice = normalizePrice(
      queryText([
        ".summary .price del .woocommerce-Price-amount",
        "p.price del .amount",
        ".price del .amount"
      ])
    );
    const images = collectLinkedImageUrls([
      ".woocommerce-product-gallery__image a",
      ".woocommerce-product-gallery img",
      ".woocommerce-product-gallery picture source",
      ".flex-control-thumbs img"
    ]);

    return {
      title: queryText(["h1.product_title", ".product_title", "[itemprop='name']"]),
      description: queryText([
        ".woocommerce-product-details__short-description",
        "#tab-description",
        ".woocommerce-Tabs-panel--description",
        "[itemprop='description']"
      ]),
      vendor: queryText([
        ".product_meta .posted_in a",
        ".product_meta .tagged_as a",
        "[class*='brand'] a",
        "[class*='brand']"
      ]),
      sku: queryText([".product_meta .sku", ".sku", "[itemprop='sku']"]),
      price,
      compareAtPrice,
      images,
      variants: collectWooCommerceVariants(price, compareAtPrice),
      imagePriority: images.length ? "primary-gallery" : "",
      source: "woocommerce"
    };
  }

  function getEmbeddedJsonAfterMarker(text, marker) {
    const markerIndex = text.indexOf(marker);

    if (markerIndex < 0) {
      return null;
    }

    const start = text.indexOf("{", markerIndex);

    if (start < 0) {
      return null;
    }

    let depth = 0;
    let inString = false;
    let escapeNext = false;

    for (let index = start; index < text.length; index += 1) {
      const char = text[index];

      if (escapeNext) {
        escapeNext = false;
        continue;
      }

      if (char === "\\") {
        escapeNext = true;
        continue;
      }

      if (char === '"') {
        inString = !inString;
        continue;
      }

      if (inString) {
        continue;
      }

      if (char === "{") {
        depth += 1;
      } else if (char === "}") {
        depth -= 1;

        if (depth === 0) {
          try {
            return JSON.parse(text.slice(start, index + 1));
          } catch (error) {
            return null;
          }
        }
      }
    }

    return null;
  }

  function findObjectByKeys(value, keys, depth = 0) {
    if (!value || typeof value !== "object" || depth > 6) {
      return null;
    }

    if (keys.every((key) => key in value)) {
      return value;
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        const found = findObjectByKeys(item, keys, depth + 1);

        if (found) {
          return found;
        }
      }
      return null;
    }

    for (const item of Object.values(value)) {
      const found = findObjectByKeys(item, keys, depth + 1);

      if (found) {
        return found;
      }
    }

    return null;
  }

  function collectPlatformStateProduct(markers) {
    const scripts = Array.from(document.scripts || []);

    for (const script of scripts) {
      const text = script.textContent || "";

      for (const marker of markers) {
        const state = getEmbeddedJsonAfterMarker(text, marker);
        const product =
          findObjectByKeys(state, ["title", "variants"]) ||
          findObjectByKeys(state, ["name", "variants"]) ||
          findObjectByKeys(state, ["title", "images"]);

        if (product) {
          return product;
        }
      }
    }

    return null;
  }

  function normalizePlatformImages(rawImages) {
    if (!Array.isArray(rawImages)) {
      return normalizeImageValue(rawImages);
    }

    return rawImages.flatMap((image) =>
      normalizeImageValue(
        typeof image === "string"
          ? image
          : image?.src || image?.url || image?.origin_src || image?.cdnUrl || image?.image || ""
      )
    );
  }

  function collectCommerceCloudVariants(product, basePrice, baseCompareAtPrice) {
    const variants = Array.isArray(product?.variants)
      ? product.variants
      : Array.isArray(product?.variantList)
        ? product.variantList
        : [];

    return variants.map((variant, index) => {
      const options = [
        variant.option1 || variant.option1Value || variant.title,
        variant.option2 || variant.option2Value,
        variant.option3 || variant.option3Value
      ].map(cleanText);

      return {
        sku: cleanText(variant.sku || variant.sku_code || variant.code),
        barcode: cleanText(variant.barcode),
        option1Name: cleanText(product?.options?.[0]?.name || "Option"),
        option1Value: options[0] || `Variant ${index + 1}`,
        option2Name: options[1] ? cleanText(product?.options?.[1]?.name || "Option2") : "",
        option2Value: options[1],
        option3Name: options[2] ? cleanText(product?.options?.[2]?.name || "Option3") : "",
        option3Value: options[2],
        price: normalizePrice(variant.price || variant.price_amount) || basePrice || "",
        compareAtPrice:
          normalizePrice(variant.compare_at_price || variant.market_price || variant.compareAtPrice) ||
          baseCompareAtPrice ||
          "",
        variantImageUrl:
          normalizeImageValue(variant.image || variant.featured_image || variant.image_url)[0] || ""
      };
    });
  }

  function collectShoplineShoplazzaProduct() {
    const isCommerceCloud = Boolean(
      window.Shopline ||
        window.Shoplazza ||
        document.querySelector(
          [
            "[data-shopline]",
            "[data-shoplazza]",
            "[class*='shopline']",
            "[class*='shoplazza']",
            "shopline-product-info"
          ].join(", ")
        )
    );
    const stateProduct = collectPlatformStateProduct([
      "__INITIAL_STATE__",
      "__PRELOADED_STATE__",
      "__SHOPLINE_STATE__",
      "__SHOPLAZZA_STATE__"
    ]);

    if (!isCommerceCloud && !stateProduct) {
      return {};
    }

    const price = normalizePrice(
      stateProduct?.price ||
        stateProduct?.price_min ||
        queryText([
          "[data-product-price]",
          "[data-price]",
          ".product-price",
          ".product__price",
          ".price__current",
          "[class*='product'][class*='price']",
          "[class*='price']"
        ])
    );
    const compareAtPrice = normalizePrice(
      stateProduct?.compare_at_price ||
        stateProduct?.compareAtPrice ||
        stateProduct?.market_price ||
        queryText([
          ".compare-at-price",
          ".price__compare",
          ".product-price__compare",
          "[class*='compare'][class*='price']",
          "[class*='market'][class*='price']"
        ])
    );
    const primaryGallery = collectPrimaryGalleryImageUrls();
    const stateImages = normalizePlatformImages(stateProduct?.images || stateProduct?.media);
    const linkedImages = primaryGallery.urls.length
      ? primaryGallery.urls
      : collectLinkedImageUrls([
          "[class*='product'][class*='gallery'] img",
          "[class*='product'][class*='media'] img",
          "[class*='product'][class*='thumb'] img"
        ]);
    const images =
      primaryGallery.urls.length && stateImages.length > primaryGallery.urls.length * 3
        ? primaryGallery.urls
        : [...stateImages, ...linkedImages];

    return {
      title:
        cleanText(stateProduct?.title || stateProduct?.name) ||
        queryText([
          "[data-product-title]",
          ".product-title",
          ".product__title",
          "[class*='product'][class*='title']",
          "h1"
        ]),
      description:
        cleanText(stateProduct?.description || stateProduct?.body_html) ||
        queryText([
          "[data-product-description]",
          ".product-description",
          ".product__description",
          "[class*='product'][class*='description']",
          "#description"
        ]),
      vendor:
        cleanText(stateProduct?.vendor || stateProduct?.brand) ||
        queryText(["[class*='vendor']", "[class*='brand']"]),
      sku: cleanText(stateProduct?.sku),
      price,
      compareAtPrice,
      images,
      variants: collectCommerceCloudVariants(stateProduct || {}, price, compareAtPrice),
      imagePriority: primaryGallery.urls.length || images.length ? "primary-gallery" : "",
      source: window.Shoplazza || /shoplazza/i.test(document.documentElement.innerHTML)
        ? "shoplazza"
        : "shopline"
    };
  }

  async function collectPlatformProduct(collectorOptions = {}) {
    return [
      await collectAmazonProduct(collectorOptions),
      collectWooCommerceProduct(),
      collectShoplineShoplazzaProduct()
    ].find((product) => getPlatformProductSignals(product)) || {};
  }

  function collectSkuFromText() {
    const lines = String(document.body?.innerText || "")
      .split(/\r?\n/)
      .map(cleanText)
      .filter(Boolean)
      .slice(0, 1200);
    const stopWords = new Set(["name", "price", "title", "brand", "model"]);

    for (const line of lines) {
      const match = line.match(
        /^(?:SKU|Item\s*No\.?|Item\s*Number|Product\s*Code|Model(?:\s*No\.?)?)\s*[:#-]\s*([A-Z0-9._-]{3,})$/i
      );
      const value = cleanText(match?.[1]);

      if (value && !stopWords.has(value.toLowerCase())) {
        return value;
      }
    }

    return "";
  }

  function collectJsonLdProduct() {
    const products = getJsonLdObjects().flatMap((object) =>
      findJsonLdProducts(object)
    );
    const product = selectBestJsonLdProduct(products);

    if (!product) {
      return {};
    }

    const offer = getOffer(product);
    const price = getOfferPrice(offer);
    const images = normalizeImageValue(product.image);

    return {
      title: cleanText(product.name),
      description: cleanText(product.description),
      vendor: getBrandName(product.brand),
      sku: cleanText(product.sku || product.mpn),
      price: normalizePrice(price),
      currency: cleanText(getOfferCurrency(offer)),
      availability: cleanText(offer.availability),
      images,
      variants: collectJsonLdVariants(product),
      source: "json-ld"
    };
  }

  function collectMetaProduct() {
    return {
      title: getMetaContent([
        'meta[property="og:title"]',
        'meta[name="twitter:title"]'
      ]),
      description: getMetaContent([
        'meta[property="og:description"]',
        'meta[name="description"]',
        'meta[name="twitter:description"]'
      ]),
      images: normalizeImageValue(
        getMetaContents([
          'meta[property="og:image"]',
          'meta[property="og:image:secure_url"]',
          'meta[name="twitter:image"]'
        ])
      ),
      source: "meta"
    };
  }

  function collectDomProduct() {
    const priceText =
      queryAttribute(
        [
          "[data-price]",
          "[data-product-price]",
          "[data-current-price]",
          "[data-sale-price]",
          "[data-price-amount]",
          "[data-testid*='price']",
          "[data-test*='price']",
          "[itemprop='price']"
        ],
        "content"
      ) ||
      queryAttribute(
        [
          "[data-price]",
          "[data-product-price]",
          "[data-current-price]",
          "[data-sale-price]",
          "[data-price-amount]"
        ],
        "data-price"
      ) ||
      queryAttribute(["[data-product-price]"], "data-product-price") ||
      queryAttribute(["[data-current-price]"], "data-current-price") ||
      queryAttribute(["[data-sale-price]"], "data-sale-price") ||
      queryAttribute(["[data-price-amount]"], "data-price-amount") ||
      queryText([
        "[itemprop='price']",
        "[data-testid*='price']",
        "[data-test*='price']",
        "[aria-label*='price' i]",
        "[class*='product'][class*='price']",
        "[class*='price'][class*='current']",
        "[class*='sale'][class*='price']",
        "[class*='price__regular']",
        "[class*='price__sale']",
        "[class*='money']",
        "[class*='price']",
        "[id*='price']"
      ]);

    const primaryGallery = collectPrimaryGalleryImageUrls();
    const imageUrls = primaryGallery.urls.length
      ? primaryGallery.urls
      : collectFallbackDomImageUrls();

    const titleCandidates = [
      queryText([
        "#productTitle",
        "[data-testid='product-title']",
        "[data-testid*='product'][data-testid*='title']",
        "[data-test='product-title']",
        "[data-test*='product'][data-test*='title']",
        "[itemprop='name']",
        "h1[itemprop='name']",
        "[class*='product-title']",
        "[class*='product'][class*='title']",
        "[id*='product-title']"
      ]),
      sanitizeDocumentTitle(document.title),
      queryText(["h1"])
    ];
    const title = titleCandidates.find((value) => !isWeakTitle(value)) || "";
    const compareAtText =
      queryAttribute(["[data-compare-at-price]"], "data-compare-at-price") ||
      queryAttribute(["[data-was-price]"], "data-was-price") ||
      queryAttribute(["[data-original-price]"], "data-original-price") ||
      queryText([
        "[class*='compare'][class*='price']",
        "[class*='original'][class*='price']",
        "[class*='regular'][class*='price']",
        "[class*='was'][class*='price']",
        "[class*='list'][class*='price']",
        "[class*='compare-at']",
        "[data-compare-at-price]",
        "[data-was-price]",
        "[data-original-price]"
      ]);

    return {
      title,
      description: queryText([
        "[itemprop='description']",
        "[data-testid*='description']",
        "[data-test*='description']",
        "#feature-bullets",
        "#productDescription",
        "#description",
        "[class*='product-description']",
        "[class*='description'][class*='product']",
        "[id*='description']",
        "[class*='description']"
      ]),
      price: normalizePrice(priceText),
      compareAtPrice: normalizePrice(compareAtText),
      sku: collectSkuFromText(),
      images: imageUrls,
      variants: /amazon\./i.test(window.location.hostname) ? [] : collectDomVariants(),
      imagePriority: primaryGallery.urls.length ? "primary-gallery" : "",
      imageSourceSelector: primaryGallery.selector,
      source: "dom"
    };
  }

  function isDefaultOnlyVariantList(variants) {
    return (
      variants.length === 1 &&
      /^default title$/i.test(cleanText(variants[0]?.option1Name)) &&
      /^default title$/i.test(cleanText(variants[0]?.option1Value))
    );
  }

  function getUsefulVariants(...sources) {
    const variantGroups = sources
      .map((source) =>
        Array.isArray(source?.variants)
          ? source.variants.filter((variant) => variant && typeof variant === "object")
          : []
      )
      .filter((variants) => variants.length);
    const meaningfulGroup = variantGroups.find(
      (variants) => !isDefaultOnlyVariantList(variants)
    );

    return meaningfulGroup || variantGroups[0] || [];
  }

  function normalizeCollectedVariant(variant, index, baseSku, basePrice, baseCompareAtPrice, images) {
    return {
      sku: cleanText(variant.sku || (index === 0 ? baseSku : "")),
      barcode: cleanText(variant.barcode),
      option1Name: cleanText(variant.option1Name || "Option"),
      option1Value: cleanText(variant.option1Value || `Variant ${index + 1}`),
      option2Name: cleanText(variant.option2Name),
      option2Value: cleanText(variant.option2Value),
      option3Name: cleanText(variant.option3Name),
      option3Value: cleanText(variant.option3Value),
      price: normalizePrice(variant.price || basePrice),
      compareAtPrice: normalizePrice(variant.compareAtPrice || baseCompareAtPrice),
      variantImageUrl:
        normalizeProductImageUrl(variant.variantImageUrl) ||
        images[index]?.url ||
        images[0]?.url ||
        ""
    };
  }

  function shouldPreferShopifyApi(shopify = {}) {
    return shopify.source === "shopify-api" && getPlatformProductSignals(shopify) > 0;
  }

  function pickProductField(sources, field) {
    for (const source of sources) {
      const value = source?.[field];

      if (Array.isArray(value) ? value.length : cleanText(value)) {
        return value;
      }
    }

    return "";
  }

  function getAutomaticImageSources(preferShopifyApi, jsonLd, meta, dom, shopify, siteRule) {
    if (preferShopifyApi) {
      return shopify.images?.length
        ? [shopify]
        : [siteRule, jsonLd, meta, dom];
    }

    if (dom.imagePriority === "primary-gallery" && dom.images?.length >= 2) {
      return [dom, siteRule];
    }

    if (siteRule.imagePriority === "site-rule") {
      return [siteRule, jsonLd, shopify, meta, dom];
    }

    if (dom.imagePriority === "primary-gallery") {
      return [dom, siteRule, jsonLd, shopify, meta];
    }

    return [jsonLd, shopify, meta, siteRule, dom];
  }

  function mergeProductData(jsonLd, meta, dom, shopify = {}, siteRule = {}) {
    const preferShopifyApi = shouldPreferShopifyApi(shopify);
    const fieldSources = preferShopifyApi
      ? [shopify, siteRule, jsonLd, meta, dom]
      : [siteRule, jsonLd, shopify, meta, dom];
    const descriptionSources = preferShopifyApi
      ? [shopify, siteRule, jsonLd, dom, meta]
      : [siteRule, jsonLd, shopify, dom, meta];
    const merchandisingSources = preferShopifyApi
      ? [shopify, siteRule, jsonLd, dom]
      : [siteRule, jsonLd, shopify, dom];
    const title =
      pickProductField(fieldSources, "title") ||
      sanitizeDocumentTitle(document.title) ||
      "";
    const description =
      pickProductField(descriptionSources, "description") ||
      "";
    const automaticImageSources = getAutomaticImageSources(
      preferShopifyApi,
      jsonLd,
      meta,
      dom,
      shopify,
      siteRule
    );
    const imageSourceGroups =
      dom.imagePriority === "manual"
        ? [dom, ...automaticImageSources]
        : automaticImageSources;
    const images = uniqueImages(
      imageSourceGroups.flatMap((source) => source.images || [])
    ).map((image) => ({
      ...image,
      altText: image.altText || title
    }));
    const baseSku = pickProductField(merchandisingSources, "sku");
    const basePrice = pickProductField(merchandisingSources, "price");
    const baseCompareAtPrice =
      pickProductField(merchandisingSources, "compareAtPrice");
    const variantSources = preferShopifyApi
      ? [shopify, siteRule, jsonLd, dom]
      : [siteRule, shopify, jsonLd, dom];
    const collectedVariants = getUsefulVariants(...variantSources);
    const variants = collectedVariants.length
      ? collectedVariants.map((variant, index) =>
          normalizeCollectedVariant(
            variant,
            index,
            baseSku,
            basePrice,
            baseCompareAtPrice,
            images
          )
        )
      : [
          {
            sku: baseSku,
            barcode: "",
            option1Name: "Default Title",
            option1Value: "Default Title",
            option2Name: "",
            option2Value: "",
            option3Name: "",
            option3Value: "",
            price: basePrice,
            compareAtPrice: baseCompareAtPrice,
            variantImageUrl: images[0]?.url || ""
          }
        ];

    const rawSourcePriority = preferShopifyApi
      ? [shopify.source, siteRule.source, jsonLd.source, meta.source, dom.source]
      : [siteRule.source, shopify.source, jsonLd.source, meta.source, dom.source];
    const sourcePriority = rawSourcePriority.filter(
      (source) => {
        if (source === "custom-rule" || source === "site-rule") {
          return Boolean(
            siteRule.title ||
              siteRule.description ||
              siteRule.price ||
              siteRule.vendor ||
              siteRule.sku ||
              siteRule.images?.length ||
              siteRule.variants?.length
          );
        }

        if (source === "json-ld") {
          return Boolean(jsonLd.title || jsonLd.price || jsonLd.images?.length);
        }

        if (source === "shopify" || source === "shopify-api") {
          return Boolean(shopify.title || shopify.price || shopify.variants?.length);
        }

        if (source === "amazon") {
          return Boolean(dom.title || dom.price || dom.images?.length);
        }

        if (source === "manual") {
          return Boolean(dom.images?.length);
        }

        if (source === "meta") {
          return Boolean(meta.title || meta.images?.length);
        }

        return Boolean(dom.title || dom.price || dom.images?.length);
      }
    );

    return {
      title,
      handle: generateHandle(title),
      description,
      vendor: pickProductField(merchandisingSources, "vendor"),
      productCategory: "",
      type: shopify.type || "",
      tags: shopify.tags || "",
      status: "active",
      published: "false",
      sku: baseSku,
      barcode: "",
      price: basePrice,
      compareAtPrice: baseCompareAtPrice,
      costPerItem: "",
      chargeTax: "true",
      inventoryTracker: "",
      inventoryQuantity: "0",
      continueSellingWhenOutOfStock: "deny",
      weightValueGrams: "0",
      weightUnitForDisplay: "kg",
      requiresShipping: "true",
      fulfillmentService: "manual",
      images,
      variants,
      seoTitle: title,
      seoDescription: description.slice(0, 320),
      currency: jsonLd.currency || "",
      availability: jsonLd.availability || "",
      source: dom.source === "amazon" && !siteRule.source ? "amazon" : sourcePriority[0] || "fallback",
      imageSourceSelector: dom.imageSourceSelector || "",
      imageCollectionMode: dom.imageCollectionMode || "auto",
      manualImageCount: dom.manualImageCount || 0,
      manualImageNodeCount: dom.manualImageNodeCount || 0,
      page: getPageInfo()
    };
  }

  async function collectProduct(collectorOptions = {}) {
    const jsonLd = collectJsonLdProduct();
    const shopify = await collectShopifyProduct();
    const meta = collectMetaProduct();
    const storedSiteRule = await readStoredSiteRule();
    const siteRule = collectSiteRuleProduct(storedSiteRule, "custom-rule");
    const storedImageSelector = await readStoredImageSelector();
    const manualImageInfo = inspectImagesFromSelector(storedImageSelector);
    const manualImages = manualImageInfo.urls;
    const platform = await collectPlatformProduct(collectorOptions);
    const dom = {
      ...collectDomProduct(),
      ...Object.fromEntries(
        Object.entries(platform).filter(([, value]) =>
          Array.isArray(value) ? value.length : Boolean(value)
        )
      )
    };

    if (storedImageSelector) {
      dom.imageSourceSelector = storedImageSelector;
      dom.imageCollectionMode = "manual";
      dom.manualImageCount = manualImageInfo.urlCount;
      dom.manualImageNodeCount = manualImageInfo.nodeCount;
      dom.images = manualImages;
      dom.imagePriority = "manual";

      if (manualImages.length) {
        dom.source = "manual";
      }
    }

    return mergeProductData(jsonLd, meta, dom, shopify, siteRule);
  }

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (!message) {
      return false;
    }

    if (message.type === "SPC_GET_PAGE_INFO") {
      sendResponse({
        ok: true,
        data: getPageInfo()
      });

      return true;
    }

    if (message.type === "SPC_COLLECT_PRODUCT") {
      collectProduct(message.options || {})
        .then((product) => {
          sendResponse({
            ok: true,
            data: product
          });
        })
        .catch((error) => {
          sendResponse({
            ok: false,
            error: error.message || "商品采集失败"
          });
        });

      return true;
    }

    if (message.type === "SPC_DISCOVER_PRODUCT_URLS") {
      try {
        sendResponse({
          ok: true,
          data: discoverProductUrls()
        });
      } catch (error) {
        sendResponse({
          ok: false,
          error: error.message || "发现商品链接失败"
        });
      }

      return true;
    }

    if (message.type === "SPC_GET_SITE_RULE") {
      readStoredSiteRule()
        .then((rule) => {
          sendResponse({
            ok: true,
            data: {
              domain: window.location.hostname,
              rule: normalizeSiteRule(rule || {})
            }
          });
        })
        .catch((error) => {
          sendResponse({
            ok: false,
            error: error.message || "读取站点规则失败"
          });
        });

      return true;
    }

    if (message.type === "SPC_SAVE_SITE_RULE") {
      saveStoredSiteRule(message.rule)
        .then(() => {
          sendResponse({
            ok: true,
            data: {
              domain: window.location.hostname,
              rule: normalizeSiteRule(message.rule)
            }
          });
        })
        .catch((error) => {
          sendResponse({
            ok: false,
            error: error.message || "保存站点规则失败"
          });
        });

      return true;
    }

    if (message.type === "SPC_CLEAR_SITE_RULE") {
      clearStoredSiteRule()
        .then(() => {
          sendResponse({
            ok: true,
            data: {
              domain: window.location.hostname
            }
          });
        })
        .catch((error) => {
          sendResponse({
            ok: false,
            error: error.message || "清除站点规则失败"
          });
        });

      return true;
    }

    if (message.type === "SPC_TEST_SITE_RULE") {
      try {
        sendResponse({
          ok: true,
          data: testSiteRule(message.rule)
        });
      } catch (error) {
        sendResponse({
          ok: false,
          error: error.message || "站点规则测试失败"
        });
      }

      return true;
    }

    if (message.type === "SPC_START_SITE_RULE_PICKER") {
      try {
        startSiteRulePicker(message.field);
        sendResponse({
          ok: true
        });
      } catch (error) {
        sendResponse({
          ok: false,
          error: error.message || "启动站点规则选择失败"
        });
      }

      return true;
    }

    if (message.type === "SPC_START_IMAGE_PICKER") {
      startImageAreaPicker();
      sendResponse({
        ok: true
      });

      return true;
    }

    if (message.type === "SPC_GET_IMAGE_PICKER_STATUS") {
      readStoredImageSelector()
        .then((selector) => {
          const imageInfo = inspectImagesFromSelector(selector);

          sendResponse({
            ok: true,
            data: {
              selector,
              hostname: window.location.hostname,
              pageUrl: window.location.href,
              nodeCount: imageInfo.nodeCount,
              urlCount: imageInfo.urlCount,
              imageCount: imageInfo.urlCount,
              urls: imageInfo.urls
            }
          });
        })
        .catch((error) => {
          sendResponse({
            ok: false,
            error: error.message || "读取图片区域状态失败"
          });
        });

      return true;
    }

    if (message.type === "SPC_CLEAR_IMAGE_PICKER") {
      clearStoredImageSelector()
        .then(() => {
          sendResponse({
            ok: true
          });
        })
        .catch((error) => {
          sendResponse({
            ok: false,
            error: error.message || "清除图片区域失败"
          });
        });

      return true;
    }

    return false;
  });
})();
