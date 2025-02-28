const prompt = require("prompt-sync")(); // Importa o prompt-sync

function boasVindas(nome) {
    return `Olá, ${nome}! Seja bem-vindo(a)!`;
}
const nomeUsuario = prompt("Digite seu nome: ");

console.log(boasVindas(nomeUsuario));