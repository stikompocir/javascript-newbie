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

Tentu! Mari kita bahas kedua baris kode ini:

1. `console.log(height || 100);`
   - Operator `||` (OR) digunakan di sini. Jika nilai `height` adalah falsy (misalnya 0), maka nilai yang akan dicetak adalah 100 (karena 0 dianggap falsy). Namun, jika `height` memiliki nilai truthy (misalnya 42), maka nilai `height` yang akan dicetak.
   - Dalam kasus ini, karena `height` adalah 0 (falsy), hasil yang dicetak adalah 100.

2. `console.log(height ?? 100);`
   - Operator `??` (nullish coalescing) digunakan di sini. Ini memeriksa apakah `height` adalah null atau undefined. Jika ya, maka nilai yang akan dicetak adalah 100. Jika `height` memiliki nilai selain null atau undefined, maka nilai `height` yang akan dicetak.
   - Dalam kasus ini, karena `height` adalah 0 (bukan null atau undefined), hasil yang dicetak tetap 0.

Jadi, output yang akan Anda lihat di konsol adalah:
```
100
0
```
