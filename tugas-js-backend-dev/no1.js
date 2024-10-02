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
};

let numbers = [1, 2, 3, 4, 5];

let tambah = number + 5;
let kali = number * 2;
let bagi = number / 2;

let isEqual = number === 10;
let isGreater = number > 5;
let isEqual2 = number === 5;
let isGreater2 = number > 20;

console.log(`Nama: ${name}, Usia: ${age}, Kota: ${city}`);
console.log(
  "\nTipe Data Primitif:",
  number,
  bigIntNum,
  isMarried,
  surname,
  score,
  symbol
);
console.log("Tipe Data Non-Primitif:", person, numbers);
console.log(
  "\nAritmatika: \nPertambahan 10 + 5 =:",
  tambah,
  "\nPerkalian 10 * 2 =:",
  kali,
  "\nPembagian 10 / 2 =:",
  bagi
);
console.log(
  "\nPerbandingan: \n10 sama dengan 10?",
  isEqual,
  "\n10 lebih besar dari 5?",
  isGreater,
  "\n10 sama dengan 5?",
  isEqual2,
  "\n10 lebih besar dari 20?",
  isGreater2
);
