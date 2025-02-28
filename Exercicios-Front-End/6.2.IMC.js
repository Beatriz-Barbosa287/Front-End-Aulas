const prompt = require("prompt-sync")(); // Importa o prompt-sync
const peso = parseFloat(prompt("Digite seu peso em kg: "));
const altura = parseFloat(prompt("Digite sua altura em metros: "));

const imc = peso / (altura * altura);

let categoria;
if (imc < 18.5) {
    categoria = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    categoria = "Peso normal";
} else if (imc >= 25 && imc <= 29.9) {
    categoria = "Sobrepeso";
} else {
    categoria = "Obesidade";
}

console.log("Seu IMC é" + imc.toFixed + "- Categoria: " + categoria);
