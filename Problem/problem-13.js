let n = 4;
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for(let i = 1; i <= n; i++){
    if(i % 2 == 0){
        sum1 += i;
    }
}
console.log(sum1);

n = 10;

for(let i = 1; i <= n; i++){
    if(i % 2 == 0){
        sum2 += i;
    }
}
console.log(sum2);

n = 33;

for(let i = 1; i <= n; i++){
    if(i % 2 == 0){
        sum3 += i;
    }
}
console.log(sum3);