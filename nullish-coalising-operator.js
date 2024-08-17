// nullish coalescing operator '??' Ternary operator
/**
 * `a !== null && a !== undefined` : Bagian ini mengevaluasi apakah
 * a tidak bernilai null dan tidak bernilai undefined. Jika kedua
 * kondisi tersebut bernilai true, a akan di-return. Jika kedua
 * kondisi tersebut bernilai false, a akan di-return 0
 * 
 * `? a : 0` :  Ini adalah sintaks dari ternary operator. 
 * Jika kondisi sebelum tanda tanya (?) benar, 
 * maka nilai sebelum titik dua (a) akan digunakan. 
 * Jika kondisi salah, maka nilai setelah titik dua (0) 
 * akan digunakan.
 */
let result = (a !== null && a !== undefined) ? a : 0;
console.log(result); 
/**
 * nullish coalescing operator menjadi salah satu pemecah masalah
 * di atas `??
 */
let user;
console.log(user ?? 'Guest'); // user = undefined

user = 'Admin';
console.log(user ?? 'Guest'); // user = 'Admin'

let heiht = null, width = null;
let area = (heiht ?? 100) * (width ?? 50);
console.log(area);

// Syntax error
// let a = 1 && 2 || 3
// Harus seperti ini
// let a = 1 && (2 || 3)
// let a = (1 && 2) || 3
let ret = 1 && (2 || 3)
console.log(ret); // 1
let x = (1 && 2) || 3
console.log(x); // 2 

