let n = 5;
let m = 0;
let s = 1;

for(let i = 1; i <= n; i++){
  for(let j = 1; j <= i; j++){
    s *= j;
    m += s;
    console.log(m);
  }
}