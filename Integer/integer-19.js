let a, b, c, d, s, t;

a = 230;
b = +(a / 100).toFixed(0);
c = (a % 100) / 10;
d = a % 10;

s = b + c + d;
t = b * c * d;

console.log(s, t);

a = 241;
b = +(a / 100).toFixed(0);
c = +((a % 100) / 10).toFixed(0);
d = a % 10;

s = b + c + d;
t = b * c * d;

console.log(s, t);