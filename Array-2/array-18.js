const n = [14, 15, 7, 8, 6, 9];
let count = 0;

for(let i = 0; i <= n.length - 1; i++){
    if(n[i] < n[n.length-1]) return console.log(n[i]);
    else count++;
}

if(count) console.log(0);