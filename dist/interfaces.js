"use strict";
const pt = { x: 123, y: 1234 };
const thomas = {
    id: 1,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    sayHi() { return `Hey there ${this.first}`; }
};
thomas.first = "Tom";
// thomas.id = 2 // Error (can not modify readonly)
console.log(thomas.sayHi());
const shoes = {
    name: "Blue shoes",
    price: 100,
    applyDiscount(amount) {
        return this.price * (1 - amount);
    }
};
console.log(shoes.applyDiscount(0.2));
// Now to create a variable of type Dog we need all the 4 properties:
const elton = {
    name: "Elton",
    age: 12,
    breed: "Australian Shepherd",
    bark() {
        return "Woof!";
    }
};
const chewy = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Hey!";
    },
    job: "guide dog"
};
const pierre = {
    name: "Pierre",
    id: 123455,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "Python"]
};
