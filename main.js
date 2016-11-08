var system = require('system');
var page = require("webpage").create();
var timer = require("./timer");

var url = system.args[1];

timer.start();
console.log("Loading " + url);

page.open(url, function(status) {
	timer.stop();
	console.log("Duration: " + (timer.duration/1000) + " secs");
	// console.log("Duration: " + (duration/1000) + " secs");
	phantom.exit(0);
});
