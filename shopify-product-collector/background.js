function enableActionSidePanel() {
  if (!chrome.sidePanel?.setPanelBehavior) {
    return;
  }

  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch(() => {});
}

function openCollectorPanel(sender) {
  const tabId = sender?.tab?.id;

  if (chrome.sidePanel?.open && tabId) {
    return chrome.sidePanel.open({ tabId });
  }

  if (chrome.action?.openPopup) {
    return chrome.action.openPopup();
  }

  return Promise.reject(new Error("Side panel API is not available."));
}

enableActionSidePanel();
chrome.runtime.onInstalled.addListener(enableActionSidePanel);
chrome.runtime.onStartup.addListener(enableActionSidePanel);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type !== "SPC_OPEN_POPUP_AFTER_PICK") {
    return false;
  }

  openCollectorPanel(sender)
    .then(() => {
      sendResponse({ ok: true });
    })
    .catch((error) => {
      sendResponse({
        ok: false,
        error: error?.message || "Unable to reopen collector panel."
      });
    });

  return true;
});
