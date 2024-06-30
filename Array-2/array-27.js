const array = [-6, -2, 3, -4, 5, -6];


for (let i = 0; i <= array.length - 1; i++) {
    if ((array[i] > 0 && array[i + 1] < 0) || (array[i] < 0 && array[i + 1] > 0)) {
        return console.log(0);
    } else {
        return console.log(array[i + 1]);
    }
}