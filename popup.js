document.addEventListener('DOMContentLoaded', function() {
  const blockButton = document.getElementById('blockButton');
  const urlInput = document.getElementById('urlInput');

  blockButton.addEventListener('click', function() {
    const urlToBlock = urlInput.value.trim();

    // Fetch existing blocked URLs from storage
    chrome.storage.sync.get({ blockedUrls: [] }, function(result) {
      const blockedUrls = result.blockedUrls;
      
      // Add the new URL to blockedUrls
      blockedUrls.push(urlToBlock);
      
      // Store the updated blockedUrls back in storage
      chrome.storage.sync.set({ blockedUrls }, function() {
        console.log('URL blocked and stored in chrome.storage');
      });
    });
  });
});
