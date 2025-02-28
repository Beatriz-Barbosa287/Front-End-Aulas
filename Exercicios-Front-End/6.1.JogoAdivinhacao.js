const prompt = require("prompt-sync")(); // Importação prompt-sync

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
const palpite = parseInt(prompt("Adivinhe um número entre 1 e 10: "));

if (palpite === numeroAleatorio) {
    console.log("Parabéns! Você acertou!");
} else {
    console.log(`Que pena! O número correto era ${numeroAleatorio}.`);
}

