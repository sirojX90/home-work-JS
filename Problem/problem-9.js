let a = 3;
let b = 5;
let c = 4;

if(a + b > c && b + c > a && a + c > b){
    if(a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a){
        console.log("YES");
    }else{
        console.log("NO");
    }
}

a = 12;
b = 11;
c = 12;

if(a + b > c && b + c > a && a + c > b){
    if(a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a){
        console.log("YES");
    }else{
        console.log("NO");
    }
}

a = 5;
b = 5;
c = 5;

if(a + b > c && b + c > a && a + c > b){
    if(a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a){
        console.log("YES");
    }else{
        console.log("NO");
    }
}