let teaFlavours = ["green tea","black tea"];
console.log(teaFlavours[0]);

let teaF = new Array("great","berlin");
console.log(teaF);

let cities = ["London","Tokyo","Paris","New York"];
let favouriteCity = cities[2];
console.log(favouriteCity);

cities.push("Berlin");
console.log(cities);

cities[cities.length]="jhvj";
console.log(cities);

console.log(cities.length);


let city = cities.pop();
console.log(city);
console.log(cities);

let a =["India","California"];
let b = a.slice();
let c = [...a];
a.pop();
console.log([...a]);

let a1 = ["Paris",1];
let a2 = ["India"];

let a3 = a1.concat(a2);
console.log( a3);
let len = a3.length;
console.log(len);


let doesContain = a3.includes(2);
console.log(doesContain);
