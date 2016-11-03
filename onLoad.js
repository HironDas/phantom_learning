var system = require('system');
var url = system.args[1];
var startTime = null;
var endTime = null;
var resources = [];

var page = require('webpage').create();

page.onResourceRequested = function (request) {
	resource = {
		"startTime": request.time,
		"url": request.url
	};
	resources[request.id] = resource;
};

page.onResourceReceived = function (response) {
	if(response.stage == "start") {
		resources[response.id].size = response.bodySize;
	} else if(response.stage == "end") {
		resources[response.id].endTime = response.time;
	}
};

page.onLoadStarted = function(status) {
	startTime = new Date().getTime();
	console.log('page Loading Strated '+status);
};

page.onLoadFinished = function(status){
	endTime = new Date().getTime();
	var timeInSeconds = (endTime - startTime)/1000;
	console.log("Loading takes "+timeInSeconds+" seconds.");
	// console.log('Page Loaded '+status);

	resources.forEach(function(resource) {
		st = new Date(resource.startTime).getTime();
		et = new Date(resource.endTime).getTime();
		timeSpent = (et - st)/1000;
		console.log(timeSpent +" Seconds : "+resource.url);
	});

	phantom.exit(0);
};

page.onNavigationRequested = function(url, type, willNavigate, main){
	if(willNavigate){
		console.log("Navigating to "+url+" which is triggered by "+type+".");
	}else{
		console.log('Navigate is not permitted.');
	}
};

page.open(url);
