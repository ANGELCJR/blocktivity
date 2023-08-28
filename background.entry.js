import { v4 as uuidv4 } from 'uuid';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'block') {
    const urlToBlock = request.url;

    const ruleId = uuidv4();

    const newRule = {
      "id": ruleId,
      "priority": 1,
      "action": {
        "type": "block"
      },
      "condition": {
        "urlFilter": urlToBlock
      }
    };

    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [newRule],
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
