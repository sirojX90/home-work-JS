let n, a, b, c, d, f;

n = 56987;

a = Math.floor(n / 10000);
b = Math.floor((n / 1000) % 10);
c = Math.floor((n % 1000) / 100);
d = Math.floor((n % 100) / 10);
f = n % 10;

console.log(f);