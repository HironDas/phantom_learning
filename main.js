var system = require('system');
var page = require("webpage").create();
// var timer = require("./timer");

var url = system.args[1];

// timer.start();
console.log("Loading " + url);
page.viewportSize = {
  width: 1500,
  height: 800
};

page.open(url, function(status) {
	if(page.injectJs('timer.js')){
		page.render('page.png');
		// timer.stop();
		// console.log("Duration: " + (timer.duration/1000) + " secs");
		// console.log("Duration: " + (duration/1000) + " secs");
		var data = page.evaluate(function(){
		// return document.getElementsByClassName('lang-list-button-text')[0].innerText
			return text();
		})
		console.log(data);
		phantom.exit(0);
	}
});
