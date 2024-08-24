//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof score);// number
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn);//boolean
console.log(typeof outsideTemp);//object
console.log(typeof userEmail); // undefined
console.log(typeof id); //symbol
console.log(typeof anotherId); // symbol
console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function

// https://262.ecma-international.org/5.1/#sec-11.4.3