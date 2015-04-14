var Thermostat = function () {
    this.temp = 20;
    this.minimum = 10;
    this.saveMode = true;
    this.maxTemp = 32;
    this.maxTempPsave = 25;
};

Thermostat.prototype.increase = function () {
    if (this.temp < this.maxTempPsave && this.saveMode) {
        this.temp += 1;
        return;
    } ;
};

Thermostat.prototype.decrease = function () {
    if (this.temp > this.minimum) {
        this.temp -= 1;
    return;
    } ;
};

Thermostat.prototype.pSaveToggle = function() {
    if (this.saveMode) {
        this.saveMode = false
    }
};
