'use strict'

// // >>>>>>>#1

// function getNumber() {

//     let number = +prompt("You should write number!");
//     if (Number.isInteger(number) && !isNaN(number) && number < 999 && number > 0) {
//         return number;
//     } else {
//         getNumber();
//     }
// };

// function viewNumber() {
//     let number = getNumber();
//     let objNumbers = {};

//     objNumbers.units = number % 10;
//     objNumbers.tens = Math.floor((number % 100) / 10);
//     objNumbers.hundreds = Math.floor(number / 100);
//     return objNumbers;
// }

// let result = viewNumber();
// console.log(result);

// >>>>>>>>#2

function getUserNumber(num) {
    if (Number.isInteger(num) && !isNaN(num) && num < 999 && num > 0) {
        return {
            units: num % 10,
            tens: Math.floor((num % 100) / 10),
            hundreds: Math.floor(num / 100)
        }
    } else {
        alert("Значение должно быть целым числом!");
        return {}
    }
}

console.log(getUserNumber(+prompt("Введите целое число!")));