var Thermostat = function() {
  DEFAULT_TEMPERATURE = 20;
  MINIMUM_TEMPERATURE = 10;
  this.temp = DEFAULT_TEMPERATURE;
};

Thermostat.prototype.changeTemperature = function(number) {
  this.temp += number;
  this.controlTemperature();
};

Thermostat.prototype.resetTemperature = function() {
  this.temp = DEFAULT_TEMPERATURE;
  };

Thermostat.prototype.controlTemperature = function() {
  if (this.temp < MINIMUM_TEMPERATURE) {this.temp = MINIMUM_TEMPERATURE};
};
