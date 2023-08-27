const name = "Bagladesh";
const age = 52;
const independent = true;
const numbers = [22, 44, 66, 23, 55, 88, 3, 24, 55, 9, 44, 33, 22];
const table = { laptop: "asus", age: 7, color: "black" };
function value(n1, n2) {
  return n1 + n2;
}

console.log(typeof name);
console.log(typeof age);
console.log(typeof independent);
// console.log(typeof numbers);
// object er type jante hole Array.isArray(arryer naam) evabe likte hobe
console.log(Array.isArray(numbers));
console.log(typeof table);
console.log(typeof value);

// ---------------------------------------------------------
// includes,indexof() : kono ekta array er modde kono upadan ase kina eta ei 2 vabe check kor jai. Normally amra includes diea check korbo.

console.log(numbers.includes(44));
console.log(numbers.includes(4));
// indexof temon ekta use hoi na
console.log(numbers.indexOf(999));

// concat: put two array together
let newArray = [333, 555, 77, 999, 333, 444, 555, 100];
console.log(newArray.concat(numbers));
