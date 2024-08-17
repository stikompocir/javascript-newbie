let i = 0;
while(i < 3){
    console.log(i);
    i++;
}

// Menggunakan satu ekspresi
i = 3;
while(i){
    console.log(i);
    i--;
}

// Menggunakan Satu baris kode
i = 3;
while(i) console.log(i--);

// do while loop
i = 0;
do {
    console.log(i);
    i++;
} while(i < 3);


// For Loop
for (i = 0; i < 3; i++){
    console.log(`Output dari For: ${i}`);
}

// Looping menggunakan If
let a = 0;
if(a < 3) {console.log(`Output dari If: ${a}`); a++} 
if(a < 3) {console.log(`Output dari If: ${a}`); a++} 
if(a < 3) {console.log(`Output dari If: ${a}`); a++} 

let q = 0;
for(;q < 3; q++){
    console.log(q++);
}

// Break Loop
let j = 0;
while(true){
    let v = +prompt("Masukkan sebuah angka","");
    if(!v) break;
    j += v;
}
console.log(j);

// Continue Loop
for(w = 0; w < 10; w++){
    if(w % 2 == 0) continue;
    console.log(w);
}

