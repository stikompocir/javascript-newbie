let value = 2 + 2;

switch(value){
    case 3:
        console.log("Terlalu kecil");
        break;
    case 4:
        console.log("Benar");
        break;
    case 5:
        console.log("Terlalu besar");
        break;
    default:
        console.log("Salah");
}

// Arbitary Expression
let a = "1";
let b = 0;

switch(+a){
    case b + 1:
        console.log("Kode ini di eksekusi, karena +a adalah 1. exacly sama dengan b+1");
        break;
    default:
        console.log("Hmmmmm... Salah Rupanya!!!, arbitari expression");
}

// Grouping case
let x = 3;
switch(x){
    case 4:
        console.log("Right!!!");
    case 3:
    case 5:
        console.log("Salaaaah!");
        console.log("Why dont take a math class?");
        break;
    default:
        console.log('The result is strange. Rally');
}

// Type Matters
let arg = prompt("Input nomor >");
switch(arg){
    case '0':
    case '1':
        console.log("Nol Atau Satu");
        break;
    case 2:
        console.log("Dua");
        break;
    case 3:
        console.log("Tidak pernah di ekseskusi");
        break;
    default:
        console.log("Aku tak mengenalnya");
}