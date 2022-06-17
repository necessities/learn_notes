// Javascript Functions 

// Functions - run when we decide and are reusable

// Encapsulation - Functions have a input and output, no other data should affect the function, this is a part of being object orientated



// declare function - (input) => {what it does}
// Input is a special variable that belongs to the function - parameter

const makeCoffee = (coffeeType) => {
    return `${coffeeType} is made!`
}


// invoking or calling the function - telling the function to run - function(input)

console.log(makeCoffee("Latte"))

console.log("-- New excercise --")

// psuedo code - writing process notes in regular english
// Creat a function that takes a coffee type and a coffee size and tells me my order and how much it costs. All smalls are $4, mediums $5, and larges $6.
// - function expression
// - parameters : coffee and coffeeSize
// - make a decision on the size to determine the Price
// - return the string interpolation with correct order

const makeCoffee1 = (coffeeBean, coffeeSize) => {
    if(coffeeSize.toLowerCase() === "small") {
        return `${coffeeBean} is $4`
    } else if (coffeeSize.toLowerCase() === "medium") {
        return `${coffeeBean} is $5`
    } else if (coffeeSize.toLowerCase() === "large") {
        return `${coffeeBean} is $6`
    } else {
        return "Please try your order again"
    }
}

console.log(makeCoffee1("Latte", "small"))
console.log(makeCoffee1("Mocha", "Medium"))

// Adding abstraction by putting order in variables

const coffeeOrder = "Mocha"
const size = "Medium"

console.log(makeCoffee1(coffeeOrder, size))