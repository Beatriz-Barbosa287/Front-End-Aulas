const prompt = require("prompt-sync")(); // Importa o prompt-sync
let idade = Number(prompt("Digite sua idade:"));

if (idade < 16) {
  console.log("Você não pode votar.");
} else if (idade >= 16 && idade < 18) {
  console.log("Seu voto é opcional.");
} else {
  console.log("Seu voto é obrigatório e você pode tirar a CNH.");
}
