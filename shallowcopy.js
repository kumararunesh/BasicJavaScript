let originalArray = [1, 2, [3, 4]];
let shallowCopyArray = [...originalArray]; // Using spread syntax for shallow copy

shallowCopyArray[2][0] = 10;

console.log(originalArray); // Output: [1, 2, [10, 4]]
console.log(shallowCopyArray) //



let a = [1,2,3]
let b = [...a]
b[1] = 4

console.log(b) // 4
console.log(a) // 2
