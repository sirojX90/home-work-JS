const n = [4, 5, 7, 8, 6, 9];
const newN = [];
let count = 0;

for(let i = 0; i <= n.length - 1; i++){
    if(n[i] % 2 == 1){
        count++;
        newN.push(n[i]);
    }
}
console.log(`Natija: ${newN} toqlari soni: ${count}`);