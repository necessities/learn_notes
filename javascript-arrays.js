// ARRAYS

// data structures used to store a collection of data in a indexed list

[1, 2, 3, 4, 5]

//zero based index elements are seperated by commas insie a square bracket 

let numbers = [1, 2, 3, 4, 5 ]

console.log(numbers[0]) // prints 1
console.log(numbers.length) // prints total length of the array

console.log(numbers[10]) // will print undefined as if array doesnt exist
console.log(numbers[2] = 15) // will reassign the value of the 3rd element
console.log(numbers)

let netArray = ["cat", "dog", true, 42, false] // Javascript can store different data types in the same array

let emptyArray = [] // arrays can exit empty 

// METHODS can be either SETTERS or GETTERS 
// SETTERS - mutate and change the original array
// GETTERS - retreives the data from the array without changing

// -- SETTER METHODS -- 

// .push() - adds items to the end of array 

let names = ["Fred", "Tom", "Jane"]
console.log(names)
names.push("Sally")
console.log(names)

// .unshift adds to the beginning of array

names.unshift("Alex")
console.log(names)

// .pop() - removes last element from array and returns value

console.log(names.pop()) // returns the last value which it removed
console.log(names)

// .shift() removes the first element from an array and returns its value

let removedItem = names.shift()
console.log(removedItem)
console.log(names)

// -- GETTERS METHODS --

// .concat() add multiple arrays together


let nums = [1, 2, 3]
let biggerNums = [4, 5, 6]


console.log(nums.concat(biggerNums))

// .split() - turns a string into a array 

// ex. console.log("hello".split(""))

let split = "hello".split("")

// .join() joins seperate elements of an array into one value

console.log(split.join(""))
// console.log(split.join()) - also works but doesnt join it into a string

// -- DESTRUCTURING an array --

let fullName = ["Alex", "Ballou"]

// You can create a new array of variables and assign the respective values from an array in order

let [firstName, lastName] = fullName
console.log(firstName)










