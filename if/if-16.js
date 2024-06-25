let n, a, b, c, d, f, j, i;

n = 45;

a = n / 10;
b = n / 100;
c = n / 1000;

if(a > 0 && a < 10){
  d = Math.floor(n / 10);
  f = n % 10;
  console.log(d + f);
} 

n = 345;

a = n / 10;
b = n / 100;
c = n / 1000;

if(b > 0 && b < 10){
  d = Math.floor(n / 100);
  f = Math.floor((n / 10) % 10);
  j = n % 10;
  console.log(d + f + j);
}

n = 8481;

a = n / 10;
b = n / 100;
c = n / 1000;

if(c > 0 && c < 10){
  d = Math.floor(n / 1000);
  f = Math.floor((n / 100) % 10);
  j = Math.floor((n % 100) / 10);
  i = n % 10;
  console.log(d + f + j + i);
}