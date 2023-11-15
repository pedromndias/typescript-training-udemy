"use strict";
let justAString = "Test";
justAString = "Second test";
// justAString = 8;
justAString.toUpperCase();
let numCatLives = 9;
numCatLives += 1;
// numCatLives = "Nine"
let gameOver = false;
gameOver = true;
// gameOver = "true"
let thing = "hello";
thing = false;
thing();
thing.toUpperCase();
const movies = ["Arrival", "The Thing", "Aliens"];
// let foundMovie; // Typescript inferes it of type "any", so we should do type anotation to prevent working with different kinds of variables:
let foundMovie;
for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}
