describe('Thermostat', function () {

var thermostat;

    beforeEach(function () {
        thermostat = new Thermostat();
    });

    it('has a default temperature of 20', function () {
        expect(thermostat.temp).toEqual(20);
    });

    it('can increase in increments of one', function () {
        thermostat.increase();
        expect(thermostat.temp).toEqual(21);
    });

    it('can decrease in increments of one', function () {
        thermostat.decrease();
        expect(thermostat.temp).toEqual(19);
    });

    it('has a minimum temperature of 10', function () {
        expect(thermostat.minimum).toEqual(10);
    });

    it('cannot go below minimum temperature', function () {
        //make it go down 11 degrees
        for (i = 0; i < 11; i++) {
            thermostat.decrease();
        }
        expect(thermostat.temp).toEqual(10);
    });

    it('has a power save mode', function () {
        expect(thermostat.savemode).toBe(true);
    });

    it('has a maximum temp of 25 if power save mode is on', function(){
        for (i=0; i < 6; i++) {
            thermostat.increase();
        }
        expect(thermostat.temp).toEqual(25);
    });
});
