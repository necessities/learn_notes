// JAVASCRIPT LOOPS

// Iteration - repeating something over and over

// For loops don't innately connect to arrays, but they are great for counting

// Info needed to setup a for loop

// Where to start counting
// Where to stop counting 
// How to get from start to stop 

// -- Variable declerations

// var - global scope
// let - only available inside block defined
// const - only avaialble 
if (true) {
    var myName = "Alex"
    console.log(myName) 
    let yourName = "Water" // only works inside block
}

console.log(myName) //works inside and outside block because its var


let myCat = "Rusty"
myCat = "Mazey"

console.log(myCat)

const myDog = "Bruno"
// myDog = "Fang" will not work because it is a const 

console.log(myDog)


// LOOPS

// IT Is common to use the variable name index to store the current count, shortened i

 // for(let index = 0; index < 10; index = index +1 ) // long hand 

 //short hand
 for(let i = 0; i < 10; i++) {
    console.log(i)

 }

// --- Connecting loops to arrays

// Arrays start with 0
// All arrays have a length property
// Once we have an index, we can extract the value

const numsArray = [5, 6,7 ,8 ,9]

for (let i = 0; i < numsArray.length; i+= 2) {
    console.log("index", i)
    console.log("value", numsArray[i])
}

// Creating logic in the loop

for(let i = 0; i <numsArray.length; i++) {
    if(numsArray[i] % 2 !== 0)
    console.log(`${numsArray[i]} is an odd number!`)
}







