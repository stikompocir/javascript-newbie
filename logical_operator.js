// Logical Operator ||, &&, !, ??

let a = 3 || 4
console.log(a); // 3

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

if (1 || 0) {
    console.log('yes');
}

let hour = 9;
if(hour < 10 || hour > 18 ){
    console.log('Sudah tutup');
}

let weekEnd = true
if (hour < 10 || hour > 18 || weekEnd) {
    console.log('Kantor sudah tutup');
}

console.log( 1 || 0); // 1
console.log(null || 1); // 1
console.log(null || 0 || 1); // 1
console.log(undefined || null || 0); // 0

let firstName = "", lastName="", nickName= "SuperCoder";
console.log(firstName || lastName || nickName || "Anonymous");

// AND
let result = 2 && 3
console.log(result);

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

hour = 12
let minut = 30
if (hour == 12 && minut== 30){
    console.log("Time is now 12:30");
}

if (1 && 0) { // evaluated as true && false
    aleconsole.log( "won't work, because the result is falsy" );
  }

// ! (NOT)
console.log(!true); // false
console.log(!0); // true
console.log(!!"non-empty string"); // true
console.log(!!null); // false
console.log(Boolean("non-empty string")); // true
console.log(Boolean(null)); // false

// Latihan
console.log(null || 2 || undefined); // 2
console.log(console.log(1) || 2 || console.log(3)); // 1 2
console.log( 1 && null && 2); // null
console.log(console.log(1) && console.log(2)); // 1 2
console.log(null || 2 && 3 || 4); // 3
// cek range usia
let age = 25
if ( age >= 18 && age <= 21) {
    console.log(age); // 25 
    
}
















