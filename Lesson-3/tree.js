'use strict';

console.log("ЗАДАНИЕ 3!")

const products1 = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

let newProduct = products1.forEach(function(product){
    let newPrice = product.price - product.price * 0.15;
    let saleProduct = Object.assign({},product,{salePrice: newPrice});
    console.log(saleProduct);
})

