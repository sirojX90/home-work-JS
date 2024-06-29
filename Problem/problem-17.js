let n = 3423765;
let k = 7;
let count = 0;

const numbers = Array.from(n.toString());

const newNumbers = [];

numbers.map(el => {
    newNumbers.push(+el)
});

newNumbers.map(el => {
    if(k > el) return count++;
});

console.log(count);