// console.log(variabel); // referenceError

// Hoisting
// var res;
// console.log(res);
// res = "Maizha"

/**
 * Demonstrates the concept of variable hoisting in JavaScript.
 * 
 * @return {undefined} This function does not return any value.
 */
// function hoist(){
//     var msg;
//     console.log(msg);
//     msg = "Hello World"
// }

function hoist(){
    var msg = "Hello World"
    console.log(msg);    
}

hoist();

// const PI = 3.14
// PI = 3.1415
// console.log(PI); // TypeError: Assignment to constant variable.

// function getRadius(rad){
//     console.log(circumReference); // ReferenceError: circumReference is not defined
//     circumReference = 2 * PI * rad;
//     const PI = 3.14
// }

// getRadius(10);

// Function declarated
hoisted();

function hoisted(){
    console.log("Hoisted Function, hello");
    
}

// expression();
// var expression = function(){
//     console.log("Apakah bisa berhasil tampil?");
//     // Sayangnya tidak berhasil
//     // TypeError: expression is not a function
// }

var double = 22;
function double(num){
    return(num*2);
}
console.log(typeof double); // Output: number

var tri;
function tri(num) {
    return (num * 3);
}
console.log(typeof tri); // function

// Class Declarated
/**
 * Hmmm, ReferenceError: Cannot access 'Maizha' before initialization
 * Muncul error, karena class maizha belum di-declare
 * 
 * Solusi: Pindahkan class ke variabel
 */
class Maizha{
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    // set height, weight
    setHeight(height){
        this.height = height;
    }
    setWeight(weight){
        this.weight = weight;
    }

    // get height, weight
    getHeight(){
        return this.height;
    }
    getWeight(){
        return this.weight;
    }
    // Set firstName
    setFirstName(name){
        this.firstName = name;
    }
    // Set lastName
    setLastName(name){
        this.lastName = name;
    }

    //get fullName
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}
var mms = new Maizha();
mms.setHeight(120);
mms.setWeight(50);
mms.setFirstName("Maizha");
mms.setLastName("Shaffah");
console.log(`Full Name: ${mms.getFullName()} tinngi anda: ${mms.getHeight()} dan berat badan anda: ${mms.getWeight()}`);


var Polygon = class{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}
var Square = new Polygon();
Square.height = 12;
Square.width = 17;
console.log(Square);

// TypeError: Polygon is not a constructor
// var Polygon = class{
//     constructor(height, weight){
//         this.height = height;
//         this.weight = weight;
//     }
// }



