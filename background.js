chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [
    {
      "id": 1,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "*://*.doubleclick.net/*",
        "resourceTypes": ["script", "xmlhttprequest", "sub_frame", "image"]
      }
    }
  ],
  removeRuleIds: [1]
});
