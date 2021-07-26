'use strict';

console.log("ЗАДАНИЕ 1 вы только что видели!")

let allRes = null;

for(let i = 0; i < 11; i++) {
   if(i == 0){
 
       allRes = i + " - это ноль \n";

   } else if(i % 2 == 0 ){

       allRes = allRes + (i + " - Это четное число \n");

    } else if(i % 2 !== 0){

        allRes = allRes  + (i + " - Это нечетное число \n");
    }
}

alert(allRes)
