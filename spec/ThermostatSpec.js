describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('on startup', function() {

    it('is set to 20 degrees', function() {
      expect(thermostat.temp).toBe(20);
    });
  });

  describe('the temperature can be', function() {

    it('increased', function() {
      thermostat.changeTemperature(5);
      expect(thermostat.temp).toBe(25);
    });

    it('decreased', function() {
      thermostat.changeTemperature(-5);
      expect(thermostat.temp).toBe(15);
    });

    it('reset', function() {
      thermostat.changeTemperature(5);
      thermostat.resetTemperature();
      expect(thermostat.temp).toBe(20);
    });
  });

  describe('the temperature cannot', function() {

    it('drop below 10', function() {
      thermostat.changeTemperature(-20);
      expect(thermostat.temp).toBe(10);
    });

  });


});
