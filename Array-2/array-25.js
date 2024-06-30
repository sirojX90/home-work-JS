const array = [2, 4, 8, 16, 32];

const denominator = array[1] / array[0];

for (let i = 2; i < array.length; i++) {
    if (array[i] / array[i - 1] !== denominator) return console.log(0);
}

console.log(denominator);