const prompt = require("prompt-sync")(); // Importa o prompt-sync
let numero = parseInt(prompt("Digite um número:"));

console.log(`Tabuada do ${numero}:`);
for (let i = 1; i <= 100; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
