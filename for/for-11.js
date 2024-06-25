let n = 2;
let s = 0;

for(let i = 1; i <= n; i++){
    s += (i + i)**i;
}
console.log(s);