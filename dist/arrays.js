"use strict";
// We can anotate array types:
const activeUsers = [];
activeUsers.push("Tony");
// activeUsers.push(12) // Error
const ageList = [45, 56, 34];
ageList[0] = 99;
// ageList[0] = "test" // Error
// Another way of defining arrays:
const bools = [];
const coords2 = [];
coords2.push({ x: 23, y: 8 });
// Multidimensional arrays:
const board = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"]
];
