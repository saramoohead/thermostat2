describe('Thermostat', function() {

var thermostat;

  it('has a default temperature of 20', function() {
    thermostat = new Thermostat();
    expect(thermostat.default_temp).toEqual(20);
  });

    it('can increase in increments of one', function(){
        thermostat = new Thermostat();
        expect(thermostat.increase).toEqual(21);
    });
});
