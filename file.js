var fs = require('fs');
var filePath = 'C:/Users/Fujitsu-PC/Desktop/gitHubProjects/phantom_learning/README.md';

if(fs.exists(filePath) && fs.isFile(filePath)) {
	var ins = fs.open(filePath, 'r');
	console.log(ins.read());
	ins.close();
}

console.log('working Directory: '+fs.workingDirectory);

phantom.exit(0);