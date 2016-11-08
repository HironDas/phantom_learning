exports.timeStart = null;
exports.timeStop = null;
exports.duration = 0;

exports.start = function() {
	this.timeStart = new Date();
};

exports.stop = function() {
	this.timeStop = new Date();
	this.duration = this.timeStop - this.timeStart;
};