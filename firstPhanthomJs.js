var system = require('system');
var url = system.args[1];
var page = require('webpage').create();
console.log(url);
page.open(url, function(status) {
if ( status === "success" ) {
	var data = page.evaluate(function() {
		return {
			title: document.title,
			numberOfNodes: document.getElementsByTagName("*").length,
			documentUrl: document.URL,
			value: document.querySelectorAll('#submit')[0].value
		};
	});
	console.log('Page Status');
	console.log('-------------------------------');
	console.log('Title :'+data.title);
	console.log('URL : '+data.documentUrl);
	console.log('Number of Nodes: '+data.numberOfNodes);
	console.log('Field Values: '+data.value);
	console.log('--------------------------------');
	this.render('test.png');
} else {
	console.log("Page failed to load.");
}
	phantom.exit(0);
});