// Higher Order Functions

// Built in Method - a premade function made by JS developers that are easily invokable array.push(newElement) array.length

// Iteration - repeating process that stops until a condition is met.
    // For loops

    // Higher order functions - a function that takes a function as an argument
        // Can only be called on arrays
        // Take up less CPU
    


// .forEach - do something to each element in an array

// aononymous function: const something = () => {}

[3, 4, 5, 6]. forEach((value, index, array) => {
    console.log("value:", value)
    console.log("index:", index)
    console.log("array:", array)
})

// HOF's require value and optional values are index and array
    // Value - value of the current index
    // Index - the current spot in array
    // array - entire array

// const greeter = (parameter) => {}


// .map - will iterate over each element in a array and return a new array with the same length


const myArray = [3, 4, 5, 6]



// v can stand for value here
// const mappedArray = myArray.map(v => {
//     return v * 2
// })



const mappedArray = myArray.map(value => value *2)

console.log(mappedArray)
console.log(myArray)


// Create a function that will take in an array of numbers and will display "even" if the number is even, and "odd" if the number is odd.

// psuedocode
    // declare function called evenOrOdd
    // take in array as a param
    // run .map to iterate over each value in the array
    // use a conditional to evaluate each number using a modulo
        // if even return even
        // if odd return odd

const evenOrOdd = (array) => {
    return array.map(value => {
        if(value % 2 === 0) {
            return "even"
        } else if (value % 2 !== 0) {
            return "odd"
        } else {
            return "Something went wrong"
        }
    })
}

console.log(evenOrOdd(myArray))
console.log(evenOrOdd([8, 9, 50, 90, 35]))


// .filter - filters out what we dont want and keeps what we do want
    // returns a subset of the array
    // has a built in if statement 


// Create a function that filters the 

const myOtherArray = [5, 6, 7, 8, 9, 10]

const myFilteredArray = myOtherArray.filter(value => { 
    return value % 2 != 0})

    console.log(myFilteredArray)


const onlyEvens = (array) => {
    return array.filter(value => value % 2 === 0)
}

console.log(onlyEvens(myOtherArray))


const filterTwentyToForty = (array) => {
    return array.filter(value => {
        return value > 20 && value < 40
    })
}

const prices = [10, 22, 33, 94, 46, 55, 27, 37]
console.log(filterTwentyToForty(prices))








