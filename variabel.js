
// alert("Hello World")
// alert(1 + 1 - 2 * 5 / 3)
/**
 * Contoh salah penggunaan aller
 */
// alert("Hello World")[1,2].forEach(alert);

/**
 * Variabel
 */

// let msg 
// let a = 2
// msg = 'Hello'
// alert(msg + ' ' + a)

/**
 * Multiple declaration variabel
 */
// let name = 'Maizha', lastName = 'Shaffah', umur = 20

// a = 2, b = 3, c = 4
// alert(name + ' ' + lastName + ' ' + umur)

/**
 * We can also declare two variables and copy data 
 * from one into the other.
 * 
 * let variabel tidak bisa digunakan bersamaan atau dengan nama
 * variabel yang sama
 * let a = 2
 * let a = 3
 * 
 * ini akan muncul error
 * 
 * nama variabel harus unik
 * ch: firstName, lastName, fullName, etc
 */

// let abc = 'Hello'
// let cba

// cba = 'Hello!'

// alert(abc)
// alert(cba)

/**
 * Constant adalah variabel yang nilainya tidak bisa diubah
 */
const PI = 3.14
const COLOR_RED = '#F00'
const COLOR_BLUE = '#00F'
console.log(PI)
console.log(COLOR_BLUE)
console.log(COLOR_RED)

/**
 * We can declare variables to store data by using the var, let, or const keywords.

let – is a modern variable declaration.
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
const – is like let, but the value of the variable can’t be changed.
Variables should be named in a way that allows us to easily understand what’s inside them.
 */

/**
 * Latihan
 * 
 * 1. Deklarasikan variabel admin dan name
 * 2. Tambahkan value pada variabel admin = Maizha
 * 3. Copy kan value dari name ke admin
 * 4. Cetak alert harus mengeluarkan output Maizha
 */

let admin, name

name = 'Maizha'
admin = name
alert(admin)

// const BRITH_DAY = '20 Januari 1999'
// // Hitung umur BRITH_DAY dan simpan pada variabel umur
// // Cetak umur

