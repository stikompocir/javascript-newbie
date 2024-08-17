// Interaksi antar pengguna menggunakan Symbol
// const ADDITION = Symbol("addition");
// const MULTIPLICATION = Symbol("multiplication");

// fungsi Untuk menghitung jumlah
function calculateSum(a, b){
    return a + b;
}

// Fungsi Untuk menghitung perkalian
function calculateProduct(a, b){
    return a * b;
}

const num1 = parseFloat(prompt("Masukkan angka pertama: "));
const num2 = parseFloat(prompt("Masukkan angka kedua: "));

const sum = calculateSum(num1, num2);
const product = calculateProduct(num1, num2);

console.log(`Hasil dari ${num1} + ${num2} = ${sum}`);
console.log(`Hasil dari ${num1} * ${num2} = ${product}`);