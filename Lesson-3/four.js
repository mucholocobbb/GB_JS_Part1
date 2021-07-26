'use strict';

console.log("ЗАДАНИЕ 4!")

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg", 
        ]
    }, 
    {
        id: 5,
        price: 499,
        photos: []
    }, 
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]    
    },
    {
        id: 8,
        price: 78, 
    },
];

// let i = 0;
// let photoProduct = []

//  products.forEach(function(product){
    
//     if ("photos" in product && product.photos.length > 0){
//         let a = photoProduct.push(product);
//     } 
//     i++;
// })

let photoProduct =  products.filter(function(product){
    return "photos" in product && product.photos.length > 0
})




console.log(photoProduct)  // я целый день просидел пытаясь использовать filter , но так и не понял как его применить на этом  примере. В примере в доп видео все понятно. Возможно я зациклился на определении нужного обьекта в массиве по длинне вложенного массива photos. Как не пытался прикинуть, не смог слезть с этой идеи.  


products.sort(function (a, b) {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
    return 0;
});

console.log(products)