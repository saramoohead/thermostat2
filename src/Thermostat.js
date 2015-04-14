var Thermostat = function () {
    this.default_temp = 20;
};

Thermostat.prototype.increase = function () {
    this.default_temp += 1;
    return(this.default_temp);
};

Thermostat.prototype.decrease = function() {
    this.default_temp -= 1;
    return(this.default_temp);
};