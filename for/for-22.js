let n = 5;
let x = 2;
let s = 0;
let sum = 0;

for(let i = 1; i <= n; i++){
  s += i*i;
  sum = 1 + x + x**i / s + x**i;
  console.log(sum);
}