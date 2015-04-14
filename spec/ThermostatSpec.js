describe('Thermostat', function () {

var thermostat;

    it('has a default temperature of 20', function () {
        thermostat = new Thermostat();
        expect(thermostat.default_temp).toEqual(20);
    });

    it('can increase in increments of one', function () {
        thermostat = new Thermostat();
        thermostat.increase();
        expect(thermostat.default_temp).toEqual(21);
    });

    it('can decrease in increments of one', function () {
        thermostat = new Thermostat();
        thermostat.decrease();
        expect(thermostat.default_temp).toEqual(19);
    });

    it("has a minimum temperature of 10", function() {
      expect(thermostat.minimum).toEqual(10) 
    });

    it ('it cannot go below minimum temperature', function () {
        //make it go down 11 degrees
        thermostat = new Thermostat();
        for (i = 0; i < 11; i++) {
        thermostat.decrease();
        }
        expect(thermostat.default_temp).toEqual(10) 
    });
 
    it ('it has a power save mode', function () {
      thermostat = new Thermostat();
      expect(thermostat.savemode).toBe(true);
    });
});
