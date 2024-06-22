let n, a, b, c, d, f, j, i;

n = 45;

a = n / 10;
b = n / 100;
c = n / 1000;

if (a > 0 && a < 10) {
  d = Math.floor(n / 10);
  f = n % 10;
  if (d % 2 !== 0 && f % 2 !== 0) {
    console.log(d + f);
  } else if (d % 2 !== 0) {
    console.log(d);
  } else if (f % 2 !== 0) {
  console.log(f);
  }
}


n = 345;

a = n / 10;
b = n / 100;
c = n / 1000;

if (b > 0 && b < 10) {
  d = Math.floor(n / 100);
  f = Math.floor((n / 10) % 10);
  j = n % 10;
  if (d % 2 !== 0 && f % 2 !== 0 && j % 2 !== 0) {
    console.log(d + f + j);
  } else {
    if (d % 2 !== 0) {
      if (j % 2 !== 0) {
        console.log(d + j);
      }
    }
  }
}

n = 8481;

a = n / 10;
b = n / 100;
c = n / 1000;

if (c > 0 && c < 10) {
  d = Math.floor(n / 1000);
  f = Math.floor((n / 100) % 10);
  j = Math.floor((n % 100) / 10);
  i = n % 10;
  if (d % 2 !== 0 && f % 2 !== 0 && j % 2 !== 0 && i % 2 !== 0) {
    console.log(d + f + j + i);
  } else {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}