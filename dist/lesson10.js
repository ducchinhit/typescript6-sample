"use strict";
//default value
var getPercent = function () { return 200; };
var getbonus = function (value, tax) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = 20; }
    console.log(value + tax);
    console.log(arguments.length);
};
getbonus();
getbonus(40);
getbonus(undefined, 50);
var getbonus1 = function (value, tax) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value * 2; }
    console.log(value + tax);
};
getbonus1(40);
var getbonus2 = function (value, tax) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = getPercent() * 2; }
    console.log(value + tax);
};
getbonus2(13);
//# sourceMappingURL=lesson10.js.map