"use strict";
//  // chi in ra 1 lan
// cach 1
for (var i = 0; i < 5; i++) {
    // tu khoa let, var
    (function (x) {
        setTimeout(function () {
            console.log(x);
        }, 2000);
    })(i);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 2000);
};
// se in ra 5 gia tri
// cach 1
for (var i_1 = 0; i_1 < 5; i_1++) {
    _loop_1(i_1);
}
// se in ra 5 gia tri
//# sourceMappingURL=lesson5.js.map