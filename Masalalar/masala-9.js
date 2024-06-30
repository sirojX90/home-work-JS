// Bo'luvchilar yig'indisini topish funksiyasi
function sumOfDivisors(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum;
}

// Do'st sonlarni topish funksiyasi
function findAmicableNumbers(n) {
    for (let a = 1; a <= n; a++) {
        let b = sumOfDivisors(a);
        if (b > a && b <= n && sumOfDivisors(b) === a) {
            console.log(`(${a}, ${b}) do'st sonlar`);
        }
    }
}

// Misol
let N = 1000;
findAmicableNumbers(N);
