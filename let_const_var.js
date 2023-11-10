// const cannot be changed
// var did not have control over the scope. If same variable is used outside the scope, it would change the value of the variable everywhere

const a = 5
let b = 5

console.log(a);
console.log(b);
console.table([a,b])