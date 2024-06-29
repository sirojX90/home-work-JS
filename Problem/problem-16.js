let n = 3423765;
let big = 0;

const numbers = Array.from(n.toString());

const newNumbers = [];

numbers.map(el => {
    newNumbers.push(+el)
});

newNumbers.map(el => {
    if(big <= el) return big = el;
});

console.log(big);