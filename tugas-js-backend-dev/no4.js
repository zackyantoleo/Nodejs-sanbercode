const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateCircleArea(radius) {
  const pi = 3.14159;
  return pi * radius * radius;
}

rl.question("Masukkan jari-jari lingkaran: ", (radius) => {
  radius = parseFloat(radius);
  if (isNaN(radius) || radius <= 0) {
    console.log("Jari-jari tidak valid. Harus berupa angka positif.");
  } else {
    console.log(
      `Luas lingkaran dengan jari-jari ${radius} adalah: ${calculateCircleArea(
        radius
      )}`
    );
  }
  rl.close();
});
