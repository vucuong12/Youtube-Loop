// Called when the user clicks on the icon.
var currentNumber = 0;
var bkg = chrome.extension.getBackgroundPage();
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo){
	if (changeInfo.status === "complete")
	chrome.browserAction.setBadgeText({ text: currentNumber % 2 === 1? 'On' : 'Off' , tabId: tabId});
	bkg.console.log(changeInfo.status);
})

chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    
    //change icon everytime use clicks on the icon
    ++currentNumber;
    chrome.browserAction.setIcon({path:"icon0.png"});
    chrome.browserAction.setBadgeText({ text: currentNumber % 2 === 1? 'On' : 'Off' , tabId: activeTab.id})
    chrome.tabs.sendMessage(activeTab.id, 
    	{
    		"message": "clicked_browser_action", 
    		"status": currentNumber % 2,
    		"url": activeTab.url
    	});
  });
});
