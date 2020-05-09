//default value
var getPercent=()=>200;
var getbonus=function(value=10,tax=20){
    console.log(value+tax);
    console.log(arguments.length);
}

getbonus();
getbonus(40);
getbonus(undefined,50);

var getbonus1=function(value=10,tax=value*2){
    console.log(value+tax);
}
getbonus1(40);

var getbonus2=function(value=10,tax=getPercent()*2){
    console.log(value+tax);
}
getbonus2(13);