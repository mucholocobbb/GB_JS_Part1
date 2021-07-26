let a = +prompt("Введите число 1 :");
let b = +prompt("Введите число 2 :");

function sum(a,b){
    let c = a + b;
    return c ;
}

function min(a,b){
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



alert("Сумма чисел : " + sum(a,b));
alert("Разность чисел : " + min(a,b));
alert("Произведение чисел : " + pro(a,b));
alert("Деление чисел : " + del(a,b));