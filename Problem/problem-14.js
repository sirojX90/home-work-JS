let n = 1;

let first = 0;
let second = 1;
let third = 1;
let res;

if(n == 1)  console.log(first);
if(n == 2)  console.log(second);
if(n == 3)  console.log(third);

for(let i = 3; i <= n; i++){
    res = first + second;
    first = second;
    second = res;
}
console.log(res);

n = 10;

for(let i = 3; i <= n; i++){
    res = first + second;
    first = second;
    second = res;
}
console.log(res);

n = 29;

for(let i = 3; i <= n; i++){
    res = first + second;
    first = second;
    second = res;
}
console.log(res);