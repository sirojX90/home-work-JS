let n = 8;
let A = 4;
let B = 7;

const numbersArray = [A, B];

for(let i = 2; i < n; i++){
    let sum = 0;
    for(let j = 0; j < i; j++){
        sum += numbersArray[j];
    }
    numbersArray.push(sum);
}

console.log(numbersArray);