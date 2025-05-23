let balance = 120;
console.log(typeof balance );
let anotherBalance = new Number(123);
console.log(anotherBalance.valueOf());
console.log(typeof anotherBalance);

let firstname =undefined;
console.log(firstname); 

let myString = "hello";
let one = "World";
let two =myString+ one;
console.log(two);
console.log(`Hello ${2+2}`);

// let sm1 = Symbol();
// let sm2 = Symbol();
// console.log(sm1==sm2);


let sm1 = Symbol("Hitesh");
let sm2 = Symbol("Hitesh");
console.log(sm1==sm2);