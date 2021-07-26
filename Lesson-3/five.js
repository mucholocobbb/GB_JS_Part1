'use strict';
console.log("ЗАДАНИЕ 5!");

function printRes(i){
    ++i
    console.log(i) 
    return i < 9;
}

for (let i = 0; printRes(i); i++) {};