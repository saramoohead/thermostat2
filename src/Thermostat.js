var Thermostat = function () {
    this.default_temp = 20;
    this.minimum = 10;
};

Thermostat.prototype.increase = function () {
    this.default_temp += 1;
    return (this.default_temp);
};

Thermostat.prototype.decrease = function() {
    if (this.default_temp <= this.minimum) return(this.minimum);
    this.default_temp -= 1;
};
