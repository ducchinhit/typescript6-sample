// spread operator nghia la se take gia tri cuar bien , 1 mang rui boc tach
// no ra. no nguoc voi rest operator

// rest parameter lam viec moi 1 mang dynamic  khai bao co dau ...

// another way
var disPlayColorSpead = function (message: string, ...colors: string[]) {
  for (let i in colors) {
    console.log(colors[i]);
  }
};
let messageDataSpread = "check color ";
let colors1 = ["Red", "Blue", "Yellow"];
disPlayColorSpead(messageDataSpread, ...colors1);
