// Javascript Intro


// `CMD /` - Comments out code

//  Javascript is a dynamically typed language
//  Data types can be changed while being used

// Interpreted language - read at run time; it may vary on different browsers

// Scripting language - logic can be read and understood by the computer

//  At is simplest javascript can be broken down to data types, they are the building blocks and the smallest piece of javascript you can work with

// What is a data type? - It tells us the type of value a variable has and what type of operations can be applied to it wiithout causing an error

//  Six primitive data types in Javascript - Numbers, boolean, strings, symbol, undefined, null 
    // Numbers
    // Strings
    // Boolean
    // Symbol
    // Undefined
    // Null

    // -Data Types-

    //  ---- Numbers can be integers, positive or negative; or can be floats with a decimal
    // Numbers can do operations add, subtract, multiply, divide, modulo 

    //  Console log: built in method that prints out the evaluation of whats in the parentheses that follow it to the console (terminal)
    console.log(5 + 3)
    console.log(5 - 3)
    console.log(5 * 3)
    console.log(5 / 3) // outputs a float automatically 

    // Modulo 
    console.log(6 % 2) // outputs the remainder of 6 / 2 
    console.log(5 % 2)


    // ---- Strings - defined by quotes and wrapped in quotations

    console.log("This is a string example.")
    console.log('Here is another example with sinlge quotes.')

    // In the console, strings and numbers are different colors.

    // String Concatentation - joining two strings by using 

    console.log("Hello " + "world") // space added after Hello
    console.log("36" + 36) // 3636 - In this operation because javascript is dynamic it does type coersion and changes the second data type to match the first 

    // Type coersion - Javascript changes the data type to fulfill the process it wants to run 

    //  ---- Boolean - true or false calue, can be used for variosu operations - equality operators, relational operators, logical operators

    // ---- Undefined - declared value that has not been yet assigned

    // ---- Null - has no value. It is not 0, it is not undefined, not an empty string just a lack of value. 

    // ---- Symbol - used for accessing keys in a javascript object (Will cover late)

    // -Variables- 
        // 3 ways to declare
        // - var - global variable, value can be re asigned 
        // - let - value can be re asigned ( the preferred way to create a variable)
        // - const - value cannot change 

        // Variable names can be anything, Ideally a meaningful name that has a purpose
        // Naming conventions: Camelcase is the standard for varaible names: myFavoriteNumber 
        // the assignment operator is a single equal sign: =

        var myFavoriteNumber = 42
        console.log(myFavoriteNumber)
        console.log(myFavoriteNumber + 10)

        // reassigning the variable a new value
        myFavoriteNumber = 15
        console.log(myFavoriteNumber)

        var yourFavoriteNumber = 7
        
        console.log(myFavoriteNumber * yourFavoriteNumber)

        // Concatinating with variables
        console.log("My favorite number is " + myFavoriteNumber) // My favorite number is 15

        // -String properties and Built in methods

        var message = "Hello wordl!"
        // length property - tells us how many characters the vale of the variable is
        console.log(message.length) // 12

        // index - tells us the location of each character within the string (returns a number)
        // bracket notation is used to specify the index location
        console.log(message[0]) // H
        console.log(message.charAt(4))

        // includes() - checks for a subset of characters, returns a Boolean 
        console.log(message.includes("He")) // returns True 

        // slice() - returns a subset of characters. Takes 2 arguments
        console.log(message.slice(0, 3)) // returns Hel 




// -  Javascript conditionals

// Conditionals are also known as decision trees or if else statements

// situations where outcomes are either true or false (boolean)
// Equality operators

// Strict Equality
// === checks both data type and value
var myName = "Alex"
console.log("Alex" === myName)
console.log("Other Name" === myName)

myFavoriteNumber = 7
console.log(myFavoriteNumber === 7) // true
console.log(myFavoriteNumber === "7") // false, different data type

// ---- Loose Equality

// == Checks only the value
// uses TYPE COERSION

// type coersion = process of converting value from one data type to another data type 

console.log(myFavoriteNumber == 7) // true
console.log(myFavoriteNumber == "7") // true, string was converted to number 

// STRICT EQUALITY IS PREFFERED METHOD ===



// -- RELATIONAL OPERATORS
// returns comparisons from booleans, >, <, <=, >=

console.log(3 > 4) // false
console.log(3 >= 3) 

// LOGICAL OPERATORS

// evaluate multiple statements at the same time
// AND &&

var greeting = "Hello!"
var num = 4
console.log(num > 2 && "Hello!" === greeting)
console.log(num < 2 && "Hello!" === greeting)

// OR || 

console.log(num < 2 || "Hello!" === greeting)

// if one is true, its true

// NEGATION

// negate a statement by using its logical opposite
// BANG operator !

console.log(num !== greeting)

// ---- CONDITIONALS
// aka if else statements


if (true) {
    console.log(" I'm true")
} 

// -- 

if (false) {
    console.log("I'm true")
} else {
    console.log("Here is the else")
}


// side note indentation is important!

var myName1 = "Alex"

if(myName1 === "Other") {
    console.log("Hey Alex!")
} else {
    console.log("Hey!")
}

// else if

var num1 = 24
var num2 = 24

if(num1 > num2) {
    console.log(`${num1} is greater than ${num2}`)

} else if (num1 < num2) {
    console.log(`${num1} is less than ${num2}`)
} else if (num1 === num2) {
    console.log(`${num1} and ${num2} are the same!`)
} else {
    console.log("Not valid")
}

// STRING INTERPOLATION
// like string concatination but with variables
// use backticks `` to signify that its a string but im going to be interpolating

// JS runs line by line, more specific conditionals should go first
// can have two true statements but program will only run the first one, the second will not run

// what are the three type of, relational, equality, and logical 









