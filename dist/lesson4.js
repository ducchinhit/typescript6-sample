"use strict";
function greetPerson(name) {
    var greet; // using in scope, no using hoisting
    if (name == "tony") {
        greet = "Hello tony";
    }
    else {
        greet = "Hi there";
    }
    console.log(greet);
}
greetPerson("tony");
var a = 1;
var b = 3;
if (a == 1) {
    var a = 10;
    var b_1 = 30;
}
console.log(a);
console.log(b);
//# sourceMappingURL=lesson4.js.map