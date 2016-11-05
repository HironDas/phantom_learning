var system = require('system');
var url = system.args[1];
console.log(url);

var page = require('webpage').create();

page.open(url, function(status){
	if(status == 'success'){
		var domain = "."+url.split('//www.')[1];
		phantom.addCookie({
			'name': "test",
			'value': "Hiron",
			'domain': domain
		});
		console.log(JSON.stringify(phantom.cookies, null, 4));
		phantom.exit(0);
	}
})