"use strict";
// rest parameter lam viec moi 1 mang dynamic  khai bao co dau ...
// var disPlayColors=function(){
// for(let i in arguments){
//     console.log(arguments[i]);
// }
// };
// disPlayColors('Red');
// disPlayColors('Red','Blue');
// disPlayColors('Red','Blue','Yellow');
// another way
var disPlayColors1 = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    console.log(colors);
};
disPlayColors1('Red');
disPlayColors1('Red', 'Blue');
disPlayColors1('Red', 'Blue', 'Yellow');
// another way
var disPlayColors2 = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message + colors);
};
var messageData = 'check color ';
disPlayColors2(messageData, 'Red');
disPlayColors2(messageData, 'Red', 'Blue');
disPlayColors2(messageData, 'Red', 'Blue', 'Yellow');
//# sourceMappingURL=lesson11.js.map