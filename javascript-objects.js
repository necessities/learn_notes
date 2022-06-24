

// Javascript Objects

// Primitive Data Types:
// - String
// - Number
// - Boolean
// - undefined 
// - null
// - Symbol - unique identifer (often used as keys in objects)

// Non Primitive Data Types
// Object - data type that is a collection of things
    // - Array [4, 6, 8]
    // - Object {key : value}

// let myObject = {key1: "value1", key2: "value2", key3: "value3", key4: 7, key5: true}
let myObject = {
    key1: "value1", 
    key2: "value2", 
    key3: "value3", 
    key4: 7, 
    key5: true
}
// a key is a symbol ddata type, a value can be any data type 


console.log(myObject)
console.log(myObject.key2)

let breakfast = {
    item1: "cereal",
    item2: "fish",
    item3: "eggs",
    item4: {
        beverage1: "coffee",
        beverage2: "chai tea",
        beverage3: "orange juice",
        beverage4: {
            smoothie1: "berries",
            smoothie2: "greens",
            smoothie3: "herbal",
        }
    }
}
// nesting objects -  an object called breakfast with 4 keys, 3 with strings and 1 with another object which contains some strings and another object

console.log(breakfast)
console.log(breakfast.item4.beverage4.smoothie2)

// Desctructuring - create a shortcut for a key: data pair 

let { smoothie1 } = breakfast.item4.beverage4
console.log(smoothie1)

// can give multiple keys the same path

let { smoothie2, smoothie3 } = breakfast.item4.beverage4
console.log(smoothie3, smoothie2)

// Methods 
// .pop(), .toUpperCase() - built in methods are actions that can be performed on a particular data type 
// Method - function (behavior) that belongs to an object
// string.toUpperCase() (string value type object - method function)
// objects can have static data and behavior; aka any data type and functions

let numbers = {
    num1: 5,
    num2: 10,
    num3: 15,
    addUp: function() {
        return this.num1 + this.num2 + this.num3
    }
}
// the function addUp() belongs to the object numbers which makes it a method
console.log(numbers)
console.log(numbers.addUp())



// JSON - Javascript Object Notation
// agreed upon data structure used to pass data around the internet 


const animals = [
    { name: "Waffles", type: "dog", age: 7 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 }
  ]
  // Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
  // Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.


        const onlyCats1 = (animals1) => {
            const onlyCats = animals1.filter(value => value.type === "cat")
            return onlyCats
        } 

        // const onlyCats = animals.filter(value => value.type === "cat")

        console.log(onlyCats1(animals))

        const onlyNames2 = (animals) => {
            let namesArray1 = []
            for (let i = 0; i < 4; i ++) {
                namesArray1.push(animals[i].name)
            }

            return namesArray1


        }

        const onlyNames3 = (animals) => {
            return animals.map(value => {
                return value.name
            })

        }

        console.log(onlyNames2(animals))


        // OBJECTS IN ARRAYS

        const pets = [
            {name: "Tala", type: "dog", age: 4}, 
            {name: "Milky", type: "chicken", age: 1},
            {name: "Kevin", type: "cat", age: 8},
            {name: "Jack", type: "cat", age: 20}
        ]

        // Use higher order functions to iterate over array
        // create function that returns the name and type of each pet
        // function takes in an array of objects, uses .map to filter through and return a new array of strings that say the pet name is a cat, etc

        const returnPets = (petArray) => {
            return petArray.map(value => {
                return `${value.name} is a ${value.type}`
            })
        }

        console.log(returnPets(pets))








































