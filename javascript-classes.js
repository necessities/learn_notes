// CLASSES

// classes are recipes for objects; they have the ingredients and the instructions on what to do with them

const myCar = {
    make: "Subaru",
    model: "CrossTrek",
    year: 2016,
    color: "Blue"
}

console.log(myCar.color)

// specific structure and syntax for declaring classes
// use keyword class to declare class;
// must use PascalCase to declare a class
// basic structure - class + NameOfClass + curly brackets

// constructor is a method that builds the object- pass in parameters that will be the values of our key-value pairs

class MakeCar{
    constructor(carMake, carModel, carYear, carColor){
        this.make = carMake
        this.model = carModel
        this.year = carYear
        this.color = carColor
        this.quantity = 1
    }

    carBoasting() {
        return `My ${this.make} ${this.model} is super cool`
    }
    brokeDown() {
        this.isOperational = false
    }
}

// create a object by using a class
let myOtherCar = new MakeCar("Toyota", "Camry", "2015", "Black")
console.log(myOtherCar)

// difference between class and object; a class is dynamic a object is not




let yourCar = new MakeCar("Audi", "S4", 2022, "White")

console.log(yourCar)

// run a method 

console.log(yourCar.carBoasting())