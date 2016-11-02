var system = require('system');
var url = system.args[1];
var startTime = null;
var endTime = null;

var page = require('webpage').create();

page.onLoadStarted = function(status) {
	startTime = new Date().getTime();
	console.log('page Loading Strated '+status);
};

page.onLoadFinished = function(status){
	endTime = new Date().getTime();
	var timeInSeconds = (endTime - startTime)/1000;
	console.log("Loading takes "+timeInSeconds+" seconds.") 
	// console.log('Page Loaded '+status);
	phantom.exit(0);
};

page.open(url);
