let userName = prompt("Siapa anda? >")
if (userName === "Admin") {
    let pass = prompt("Pass? >", '')
    if (pass ==="TheMaster") {
        console.log("Welcome");
    } else if (pass === '' && pass === null){
        console.log('Canceled');
    } else {
        console.log('Wrong password');
    }
} else if (userName || null && userName || ''){
    console.log('Canceled');
} else {
    console.log('I dont know you');
}
