var page = require('webpage').create();
var system = require('system');

page.open('http://freegeoip.net/json/', function(status) {
	if(status == 'success'){
		var data = JSON.parse(page.plainText);
		console.log('IP Address: '+data.ip);
		console.log('Estimate Location: '+ data.city+", "
			+data.country_name);
	}

	phantom.exit();
})