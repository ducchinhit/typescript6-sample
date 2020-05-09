
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
var disPlayColors1=function(...colors:string[]){
    console.log(colors);
    };
    disPlayColors1('Red');
    disPlayColors1('Red','Blue');
    disPlayColors1('Red','Blue','Yellow');

    // another way
var disPlayColors2=function(message:string,...colors:string[]){
    console.log(message+colors);
    };
    let messageData='check color ';
    disPlayColors2(messageData,'Red');
    disPlayColors2(messageData,'Red','Blue');
    disPlayColors2(messageData,'Red','Blue','Yellow');