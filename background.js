import { v4 as uuidv4 } from 'uuid';

const ruleId = uuidv4();


// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'block') {
    const urlToBlock = request.url;

    // Define the new rule for blocking the specified URL
    const newRule = {
      "id":ruleId, // Use the counter as the rule ID and increment
      "priority": 1,
      "action": {
        "type": "block"
      },
      "condition": {
        "urlFilter": urlToBlock
      }
    };

    // Add the new rule to declarativeNetRequest
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [newRule],
      removeRuleIds: [] // No rules to remove
    }, function(result) {
      if (chrome.runtime.lastError) {
        console.error("Error adding rule: ", chrome.runtime.lastError);
        sendResponse({ message: "Error adding rule" });
      } else {
        console.log("Rule added successfully");
        sendResponse({ message: "Rule added successfully" });

        chrome.storage.local.set({ 'ruleCounter': ruleId });
      }
    });
  }
});