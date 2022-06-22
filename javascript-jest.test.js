// Jest - Javascript testing framework


// describe(" ", () => {
//     it(" ", () => {
//         expect().toEqual()
//         expect().toEqual()
//     })
// })


// Yarn - Package manager for javascript that contains code being shared from other developers

// $ yard add jest 
// This command will add jest to the folder

// ---- TDD - Test Driven Development
// Writing the test for the code first; check to see if it fails
// RED - GREEN - REFACTOR

// 1. Write test first 
// 2. Run testing suite to see a failing test - RED
// 3. Write the code
// 4. Run the testing suite to see a passing test (GREEN)
// 5. Refactor confidently if necessary (REFACTOR)


// Create a function called greater that returns a string that says Hi Delta 2022!

// Input: None
// Output: Hi Delta 2022!

// a describe method lists the name of the function or the name of the test
// anonymous function : () => {}

describe("greeter", () => {
    it("returns a string that says Hi Delta 2022!", () => {
        expect(greeter()).toEqual("Hi Delta 2022!")
    })
})

// to run the test $ yarn jest

// ReferenceError: greeter is not defined (RED)

const greeter = () => {
    return "Hi Delta 2022!"
}

// .toEqual means output === expectOutput

// --- Create a function that logs help others if you do understand or ask questions if you dont understand

// Input: "yes"
// Output: "help others"

// Input: "no"
// Output: "ask questions"

describe("doYouUnderstand", () => {
    it("logs help others and ask questions if answered yes or no", () => {
        expect(doYouUnderstand("yes")).toEqual("help others")
        expect(doYouUnderstand("no")).toEqual("ask questions")
        
    })
})

const doYouUnderstand = (string) => {
    if (string === "yes") {
        return "help others"
    } else if (string === "no") {
        return "ask questions"
    }
}

doYouUnderstand("yes")




// --- Prompt : Create a function that allows a customer to filter the cost of an item dynamically by selecting the cost range


// Input: [10, 22, 33, 94, 46, 55, 27, 37, 999, 355], 20, 40
// Output: [22, 33, 27, 37]

describe("priceFilter", () => {
    it(" Returns a price between a chosen range", () => {
        const prices = [10, 22, 33, 94, 46, 55, 27, 37, 999, 355]
        const expectedPriceResults = [22, 33, 27, 37]
        expect(priceFilter(prices, 20, 40)).toEqual(expectedPriceResults)
    })
})

// psuedo code for function; called priceFilter; set three parameters, array, num1, num2; use .filter() HOF to iterate on array; return only values greater than num 1 and less than num 2

const priceFilter = (array, num1, num2) => {
    return array.filter(value => {
        return value > num1 && value < num2
    })
}














