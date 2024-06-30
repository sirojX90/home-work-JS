const n = [4, 5, 7, 8, 6, 9];
const newN = [];
const newNarray = [];
let count = 0;
let countTow = 0;

for(let i = 0; i <= n.length - 1; i++){
    if(n[i] % 2 == 0){
        count++;
        newN.push(n[i]);
    }
}
console.log(`Natija: ${newN} juftlari soni: ${count}`);

for(let i = n.length - 1; i >= 0; i--){
    if(n[i] % 2 == 1){
        countTow++;
        newNarray.push(n[i]);
    }
}
console.log(`Natija: ${newNarray} toqlari soni: ${countTow}`);