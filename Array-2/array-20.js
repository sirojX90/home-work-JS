const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const K = 2;
const L = 8;
let sum = 0;

for (let i = K; i <= L; i++) {
    sum += array[i];
}

console.log(sum);