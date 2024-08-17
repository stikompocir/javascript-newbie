const mathOperations = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
}

const num1 = parseFloat(prompt("Masukkan angka pertama: "));
const num2 = parseFloat(prompt("Masukkan angka kedua: "));

const sum = mathOperations.add(num1, num2);
const product = mathOperations.multiply(num1, num2);

console.log(`Hasil dari ${num1} + ${num2} = ${mathOperations.add(num1, num2)}`);
console.log(`Hasil dari ${num1} * ${num2} = ${mathOperations.multiply(num1, num2)}`);
console.log(typeof mathOperations.add);
console.log(typeof mathOperations.multiply);

