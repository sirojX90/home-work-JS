let S, P, p, a, b, c;
let x1 = -9.7;
let y1 = -9.9;
let x2 = 0;
let y2 = 2.9;
let x3 = -0.1;
let y3 = 5.2;

a = +Math.sqrt((x2 - x1)**2 + (y2 - y1)**2).toFixed(2);
b = +Math.sqrt((x3 - x2)**2 + (y3 - y2)**2).toFixed(2);
c = +Math.sqrt((x3 - x1)**2 + (y3 - y1)**2).toFixed(2);

P = +(a + b + c).toFixed(2);

p = P / 2;

S = +Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3);

console.log(P, S);