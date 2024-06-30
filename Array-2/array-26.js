const array = [1, 2, 3, 4, 5, 6];


for (let i = 0; i <= array.length - 1; i++) {
    if ((array[i] % 2 === 0 && array[i + 1] % 2 === 0) || (array[i] % 2 !== 0 && array[i + 1] % 2 !== 0)) {
       return console.log(array[i + 1]);
    }
}

console.log(0);