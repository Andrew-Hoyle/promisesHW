//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(Object.keys(person3))
console.log(Object.values(person3))
// Show all the favorite shakes
console.log(Object.values(person3.shakes))
console.log(person3.pizza[1])
console.log(person3.ice_cream)
console.log(person3.burgers)
console.log(person3.tacos)


for(let i = 0; i < Object.keys(person3).length; i++){
    if(Array.isArray(Object.values(person3)[i])){
        console.log(Object.values(person3)[i])
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


class Person{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }
    printInfo() {
        return `This person's name is ${this.name} \n This person is ${this.age} years old`
    }
    addOne() {
        if (this.age = this.age){
        return (this.age + 1)
        }
    }
}

let person_a = new Person('Lebowski', 45)
let person_b = new Person('Johnny Cash')
console.log(person_a.printInfo())
console.log(person_b.printInfo())
console.log(person_a.addOne())





// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isLength = (string) => {
    return new Promise ( (resolve,reject) =>{
        if (string.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isLength('Bigolddamnstring watch out')
// Resolver path
.then( (result) => {
    console.log('oooooo Big Words')
})
// Reject path
.catch( (error) =>{
    console.log('Small Number')
})