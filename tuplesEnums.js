// We can define arrays with specific length and types for each elements: Tuples.
var color = [255, 0, 255];
var goodRes = [200, "OK"];
var badRes = [500, "Internal Server Error"];
badRes[0] = 300;
// badRes[0] = "Test" // Error, type 'string' is not assignable to type 'number'.
// We can now create an array of tuples:
var responses = [[404, "Not Found"], [200, "OK"]];
// NOTE that we can push, pop, etc on tuples:
badRes.push(123);
console.log(badRes);
// For this reason, it's better to create objects for this purpose.
// Enums allow us to define a set of named constants (to give number or string values):
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED"; // 3
})(OrderStatus || (OrderStatus = {}));
var myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
console.log(isDelivered(myStatus));
console.log(OrderStatus.SHIPPED);
// We can also work with string values instead of numbers:
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
console.log(ArrowKeys.LEFT);
