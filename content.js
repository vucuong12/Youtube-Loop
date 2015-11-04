//listen to message from background
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message === "clicked_browser_action" ) {
			var html5Video = $(".video-stream"); // select the video
			if (html5Video.attr("loop") == "loop")  
				html5Video.attr("loop", false);   //turn off the loop
			else
				html5Video.attr("loop", true);	  //turn on the loop
		}
	}
);