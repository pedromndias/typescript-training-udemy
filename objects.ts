// The following function takes an object (person) as an argument. Typescript will verify that when we call it we are passing a correct object.
function printName(person: {first: string, last: string}): void {
    console.log(`${person.first} ${person.last}`);
}

printName({first: "Pedro", last: "Dias"})

// If we want to add excess properties we should create a separate variable first:

let completeName = {first: "Jon", last: "Doe", age: 28}
// printName({first: "Jon", last: "Doe", age: 28}) // Error
printName(completeName) // No error.

// We can also define the type of object:
let coordinate: { x: number; y: number} = {x: 34, y: 2}

// And anotate the return type of a function to be an object:
function randomCoordinate(): {x: number, y: number} {
    return {x: Math.random(), y: Math.random()}
}

// We can also define our own type to reuse it:
type Point = {
    x: number;
    y: number;
    z?: number; // z is an optional property
}
let coordinate2: Point = {x: 30, y: 22}
function randomCoordinate2(): Point {
    return {x: Math.random(), y: Math.random()}
}
function doublePoint(point: Point): Point {
    return {x: point.x * 2, y: point.y * 2}
}

// Nested objects:
type Song = {
    readonly title: string, // Note the readonly modifier so we can not modify this property's value after creation.
    artist: string,
    numStreams: number,
    credits: { producer: string, writer: string}
}

function calculatePayout(song: Song): number{
    return song.numStreams * 0.0033
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
    title: "Evil",
    artist: "Interpol",
    numStreams: 138929,
    credits: {
        producer: "Phil Mango",
        writer: "Domi Dough"
    }
}

calculatePayout(mySong)

// Object intersection:
type Circle = {
    radius: number
}
type Colorful = {
    color: string
}
type ColorfulCircle = Circle & Colorful
const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
}
// We can also add to an intersection:
type SuperColorfulCircle = Circle & Colorful & {
    background: string
}
let testColor = "red"
let background = "blue"
const blueHappyFace: SuperColorfulCircle = {
    radius: 5,
    color: testColor,
    background
}
