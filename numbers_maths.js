num = 100

console.log(num.toString());
console.log(typeof (num.toString()));
console.log(num.toString().length);

console.log(num.toFixed(2));    // Two decimal points

num1 = 123.588
console.log(num1.toPrecision(4));     // Precision at 4th digit

num2 = 10000000
console.log(num2.toLocaleString());
console.log(num2.toLocaleString('en-IN'));



// Math
console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));         // It gives the above value
console.log(Math.floor(4.6));
console.log(Math.min(4, 6, 12, 2));
console.log(Math.max(4, 6, 12, 2));
console.log(Math.random());       // Gives random value between 0 and 1
console.log((Math.random() * 10) + 1);

// To get a random number between a specific range : 
min = 10
max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);