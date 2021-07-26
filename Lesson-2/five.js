 'use strict'

function sum(a,b){
    let c = a + b;
    return c ;
}

function min(a,b,c){
    let c = a - b;
    return c ;
}

function pro(a,b){
    let c = a * b;
    return c ;
}

function del(a,b){
    let c = a / b;
    return c ;
}

let a = +prompt("Введите число 1 :");
let b = +prompt("Введите число 2 :");
let c = prompt("Введите одну из математических операций * / + - ");

/**
 * Функция принимает параметры чисел arg1, arg2 и в зависимости от operation вызывает соответствующую функцию.
 * @param {number} arg1  принимает число из меременной "a".
 * @param {number} arg2  принимает число из меременной "b".
 * @param {string} operation  принимает строку с символом математического оператора из меременной "с".
 * @returns {number} возвращает число ,результат вычисления одной из вызываемых функций.
 */

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case "*":
            return pro(arg1,arg2)
        case "/":
            return del(arg1,arg2)
        case "+":
            return sum(arg1,arg2)
        case "-":
            return min(arg1,arg2)
        default:
            alert(" Введите верный математический оператор !");
            operation = prompt("Введите одну из математических операций * / + - ");    
            return mathOperation(arg1, arg2, operation);    
    }
}

let mathResult = mathOperation(a, b, c);
if(mathResult !== undefined  ){alert (" Результат вычисления : " + mathResult);}
