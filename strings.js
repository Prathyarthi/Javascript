// String concatenation
const name = "Prathyarthi"
console.log("Name : " + name);

// String Interpolation
console.log(`Hello, my name is ${name}`);

// Another way to declare a string
const name1 = new String("HelloWorld")
console.log(name1);


console.log(name1.__proto__);
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.charAt(4));
console.log(name1.indexOf('e'));

const newString = name1.substring(0, 7)
console.log(newString);

const anotherString = name1.slice(0, 7)
console.log(anotherString);

// Slice method takes negative values whereas substring does not

const string1 = "      hello"
console.log(string1.trim());       // Removes extra spaces

const string2 = "Hello-World"
console.log(string2.replace("-", "_"));

console.log(string2.includes('W'));

const string3 = "Hello World I am Amogh"
console.log(string3.split(" "));

const string4 = "Hello-World-I-am-Amogh"
console.log(string4.split("-"));