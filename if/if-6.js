let x = 6;
let fx;

if(-2 < x && x > 2){
    fx = 2 * x;
} else {
    fx = -3 * x;
}

console.log(fx);

x = 1;

if(-2 < x && x > 2){
    fx = 2 * x;
} else {
    fx = -3 * x;
}

console.log(fx);

x = -12;

if(-2 < x || x > 2){
    fx = 2 * x;
} else {
    fx = -3 * x;
}

console.log(fx);

x = 0;

if(-2 < x || x > 2){
    fx = 2 * x;
} else {
    fx = -3 * x;
}

console.log(fx);