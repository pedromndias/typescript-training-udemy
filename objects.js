// The following function takes an object (person) as an argument. Typescript will verify that when we call it we are passing a correct object.
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Pedro", last: "Dias" });
// If we want to add excess properties we should create a separate variable first:
var completeName = { first: "Jon", last: "Doe", age: 28 };
// printName({first: "Jon", last: "Doe", age: 28}) // Error
printName(completeName); // No error.
// We can also define the type of object:
var coordinate = { x: 34, y: 2 };
// And anotate the return type of a function to be an object:
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
var coordinate2 = { x: 30, y: 22 };
function randomCoordinate2() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Evil",
    artist: "Interpol",
    numStreams: 138929,
    credits: {
        producer: "Phil Mango",
        writer: "Domi Dough"
    }
};
calculatePayout(mySong);
