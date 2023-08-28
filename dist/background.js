chrome.storage.sync.get('blockedUrls', function(result) {
    const blockedUrls = result.blockedUrls;
    console.log('Blocked URLs:', blockedUrls);
  });
  
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'block') {
      const urlToBlock = request.url;
  
      // Create a blocking rule
      const rule = {
        id: Math.floor(Math.random() * 100000),
        priority: 1,
        action: {
          type: "block"
        },
        condition: {
          urlFilter: `*://${urlToBlock}/*`
        }
      };
  
      // Add the rule using declarativeNetRequest
      chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [rule],
        removeRuleIds: []
      }, function(result) {
        if (chrome.runtime.lastError) {
          console.error("Error adding rule: ", chrome.runtime.lastError);
          sendResponse({ message: "Error adding rule" });
        } else {
          console.log("Rule added successfully");
          sendResponse({ message: "Rule added successfully" });
        }
      });
    }
});  