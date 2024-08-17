// Function adalah sebuah blok program
// yang di rancang agar kode yang digunakan
// lebih praktis dan reusable atau bisa digunakan kembali

/**
 * function declaration
 *
 * function nameFunction(){
 *  // someCode
 * }
 * 
 * with parameter
 * function functionName(param1, param2){
 *      ... // Code
 * }
 * 
 * function expression
 * const functionName = function(param1, param2){
 *      ... // Code
 * }
 * 
 * 
 * function arrow
 * const functionName = (param1, param2) => {
 *      ... // Code
 * }
 * 
 * return function
 * const functionName = (param1, param2) => {
 *      return param1 + param2
 * }
 */

let userName = "Maizha";

function sayHello(){
    //console.log("Hello " + userName);
    let message = "Hello " + userName;
    console.log(message);
}

sayHello(); // Hello Maizha

function showMessage(from, text){
    console.log(from + ": " + text);
}

showMessage("Maizha", "Hello");

function messageSay(from, text){
    from = "*" + from + "*";
    console.log(from + ": " + text);
}
let from = "Ann";
messageSay(from, "Hello");
console.log(from);

// With default value
function awMessage(from, text="Hello"){
    console.log(from + ": " + text);
}
/**
 * Masukan fungsi kedalam parameter
 * function anyMessage(from, text = functionApaSaja()){
 *     ...
 * }
 */

/**
 * return yang kurang enak di lihat dan di baca
 * return (a + b / 3 (23 - 2) + f(2) + n(3))
 * return
 *     (a + b / 3 (23 - 2) + f(2) + n(3))
 * lebih efektif
 * return (
 *       a + b / 3 - 
 *      (23 - 2) + 
 *      f(2) + n(3)
 * )
 */

// Function showPrime

function showPrime(number){
    nextPrime: for(let i = 2; i < number; i++){

        for(let j = 2; j < i; j++){
            if(i % j == 0) continue nextPrime;
        }
        console.log(i);
    }
}
