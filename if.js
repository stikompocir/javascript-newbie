// let tahun = prompt("Tahun berapa anda lahir?")
// if(tahun < 2000) console.log("Jomblo");

let accessAllowed 
let usia = prompt("How old you are?")
if (usia > 18) {
    accessAllowed = true
} else {
    accessAllowed = false
}
console.log(accessAllowed);

// lebih ringkas
let hasil = (usia > 18) ? true : false
console.log(hasil);

accessAllowed = usia > 18 ? true : false
console.log(accessAllowed);

// Multiple '?'
let umr = prompt("Daerah manakan anda?", 'Kota')
let psn = (umr == 'Jakarta') ? '5.800.000' : 
(umr == 'Surabaya') ? '4.500.000' :
(umr == 'Karawang') ? '3.900.000' : '2.500.000';
console.log(psn);



