let price, weight, s;

price = 5900;
weight = 1;
s = 0;

for(let i = 0.1; i <= weight; i += 0.1){
    s += price;
    console.log(i, s);
}