let S, p, a, b, c, distance;
let x1 = -9.7;
let y1 = -9.9;
let x2 = 0;
let y2 = 2.9;
let x3 = -0.1;
let y3 = 5.2;

a = Math.sqrt((x2 - x1)**2)
b = Math.sqrt((y2 - y1)**2)
c = Math.sqrt((y3 - x3)**2)

p = (a + b + c);

console.log(p);