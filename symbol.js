let firstname = Symbol('firstname'), lastName = Symbol('lastname')
console.log(firstname, lastName);
console.log(typeof firstname, typeof lastName);

const sim1 = Symbol();
const sim2 = Symbol("foo");
const sim3 = Symbol("foo");

console.log(sim2 === sim3); // false

const myObj = {
    [sim1]: "Nilai dari symbol",
}
console.log(myObj[sim1]);


class MyClass{
    constructor(){
        this[sim2] = "Property private";
    }
    // getPrivateValue
    getPrivateValue(){
        return this[sim2];
    }
}

const instance = new MyClass();
console.log(instance.getPrivateValue());

