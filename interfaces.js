var pt = { x: 123, y: 1234 };
var thomas = {
    id: 1,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    sayHi: function () { return "Hey there ".concat(this.first); }
};
thomas.first = "Tom";
// thomas.id = 2 // Error (can not modify readonly)
console.log(thomas.sayHi());
var shoes = {
    name: "Blue shoes",
    price: 100,
    applyDiscount: function (amount) {
        return this.price * (1 - amount);
    }
};
console.log(shoes.applyDiscount(0.2));
