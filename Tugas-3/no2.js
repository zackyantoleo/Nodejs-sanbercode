const readline = require("readline");

// Membuat antarmuka readline untuk menerima input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

oddeven();

function oddeven() {
  rl.question("Masukkan sebuah angka: ", (input) => {
    const number = parseInt(input);
    if (number % 2 === 0) {
      console.log(`${number} adalah angka genap.`);
    } else {
      console.log(`${number} adalah angka ganjil.`);
    }
    dayOfWeek();
  });
}

function dayOfWeek() {
  rl.question("Masukkan sebuah angka: ", (input) => {
    const number = parseInt(input);
    switch (number) {
      case 1:
        console.log(input + "-adalah hari Senin");
        break;
      case 2:
        console.log(input + "-adalah hari Selasa");
        break;
      case 3:
        console.log(input + "-adalah hari Rabu");
        break;
      case 4:
        console.log(input + "-adalah hari Kamis");
        break;
      case 5:
        console.log(input + "-adalah hari Jumat");
        break;
      case 6:
        console.log(input + "-adalah hari Sabtu");
        break;
      case 7:
        console.log(input + "-adalah hari Minggu");
        break;
      default:
        console.log("Nomor hari tidak valid.");
    }
    rl.close();
  });
}
