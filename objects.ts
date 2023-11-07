// The following function takes an object (person) as an argument. Typescript will verify that when we call it we are passing a correct object.
function printName(person: {first: string, last: string}) {
    console.log(`${person.first} ${person.last}`);
}

printName({first: "Pedro", last: "Dias"})