
let a = +prompt("Введите число 1 :");
let b = +prompt("Введите число 2 :");
let c = null;
let d = null;
let f = null;

if (a >= 0 && b >= 0){
    c = a - b ;
    alert(c);
} else if ( a <= 0 && b <= 0){
    d = a * b ;
    alert(d);
} else if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
    f = a + b;
    alert(f);
}