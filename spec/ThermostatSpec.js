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
});
