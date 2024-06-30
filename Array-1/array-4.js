let n = 8;
let A = 3;
let D = 3;

const geometricProgressionArray = [];

for(let i = 1; i <= n; i++){
    console.log(i);
    geometricProgressionArray.push(A * D * (i - 1 === 0 ? 1 : i))
}

console.log(geometricProgressionArray);