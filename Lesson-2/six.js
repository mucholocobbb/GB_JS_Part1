'use strict'

function userMoney(){
    let quant = +prompt("Сколько денег вы хотите положить в банк?");
    if(quant <= 0){
        alert("Введите положительное число, пожалуйста!");
        return userMoney();
    } else if (isNaN(quant)){
        alert("Введите  число, пожалуйста!");
        return userMoney()   ;
    }
    else {
        return quant;
    }
};
let sum = userMoney();
let str = String(sum);
let symNum = str.length - 1;
let sym = str.charAt(symNum);

switch (sym) {
    case "0":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
        alert(`Вы внесли ${sum} рублей!`);
        break;
    case "2":
    case "3":
    case "4":   
        alert(`Вы внесли ${sum} рубля!`);
        break; 
    default:
        alert(`Вы внесли ${sum} рубль!`);
}


