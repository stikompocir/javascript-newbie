/**
 * Basic Operator Matematika
 *  * perkalian
 *  / pembagian
 *  + penjumlahan
 *  - pengurangan
 *  % sisa dari pembagian
 *  ** pangkat
 * 
 */

// let x = 1
// x = -x
// console.log(x);

let x = 3, y = 2
console.log(x - y);

// Hasil bagi
console.log(5 % 2);

// Pangkat
console.log(2 ** 3);

console.log(2 ** (1/2));

let s = 'Hello' + 'World!'
console.log(s); // HelloWorld!
console.log('1' + 1); // 11
console.log(1 + '1'); // 11
console.log(2 + 2 + '2'); // 42
console.log('1' + 2 + 2); // 122

// Substract

console.log(1 - '1'); // 0
console.log('1' - 1); // 0
console.log(6 - '2'); // 4
console.log('1' - '1'); // 0

// No effect on numbers
// let z = 1;
// alert( +z ); // 1

// let v = -2;
// alert( +v ); // -2

// // Converts non-numbers
// alert( +true ); // 1
// alert( +"" );   // 0

let anggur = "2"
let mangga = "3"
console.log(anggur + mangga);
console.log(+anggur + +mangga);

// Assigment
let abc = 2 + 2 + 1;
console.log(abc);

let r = 2, b = 3;
let k = 3 - (r = b + 1)
console.log(r);
console.log(k);

// Chaining assigment
let m, n, p
m = n = p = 2 + 2
console.log(m);
console.log(n);
console.log(p);

//Modify in Place
let i = 2
i = i + 3
i = i * 4
console.log(i); // 20

i += 6
i *= 2
console.log(i);

let j = 3
j *= 2 + 5
console.log(j); // 21

let counter = 4
//console.log(counter++); // 5
console.log(counter--); // 4

let aa = ++counter
console.log(aa); // 5
counter = 0
++counter
counter++
console.log(counter);

counter = 1
console.log(2 * ++counter); // 4

























