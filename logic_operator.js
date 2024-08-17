let themeDark = false;

const userPrompt = prompt("Pilih Tema: gelap atau terang?");
const userInput = userPrompt.toLowerCase();

if (userInput === "gelap"){
    themeDark = true;
} else if (userInput === "terang"){
    themeDark = false;
} else {
    console.log("Input tidak diketahui");
}

console.log(`Tema telah diubah menjadi ${themeDark ? "gelap" : "terang"}`);
