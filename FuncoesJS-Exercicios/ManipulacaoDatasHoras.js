//MANIPULAÇÃO DE DATAS E HORAS
const prompt = require("prompt-sync")(); 

//Exercício 5-Datas e Horas Atuais
const agora = new Date();

const dia = agora.getDate();
const mes = agora.getMonth() + 1; 
const ano = agora.getFullYear();
const horas = agora.getHours();
const minutos = agora.getMinutes();
const segundos = agora.getSeconds();

console.log("Hoje é " + dia+"/"+ mes+"/"+ano + " e agora são " +horas+":"+ minutos+":"+segundos);

//Exercício 6-Data de Nascimento e Idade
let aniver = Number(prompt("Digite Ano de Nascimento:"));
let anoatual = 2025;
let idade = anoatual - aniver; 
console.log("Você tem " + idade +" anos");

//Exercício 7-Data aaaa-mm-dd e dia da semana
