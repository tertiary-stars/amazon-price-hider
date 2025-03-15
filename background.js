chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.hidePrices !== undefined) {
        chrome.storage.sync.set({ hidePrices: message.hidePrices });
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]?.id) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: (hide) => {
                        localStorage.setItem("hidePrices", hide);
                        location.reload();
                    },
                    args: [message.hidePrices]
                });
            }
        });
    }
});
