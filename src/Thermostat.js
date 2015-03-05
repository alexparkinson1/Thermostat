var Thermostat = function() {
  default_temperature = 20;
  minimum_temperature = 10;
  maximum_temperature = 32;
  powerSavingMaxTemp = 25;
  this.temp = default_temperature;
  powerSaving = true;
};

Thermostat.prototype.changeTemperature = function(number) {
  this.temp += number;
  this.controlTemperature();
};

Thermostat.prototype.resetTemperature = function() {
  this.temp = default_temperature;
};

Thermostat.prototype.controlTemperature = function() {
  if (this.temp < minimum_temperature) {this.temp = minimum_temperature};
  if (powerSaving === true && this.temp > powerSavingMaxTemp) {this.temp = powerSavingMaxTemp};
  if (powerSaving === false && this.temp > maximum_temperature) {this.temp = maximum_temperature};
};

Thermostat.prototype.energyUsage = function() {
  if (this.temp < 18) return "Low";
  else if (this.temp > 25) return "High";
  else return "Normal";
};
