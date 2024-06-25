let n, a, b, c, d, f;

n = 56987;

a = Math.floor(n / 10000);
b = Math.floor((n / 1000) % 10);
c = Math.floor((n % 1000) / 100);
d = Math.floor((n % 100) / 10);
f = n % 10;

if(a > b && a > c && a > d && a > f){
  console.log(a, 5);
} else if(b > a && b > c && b > d && b > f){
  console.log(b, 4);
} else if(c > a && c > b && c > d && c > f){
  console.log(c, 3);
} else if(d > a && d > b && d > c && d > f){
  console.log(d, 2);
} else if(f > a && f > b && f > c && f > d){
  console.log(f, 1);
}

n = 36054;

a = Math.floor(n / 10000);
b = Math.floor((n / 1000) % 10);
c = Math.floor((n % 1000) / 100);
d = Math.floor((n % 100) / 10);
f = n % 10;

if(a > b && a > c && a > d && a > f){
  console.log(a, 5);
} else if(b > a && b > c && b > d && b > f){
  console.log(b, 4);
} else if(c > a && c > b && c > d && c > f){
  console.log(c, 3);
} else if(d > a && d > b && d > c && d > f){
  console.log(d, 2);
} else if(f > a && f > b && f > c && f > d){
  console.log(f, 1);
}

n = 12345;

a = Math.floor(n / 10000);
b = Math.floor((n / 1000) % 10);
c = Math.floor((n % 1000) / 100);
d = Math.floor((n % 100) / 10);
f = n % 10;

if(a > b && a > c && a > d && a > f){
  console.log(a, 5);
} else if(b > a && b > c && b > d && b > f){
  console.log(b, 4);
} else if(c > a && c > b && c > d && c > f){
  console.log(c, 3);
} else if(d > a && d > b && d > c && d > f){
  console.log(d, 2);
} else if(f > a && f > b && f > c && f > d){
  console.log(f, 1);
}