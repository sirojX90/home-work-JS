const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const K = 2;
const L = 5;
let sum = 0;

for (let i = 0; i < array.length; i++) {
    if (i < K || i > L) {
        sum += array[i];
    }
}

console.log(sum);