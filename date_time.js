let myDate = new Date()
console.log(myDate);
console.log(myDate.getMonth());
console.log(myDate.getDay());
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());


let myDate1 = new Date(2023, 0, 23)
console.log(myDate1.toDateString());

let myDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myDate2.toLocaleString());

let myDate3 = new Date("2023-01-12")
console.log(myDate3.toLocaleString());

let timeStamp = Date.now()
console.log(timeStamp);

console.log(myDate3.getTime());     // To get time in milliseconds
console.log(Math.floor(Date.now() / 1000));     // To get time in seconds

console.log(typeof (myDate));    // Object


let d = new Date()
d.toLocaleString('default', {
    weekday: "long"
})
console.log(d);