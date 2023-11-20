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

// Stack(primitive) and Heap(non-primitive) : 
let name1 = "Amogh"
let name2 = name1
name2 = "Hello"
console.log(name1);
console.log(name2);

// Primitive datatypes will be the call by value. Here name2 will get the copy of name1, so when we change name2, the original(name1) will not get changed

let user1 = {
    email: "hello@gmail.com"
}

let user2 = user1
user2.email = "helloworld@gmail.com"

console.log(user1.email);
console.log(user2.email);

// Non-Primitive datatypes will be the call by reference. Here user2 will get the reference of user1 directly, so when we change user2, the original(name1) will also be changed because direct reference of the user1 is given

// Detailed notes in notion