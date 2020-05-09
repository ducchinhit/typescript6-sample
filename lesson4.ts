function greetPerson(name: any) {
  let greet; // using in scope, no using hoisting
  if (name == "tony") {
    greet = "Hello tony";
  } else {
    greet = "Hi there";
  }
  console.log(greet);
}
greetPerson("tony");

var a=1;
let b=3;

if(a==1){
    var a=10;
    let b=30;
}
console.log(a);
console.log(b);