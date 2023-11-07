// Sometimes we don't know what type a variable would be so we can anotate the possible ones:
var age = 21;
age = "24";
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 234.4, long: 53.5 };
function printAge(age) {
    console.log("You are ".concat(age, " years old"));
}
// TypeScript will throw an error if we try to do operations of a specific type.
function calculateTax(price, tax) {
    // return price * tax // Error, because multiplying is ok with numbers but not strings.
    // price.replace("$", "") // Error, because replace is for strings and not numbers.
}
// In those cases we need to do some type narrowing:
function calculateTax2(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price = price * tax;
}
console.log(calculateTax2("45", 0.3));
console.log(calculateTax2(120, 0.21));
