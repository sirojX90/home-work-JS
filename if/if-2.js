let a, b, c;

a = 50;
b = 89;
c = 1;

if(a < b < c) {
    console.log(b);
} else if(b < a < c) {
    console.log(a);
} else if(b < c < a){
    console.log(c);
}

a = 40;
b = -20;
c = 23;

if(a < b) {
    console.log(b);
} else if(c < a < b) {
    console.log(a);
} else if(b < c < a){
    console.log(c);
}