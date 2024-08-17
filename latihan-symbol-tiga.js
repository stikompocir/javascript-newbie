const ADDITION = Symbol("addition");
const MULTIPLICATION = Symbol("multiplication");

const mathOperations = {
    [ADDITION]: (a, b) => a + b,
    [MULTIPLICATION]: (a, b) => a * b
}

const num1 = parseFloat(prompt("Masukkan angka pertama: "));
const num2 = parseFloat(prompt("Masukkan angka kedua: "));

const sum = mathOperations[ADDITION](num1, num2);
const product = mathOperations[MULTIPLICATION](num1, num2);

console.log(`Hasil dari ${num1} + ${num2} = ${mathOperations[ADDITION](num1, num2)}`);
console.log(`Hasil dari ${num1} * ${num2} = ${mathOperations[MULTIPLICATION](num1, num2)}`);
console.log(typeof mathOperations[ADDITION]);
console.log(typeof mathOperations[MULTIPLICATION]);