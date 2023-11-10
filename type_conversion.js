score = "33"

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);

// Other types into Number
// "3" -> 3
// "3abc" -> NaN
// true -> 1
// undefined -> NaN
// null -> 0

let isLoggedIn = 1
let boolIsLogggedIn = Boolean(isLoggedIn)
console.log(boolIsLogggedIn);