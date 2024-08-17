let as = (a, b) => a + b;
console.log(as(1, 2));

let double = n => n * 2;
console.log(double(3));

let sayHi = () => console.log("Hello");
sayHi();

let age = promp("What is your age? ", 18)

let welcome = (age < 18) ?
    () => console.log("Hello") :
    () => console.log("Welcome");
welcome();

// Multiplle arrow function
let sum = (a, b) =>{
    let result = a + b;
    return result;
};

console.log(sum(1, 2));
