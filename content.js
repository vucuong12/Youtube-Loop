//listen to message from background
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(request);
		console.log(request.url.indexOf('youtube.com'));
		if( request.message === "clicked_browser_action" ) {
			if (request.url.indexOf('youtube.com') == -1) return;
			var html5Video = $(".video-stream"); // select the video

			if (request.status == "0")  
				html5Video.attr("loop", false);   //turn off the loop
			else
				html5Video.attr("loop", true);	  //turn on the loop
		}
	}
);