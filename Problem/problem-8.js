let a = 8;
let b = 5;
let c = 7;

if(a + b > c && b + c > a && a + c > b){
    if(a == b && b == c && a == c){
        console.log("teng tomonli uchburchak");
    }
    if(a == b && b !== c && a !== c){
        console.log("teng yonli uchburchak");
    }
    if(b == c && a !== c && a !== b){
        console.log("teng yonli uchburchak");
    }
    if(a == c && a !== b && b !== c){
        console.log("teng yonli uchburchak");
    }
    if(a !== b && b !== c && a !== c){
        console.log("turli tomonli uchburchak");
    }
}else{
    console.log("NO");
}

a = 12;
b = 11;
c = 12;

if(a + b > c && b + c > a && a + c > b){
    if(a == b && b == c && a == c){
        console.log("teng tomonli uchburchak");
    }
    if(a == b && b !== c && a !== c){
        console.log("teng yonli uchburchak");
    }
    if(b == c && a !== c && a !== b){
        console.log("teng yonli uchburchak");
    }
    if(a == c && a !== b && b !== c){
        console.log("teng yonli uchburchak");
    }
    if(a !== b && b !== c && a !== c){
        console.log("turli tomonli uchburchak");
    }
}else{
    console.log("NO");
}

a = 5;
b = 5;
c = 5;

if(a + b > c && b + c > a && a + c > b){
    if(a == b && b == c && a == c){
        console.log("teng tomonli uchburchak");
    }
    if(a == b && b !== c && a !== c){
        console.log("teng yonli uchburchak");
    }
    if(b == c && a !== c && a !== b){
        console.log("teng yonli uchburchak");
    }
    if(a == c && a !== b && b !== c){
        console.log("teng yonli uchburchak");
    }
    if(a !== b && b !== c && a !== c){
        console.log("turli tomonli uchburchak");
    }
}else{
    console.log("NO");
}