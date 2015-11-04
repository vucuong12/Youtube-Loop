// Called when the user clicks on the icon.
var currentNumber = 1;
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    //change icon everytime use clicks on the icon
    chrome.browserAction.setIcon({path:"icon" + (++currentNumber % 2) + ".png"});
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});
