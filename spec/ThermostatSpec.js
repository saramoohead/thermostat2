describe('Thermostat', function() {

var thermostat;

  it('should have a default temperature of 20', function() {
    thermostat = new Thermostat();
    expect(thermostat.temp).toEqual(20);
  });
});


