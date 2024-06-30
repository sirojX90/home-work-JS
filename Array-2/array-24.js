const array = [2, 4, 6, 8, 10];

const difference = array[1] - array[0];

for (let i = 2; i < array.length; i++) {
    if (array[i] - array[i - 1] !== difference) return console.log(0);
}

console.log(difference);