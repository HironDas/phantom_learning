var page = require('webpage').create();
var system = require('system');
var url = system.args[1];

page.onError = function(msg, trace){
	console.log(msg);

	if(trace) {
		trace.forEach(function(t){
			var stackmsg = ' at'+(t.function? ' function '+
				t.function : " ")+
			' ('+(t.file || t.sourceURL)+" : "+
			t.line+")";

			console.log(stackmsg);
		});
	}
};

page.open(url, function(status){
	page.evaluate(function(){
		documentx.content = 1;

	});
});