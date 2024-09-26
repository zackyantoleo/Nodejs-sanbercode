let age = 25;
const name = "Athif";
var city = "Jakarta";

let number = 10;
let bigIntNum = 123456789012345678901234567890n;
let isMarried = false;
let surname;
let score = null;
let symbol = Symbol("symbol");

let person = {
  firstName: "Athif",
  lastName: "Zakiyanto",
  age: 25,
}; // Object

let numbers = [1, 2, 3, 4, 5];

let sum = number + 5;
let product = number * 2;
let remainder = number % 3;

let isEqual = number === 10;
let isGreater = number > 5;

console.log(`Nama: ${name}, Usia: ${age}, Kota: ${city}`);
console.log(
  "Tipe Data Primitif:",
  number,
  bigIntNum,
  isMarried,
  surname,
  score,
  symbol
);
console.log("Tipe Data Non-Primitif:", person, numbers);
console.log(
  "Aritmatika -> Sum:",
  sum,
  ", Product:",
  product,
  ", Remainder:",
  remainder
);
console.log(
  "Perbandingan -> Is Equal to 10?",
  isEqual,
  ", Is Greater than 5?",
  isGreater
);
