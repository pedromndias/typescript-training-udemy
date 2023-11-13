// Interfaces allows to describe the shape of objects.
interface Point {
    x: number;
    y: number;
}
const pt: Point = { x: 123, y: 1234 };

interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    sayHi: () => string; // This is a method that must return a string.
    // sayHi(): string
}

const thomas: Person = {
    id: 1,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    sayHi() {return `Hey there ${this.first}`}
};
thomas.first = "Tom";
// thomas.id = 2 // Error (can not modify readonly)
console.log(thomas.sayHi());

interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number
}

const shoes: Product = {
    name: "Blue shoes",
    price: 100,
    applyDiscount(amount: number) {
        return this.price*(1-amount)
    }
}

console.log(shoes.applyDiscount(0.2));

// Contrary to types, we can add new properties to an interface.
interface Dog {
    name: string
    age: number
}
interface Dog {
    breed: string
    bark(): string
}
// Now to create a variable of type Dog we need all the 4 properties:
const elton: Dog = {
    name: "Elton",
    age: 12,
    breed: "Australian Shepherd",
    bark() {
        return "Woof!"
    }
}

// We can also inherite interfaces:
interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog" // Note the union type.
}
const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Hey!"
    },
    job: "guide dog"
}