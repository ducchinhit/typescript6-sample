"use strict";
// spread operator nghia la se take gia tri cuar bien , 1 mang rui boc tach
// no ra. no nguoc voi rest operator
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// rest parameter lam viec moi 1 mang dynamic  khai bao co dau ...
// another way
var disPlayColorSpead = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
};
var messageDataSpread = "check color ";
var colors1 = ["Red", "Blue", "Yellow"];
disPlayColorSpead.apply(void 0, __spreadArrays([messageDataSpread], colors1));
//# sourceMappingURL=lesson12.js.map