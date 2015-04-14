var Thermostat = function () {
    this.temp = 20;
    this.minimum = 10;
    this.savemode = true;
    this.maxTemp = 32;
    this.maxTempPsave = 25;
};

Thermostat.prototype.increase = function () {
    if (this.temp < this.maxTempPsave && this.savemode) {
        this.temp += 1;
        return; 
    };
};

Thermostat.prototype.decrease = function() {
    if (this.temp <= this.minimum) return(this.minimum);
    this.temp -= 1;
};
