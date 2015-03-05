var Thermostat = function() {
  DEFAULT_TEMPERATURE = 20;
  MINIMUM_TEMPERATURE = 10;
  this.temp = DEFAULT_TEMPERATURE;
};

Thermostat.prototype.changeTemperature = function(number) {
  this.temp += number;
};

Thermostat.prototype.resetTemperature = function() {
  this.temp = DEFAULT_TEMPERATURE
};
