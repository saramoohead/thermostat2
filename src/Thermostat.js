var Thermostat = function () {
    this.temp = 20;
    this.minimum = 10;
    this.savemode = true;
};

Thermostat.prototype.increase = function () {
    this.temp += 1;
    return (this.temp);
};

Thermostat.prototype.decrease = function() {
    if (this.temp <= this.minimum) return(this.minimum);
    this.temp -= 1;
};
