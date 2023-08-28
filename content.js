chrome.storage.sync.get({ blockedUrls: [] }, function(result) {
  const blockedUrls = result.blockedUrls;
  const currentUrl = window.location.href;

  if (blockedUrls.includes(currentUrl)) {
    const blockPrompt = `
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: black; color: white; display: flex; justify-content: center; align-items: center; font-size: 24px; z-index: 9999;">
        This page has been blocked by an Blocktivity.<br>
      </div>
    `;

    const promptDiv = document.createElement('div');
    promptDiv.innerHTML = blockPrompt;

    document.body.appendChild(promptDiv);
  }
});