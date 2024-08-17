/**
 * Biasanya ketika menggunakan function maka bentuknya
 * akan seperti di bawah
 * function someThink(){
 *    //
 * }
 */

// Function Expression
let me = function(){
    console.log('Hello');
};

let cs = me;

me() // Hello
cs() // Hello

function ask(question, yes, no){
    if(confirm(question)) yes()
    else no()
}

function showOk(){
    console.log("You agreed.");
}

function showCancel(){
    console.log("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancel)