var fs = require('fs');
var filePath = 'C:/Users/Fujitsu-PC/Desktop/gitHubProjects/phantom_learning/test.json';

var config = {
	debug: true,
	home: '/home/phanthomjs',
	username: 'tarab'
}

// var out = fs.open(filePath, 'w');
var out = fs.open(filePath, {mode: 'w', charset: 'UTF-8'});

var out.write(JSON.stringify(config, null, 4));
out.close();

/*phantom.onError = function(err, trace){
	console.log(err);
}*/
phantom.exit(0);
