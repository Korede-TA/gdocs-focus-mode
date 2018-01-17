// I'm basically just plugging some CSS into the page when the Icon is clicked 
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
	 file: 'focus.css',
  });
});
