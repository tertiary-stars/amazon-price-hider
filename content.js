function hidePrices() {
    const priceSelectors = [
        ".a-price",
        ".a-size-base.a-color-price",
        "[id^='price']",
        "[class*='price']"
    ];
    
    priceSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.style.visibility = "hidden";
        });
    });
}

chrome.storage.sync.get("hidePrices", (data) => {
    if (data.hidePrices) {
        hidePrices();
        new MutationObserver(hidePrices).observe(document.body, { childList: true, subtree: true });
    }
});
