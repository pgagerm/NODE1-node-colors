var luminosity = function() {
	var luminosityValue = 0.2126 * process.argv[2] + 0.7152 * process.argv[3] + 0.0722 * process.argv[4];
	if(luminosityValue > 155) {
		return 'light';
	} else {
		return 'dark';
	}
};


console.log(luminosity());