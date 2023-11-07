let justAString: string = "Test"
justAString = "Second test"
// justAString = 8;
justAString.toUpperCase()

let numCatLives: number = 9
numCatLives += 1
// numCatLives = "Nine"

let gameOver: boolean = false;
gameOver = true
// gameOver = "true"

let thing: any = "hello"
thing = false;
thing()
thing.toUpperCase()

const movies = ["Arrival", "The Thing", "Aliens"]
// let foundMovie; // Typescript inferes it of type "any", so we should do type anotation to prevent working with different kinds of variables:
let foundMovie: string


for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = "Amadeus"
    }
}