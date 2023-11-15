// We can define arrays with specific length and types for each elements: Tuples.
let color: [number, number, number] = [255, 0, 255]
// color = [1, 2, "test"] // Error, string type is not allowed.
// color = [123, 123] // Error, array mus contain exactly 3 numbers.

type HTTPResponse = [number, string]

const goodRes: HTTPResponse = [200, "OK"]
const badRes: HTTPResponse = [500, "Internal Server Error"]
badRes[0] = 300
// badRes[0] = "Test" // Error, type 'string' is not assignable to type 'number'.

// We can now create an array of tuples:
const responses: HTTPResponse[] = [[404, "Not Found"], [200, "OK"]]

// NOTE that we can push, pop, etc on tuples:
badRes.push(123)
console.log(badRes)
// For this reason, it's better to create objects for this purpose.


// Enums allow us to define a set of named constants (to give number or string values):
enum OrderStatus {
    PENDING, // TypeScript automatically assigns the number 0 and increments on each property.
    SHIPPED, // 1
    DELIVERED, // 2
    RETURNED // 3
}

const myStatus = OrderStatus.DELIVERED

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED
}

console.log(isDelivered(myStatus));
console.log(OrderStatus.SHIPPED);

// We can also work with string values instead of numbers:
enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

console.log(ArrowKeys.LEFT)