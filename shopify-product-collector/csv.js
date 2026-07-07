(function initializeCsvModule() {
  const SHOPIFY_CSV_HEADERS = [
    "Title",
    "URL handle",
    "Description",
    "Vendor",
    "Product category",
    "Type",
    "Tags",
    "Published on online store",
    "Status",
    "SKU",
    "Barcode",
    "Option1 name",
    "Option1 value",
    "Option2 name",
    "Option2 value",
    "Option3 name",
    "Option3 value",
    "Price",
    "Compare-at price",
    "Cost per item",
    "Charge tax",
    "Inventory tracker",
    "Inventory quantity",
    "Continue selling when out of stock",
    "Weight value (grams)",
    "Weight unit for display",
    "Requires shipping",
    "Fulfillment service",
    "Product image URL",
    "Image position",
    "Image alt text",
    "Variant image URL",
    "Gift card",
    "SEO title",
    "SEO description"
  ];

  function cleanValue(value) {
    return value == null ? "" : String(value);
  }

  function escapeCsvField(value) {
    const text = cleanValue(value);

    if (/[",\r\n]/.test(text)) {
      return `"${text.replace(/"/g, '""')}"`;
    }

    return text;
  }

  function normalizeImages(images) {
    return (Array.isArray(images) ? images : [])
      .filter((image) => cleanValue(image.url).trim())
      .map((image, index) => ({
        url: cleanValue(image.url).trim(),
        position: index + 1,
        altText: cleanValue(image.altText).trim()
      }));
  }

  function getVariantImageUrl(variant) {
    const rawUrl = cleanValue(variant.variantImageUrl).trim();

    if (!rawUrl) {
      return "";
    }

    return rawUrl;
  }

  function normalizeVariants(product) {
    const sourceVariants = Array.isArray(product.variants) && product.variants.length
      ? product.variants
      : [{}];
    const variants = sourceVariants.filter((variant) => !variant.excludedFromExport);

    return variants.map((variant, index) => ({
      sku: cleanValue(variant.sku || (variants.length === 1 ? product.sku : "")),
      barcode: cleanValue(variant.barcode || (variants.length === 1 ? product.barcode : "")),
      option1Name: cleanValue(
        variant.option1Name || (variants.length === 1 ? "Default Title" : "Option")
      ),
      option1Value: cleanValue(
        variant.option1Value || (variants.length === 1 ? "Default Title" : `Variant ${index + 1}`)
      ),
      option2Name: cleanValue(variant.option2Name),
      option2Value: cleanValue(variant.option2Value),
      option3Name: cleanValue(variant.option3Name),
      option3Value: cleanValue(variant.option3Value),
      price: cleanValue(variant.price || product.price || "0.00"),
      compareAtPrice: cleanValue(variant.compareAtPrice || product.compareAtPrice),
      variantImageUrl: getVariantImageUrl(variant)
    }));
  }

  function rowFromObject(rowObject) {
    return SHOPIFY_CSV_HEADERS.map((header) => escapeCsvField(rowObject[header]));
  }

  function productToRows(product) {
    const images = normalizeImages(product.images);
    const firstImage = images[0] || {};
    const variants = normalizeVariants(product);
    const handle = cleanValue(product.handle);
    const title = cleanValue(product.title);
    const description = cleanValue(product.description);
    const rows = [];

    if (!variants.length) {
      return rows;
    }

    variants.forEach((variant, index) => {
      const isMainRow = index === 0;

      rows.push(
        rowFromObject({
          Title: isMainRow ? title : "",
          "URL handle": handle,
          Description: isMainRow ? description : "",
          Vendor: isMainRow ? cleanValue(product.vendor) : "",
          "Product category": isMainRow ? cleanValue(product.productCategory) : "",
          Type: isMainRow ? cleanValue(product.type) : "",
          Tags: isMainRow ? cleanValue(product.tags) : "",
          "Published on online store": isMainRow
            ? cleanValue(product.published || "false")
            : "",
          Status: isMainRow ? cleanValue(product.status || "active") : "",
          SKU: variant.sku,
          Barcode: variant.barcode,
          "Option1 name": variant.option1Name || "Default Title",
          "Option1 value": variant.option1Value || "Default Title",
          "Option2 name": variant.option2Name,
          "Option2 value": variant.option2Value,
          "Option3 name": variant.option3Name,
          "Option3 value": variant.option3Value,
          Price: variant.price,
          "Compare-at price": variant.compareAtPrice,
          "Cost per item": cleanValue(product.costPerItem),
          "Charge tax": cleanValue(product.chargeTax || "true"),
          "Inventory tracker": cleanValue(product.inventoryTracker),
          "Inventory quantity": cleanValue(product.inventoryQuantity || "0"),
          "Continue selling when out of stock": cleanValue(
            product.continueSellingWhenOutOfStock || "deny"
          ),
          "Weight value (grams)": cleanValue(product.weightValueGrams || "0"),
          "Weight unit for display": cleanValue(product.weightUnitForDisplay || "kg"),
          "Requires shipping": cleanValue(product.requiresShipping || "true"),
          "Fulfillment service": cleanValue(product.fulfillmentService || "manual"),
          "Product image URL": isMainRow ? cleanValue(firstImage.url) : "",
          "Image position": isMainRow ? cleanValue(firstImage.position) : "",
          "Image alt text": isMainRow ? cleanValue(firstImage.altText || title) : "",
          "Variant image URL": variant.variantImageUrl,
          "Gift card": isMainRow ? "false" : "",
          "SEO title": isMainRow ? cleanValue(product.seoTitle || title) : "",
          "SEO description": isMainRow
            ? cleanValue(product.seoDescription || description)
            : ""
        })
      );
    });

    images.slice(1).forEach((image) => {
      rows.push(
        rowFromObject({
          "URL handle": handle,
          "Product image URL": image.url,
          "Image position": image.position,
          "Image alt text": image.altText || title
        })
      );
    });

    return rows;
  }

  function productToCsv(product) {
    const lines = [
      SHOPIFY_CSV_HEADERS.map(escapeCsvField).join(","),
      ...productToRows(product).map((row) => row.join(","))
    ];

    return `\uFEFF${lines.join("\r\n")}`;
  }

  function productsToCsv(products) {
    const productList = (Array.isArray(products) ? products : []).filter(Boolean);
    const lines = [
      SHOPIFY_CSV_HEADERS.map(escapeCsvField).join(","),
      ...productList.flatMap((product) => productToRows(product).map((row) => row.join(",")))
    ];

    return `\uFEFF${lines.join("\r\n")}`;
  }

  function getFileName(product) {
    const handle = cleanValue(product.handle)
      .trim()
      .replace(/[^a-zA-Z0-9._-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return `${handle || "shopify-product"}.csv`;
  }

  function downloadCsv(csvContent, fileName) {
    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();

    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function downloadProductCsv(product) {
    const csvContent = productToCsv(product);
    const fileName = getFileName(product);

    downloadCsv(csvContent, fileName);

    return {
      fileName,
      rowCount: productToRows(product).length
    };
  }

  function downloadProductsCsv(products, fileName = "shopify-products-batch.csv") {
    const productList = (Array.isArray(products) ? products : []).filter(Boolean);
    const csvContent = productsToCsv(productList);
    const rowCount = productList.reduce(
      (total, product) => total + productToRows(product).length,
      0
    );

    downloadCsv(csvContent, fileName);

    return {
      fileName,
      productCount: productList.length,
      rowCount
    };
  }

  window.ShopifyProductCollectorCsv = {
    version: "1.0.0",
    isReady: true,
    headers: SHOPIFY_CSV_HEADERS,
    escapeCsvField,
    productToRows,
    productToCsv,
    productsToCsv,
    getFileName,
    downloadProductCsv,
    downloadProductsCsv
  };
})();
