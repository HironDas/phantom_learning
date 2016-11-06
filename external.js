var page = require('webpage').create();
page.open("https://google.com/", function(status) {
	 if ( status === "success" ) {
		 page.render("before.png");
		 page.includeJs('https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js', function() {
		 	console.log("$$$$$$$$$$$$$$$$$");
			 (page.evaluate(function() {
			 	$('#_eEe').html('PhantomJS');
			 	// document.querySelector('.alt-h1').innerHTML ='PhantomJS';
			 }));
			 console.log('Here')
			 page.render("after.png");
			 phantom.exit(0);
	 	});
	 }
});

/*page.onResourceRequested = function (request) {
    console.log('Request ' + JSON.stringify(request, undefined, 4));
};*/

page.onError = function (msg, trace) {
    console.log(msg);
    trace.forEach(function(item) {
        console.log('  ', item.file, ':', item.line);
    });
};