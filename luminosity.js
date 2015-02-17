var luminosity = function() {
	return 0.2126 * process.argv[2] + 0.7152 * process.argv[3] + 0.0722 * process.argv[4];
};

var darken = function () {
	return 0.2126 * (process.argv[2] * 0.8) + 0.7152 * (process.argv[2] * 0.8) + 0.0722 * (process.argv[2] * 0.8);
};
console.log(luminosity());
console.log(darken());