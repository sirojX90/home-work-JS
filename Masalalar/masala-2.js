let N = 15;
let sum = 0;

for(let i = 1; i <= N; i++){
    if(N % i == 0){
        sum += i;
    }
}

console.log(sum);