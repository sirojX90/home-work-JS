let s;
let a = 231;
let b = +(a / 100).toFixed(0);
let c = +((a % 100) / 10).toFixed(0) * 10;
let d = (a % 10) * 100;

s = d + c + b;

console.log(s);

a = 765;
b = +(a / 100).toFixed(0) - 1;
c = +(((a % 100) / 10).toFixed(0) - 1) * 10;
d = (a % 10) * 100;

s = d + c + b;

console.log(s);