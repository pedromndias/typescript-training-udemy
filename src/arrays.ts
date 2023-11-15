// We can anotate array types:
const activeUsers: string[] = []
activeUsers.push("Tony")
// activeUsers.push(12) // Error

const ageList: number[] = [45, 56, 34];
ageList[0] = 99;
// ageList[0] = "test" // Error

// Another way of defining arrays:
const bools: Array<boolean> = []

// Array of custom types:
type Point3 = {
    x: number,
    y: number
}
const coords2: Point3[] = []
coords2.push({x: 23, y: 8})

// Multidimensional arrays:
const board: string[][] = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"]
]

