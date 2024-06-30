let N = 10;

if(N == 1) return console.log("tub son emas");
for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i == 0) {
        return console.log("tub son emas");
    }else{
        return console.log("tub son");
    }
}
