// arrow function
var calculateSalary=function(){
    return 1000;
};

var calculateSalaryArrow=()=>200000;

var calculateSalaryArrowparam =  (bonus: number )=> 2000+bonus;


console.log(calculateSalary());
console.log(calculateSalaryArrow());
console.log(calculateSalaryArrowparam(1000));
