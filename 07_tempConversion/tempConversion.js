const convertToCelsius = function(deg) {
  deg -= 32;
  deg *= 5 / 9;
  return Math.round(deg * 10) / 10;
};

const convertToFahrenheit = function(deg) {
  deg *= 9 / 5;
  deg += 32;
  return Math.round(deg * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
