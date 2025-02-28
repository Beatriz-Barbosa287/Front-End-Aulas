//FUNÇÕES MATEMÁTICAS
const prompt = require("prompt-sync")(); 


// Exercício 1-Número Aleatório
console.log(Math.floor(Math.random() * 100) + 1); 


//Exercício 2-Raiz Quadrada
let num = Number(prompt("Digite um número:"));
console.log("A raiz quadrada é: "+ (Math.sqrt(num))); 

//Exercício 3-Valor Máximo
let valor1 = Number(prompt("Digite o Primeiro número:"));
let valor2 = Number(prompt("Digite o Segundo número:"));
console.log("o maior Número é:" + (Math.max(valor1, valor2)));


//Exercício 4-Arredondamento
let numarrend = Number(prompt("Digite um número decimal:"));
console.log("Opção Arredondamento 1: " + (Math.ceil(numarrend)));
console.log("Opção Arredondamento 2: " + (Math.floor(numarrend)));
console.log("Opção Arredondamento 3: " + (Math.round(numarrend)));
