//get three digit randomm no.
function getRandomThreeDigitNo(){
    return Math.floor(Math.random() *900) +100;
}


let number = [];
for(let i = 0; i< 5; i++){
    number.push(getRandomThreeDigitNo());
}

let min = number[0];
let max = number[0];

for(let i = 1; i< number.length; i++){
    if(number[i] < max){
        max = number[i];
    }
    if(number[i] > min){
        min = number[i];
    }
}

console.log("Minimum value= "+ min);
console.log("Maximum value= "+ max);