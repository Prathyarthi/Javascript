let a = "hello"
let b = 23
let c = true
let d;
let e = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);       // Note : null is a object

// Primitive
// String,Number,Boolean,null,undefined,Symbol,BigInt
// Examples
const score = 2
const scoreValue = 2.5
const isLoggedIn = false
const temperature = null
let userEmail;     // undefined
const id = Symbol('123')      // To make it unique
const bigNumber = 7214361543487261n   // bigInt

// Referene(Non-Primitive)
// Array,Objects,Functions

const fruits = ["jackfruit", "Mango", "Guava"]
let obj = {
    name: "Prathyarthi",
    age: 19
}

const func = function () {
    console.log("Hello");
}


// Note : All non-primitive datatypes type is returned as object,and also null is a object as it is unique