document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");

    // Load the saved toggle state
    chrome.storage.sync.get("hidePrices", (data) => {
        toggle.checked = data.hidePrices ?? true;
    });

    // Listen for toggle changes
    toggle.addEventListener("change", () => {
        chrome.storage.sync.set({ hidePrices: toggle.checked });
        chrome.runtime.sendMessage({ hidePrices: toggle.checked });
    });
});
