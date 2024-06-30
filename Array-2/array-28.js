const array = [6, -2, 3, -4, 5, -6];
const newArray = [];

for(let i = 0; i < array.length; i++){
    if(i % 2 == 0){
        newArray.push(array[i])
    }
}

let min = newArray[0];

for(let i = 1; i < newArray.length; i++){
    if(newArray[i] < min){
        min = newArray[i];
    }
}
console.log(min);