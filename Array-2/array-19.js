const n = [4, 5, 7, 8, 6, 9];
let index = 0;

let firstElement = n[0];
let lastElement = n[n.length - 1];

for (let i = n.length - 2; i > 0; i--) {
    if (n[i] > firstElement && n[i] < lastElement) return index = i;
}
console.log(index);