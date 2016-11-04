var system = require('system');
var url = system.args[1];
var saveas = system.args[2];

var page = require('webpage').create();
console.log(url);
page.open(url, function(status){
	if(status == 'success'){
		console.log('The images is save as '+saveas);
		page.paperSize = {
			format: 'A4',
			orientation: 'portrait',
			border: '1cm'
		}
		page.render('screenshot.' + saveas);
		phantom.exit(0);
	}else{
		phantom.exit(1);
	}
})