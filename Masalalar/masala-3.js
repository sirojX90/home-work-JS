let N = 6;
let sum = 0;

for(let i = 1; i < N; i++){
    if(N % i == 0){
        sum += i;
    }
}

if (N == sum) {
    return console.log(`${N} bu son mukammal`);
 }else{
    return console.log(`${N} bu son mukammal emas`);
 }