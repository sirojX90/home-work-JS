function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function cosineApproximation(x, n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        let term = Math.pow(-1, i) * Math.pow(x, 2 * i) / factorial(2 * i);
        sum += term;
    }
    return sum;
}

// Misol uchun foydalanish:
let x = 1; // x ning qiymati
let n = 5; // qatorning n-gacha bo'lgan soni
console.log(cosineApproximation(x, n)); // Natijani chiqarish
console.log(Math.cos(x));