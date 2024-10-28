const convertToCelsius = function(temp) {

  result1 = (temp - 32)/1.8;
	return Math.round((result1 + Number.EPSILON)*10)/10;

};

const convertToFahrenheit = function(temp) {

  result2 = (1.8 * temp) + 32;
	return Math.round((result2 + Number.EPSILON)*10)/10;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
