var system = require('system');
var url = system.args[1];
var page = require('webpage').create();

page.open("https://otctransparency.finra.org/", function(status) {
if ( status === "success" ) {
	var title = page.evaluate(function() {
		return document.title;
	});
	console.log(title);
} else {
	console.log("Page failed to load.");
}
	phantom.exit(0);
});