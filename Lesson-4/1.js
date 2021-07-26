'use strict';

// >>>>>>>>ES5

// function Product(name,price){
//     this.name = name;
//     this.price = price;
// };

// Product.prototype.make25PercentDiscount = function(){
//     return this.price = this.price - this.price * 0.25; 
// };

// let item1 = new Product("car",1900);
// let newPrice = item1.make25PercentDiscount();
// alert(newPrice + "$");

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        return this.price = this.price - this.price * 0.25;
    }
}

let item1 = new Product("car", 1900);
let newPrice = item1.make25PercentDiscount();
alert(`Old price on ${item1.name} was 1900$. 
        And spatial for you ! 
        New price with greAAT discount 25%!!! 
        ${newPrice}`);

// >>>>>>>>ES6

// function Post(author,text,date){
//     this.author = author;
//     this.text = text;
//     this.date = date;
// };

// Post.prototype.edit = function(){
//     this.text = prompt("Edit text...");
// }

// function AttachedPost(author,text,date){
//     Post.call(this, author, text, date);
//     this.highlighted = false;
// }

// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;

// AttachedPost.prototype.makeTextHighlighted = function(){
//     this.highlighted = true ;
// }

// let newPost = new Post("OLEG","f","11.11.1111");
// newPost.edit();
// console.log(newPost);

// let changePost = new AttachedPost("gena","","33.33.3333");
// changePost.edit();
// changePost.makeTextHighlighted();
// console.log(changePost);

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        this.text = prompt("Edit text...");
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let newPost = new Post("OLEG", "f", "11.11.1111");
newPost.edit();
console.log(newPost);

let changePost = new AttachedPost("gena", "", "33.33.3333");
changePost.edit();
changePost.makeTextHighlighted();
console.log(changePost);