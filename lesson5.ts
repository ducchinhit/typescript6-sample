//  // chi in ra 1 lan
// cach 1
for (var i = 0; i < 5; i++) {
  // tu khoa let, var
  (function (x) {
    setTimeout(() => {
      console.log(x);
    }, 2000);
  })(i);
}
// se in ra 5 gia tri

// cach 1
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 2000);
}
// se in ra 5 gia tri
