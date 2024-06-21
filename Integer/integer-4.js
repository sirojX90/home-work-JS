let s;
let a = 345;
let b = +(a / 100).toFixed(0) * 10;
let c = +(((a % 100) / 10).toFixed(0) - 1) * 100;
let d = a % 10;

s = d + c + b;

console.log(s);

a = 123;
b = +(a / 100).toFixed(0) * 10;
c = +((a % 100) / 10).toFixed(0) * 100;
d = a % 10;

s = d + c + b;

console.log(s);

a = 555;
b = +((a / 100).toFixed(0) - 1) * 10;
c = +(((a % 100) / 10).toFixed(0) - 1) * 100;
d = a % 10;

s = d + c + b;

console.log(s);