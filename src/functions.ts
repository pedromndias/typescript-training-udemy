// We should avoid using parameters without type anotation (they would be of type "any"). This way we could send a string to a square function.
function square(num: number) {
    // Math.round(num)
    // num.toUppercase()
    return num * num
}

function greet2(person: string) {
    // person * person // Math operations will be errors
    return `Hi there, ${person}`
}

// We can also have multiple types as parameters:
const doSomething = (person: string, age: number, isFunny: boolean) => {}
// Typescript will alert if the arguments do not match the anotation.
doSomething("Pedro", 35, true)

// And add default values with type anotation:
function greet3 (person: string = "stranger") {
    return `Hi there, ${person}`
}

// And define the return type of the function (even though it can be "guessed" by Typescript). Type "void" for functions that don't return anything (null or undefined) and type "never" for special functions like throw errors or always running functions.
function multiply (num1: number, num2: number) : number {
    return num1 * num2
}