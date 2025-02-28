//Criar uma calculadora simples em JS
var num1, num2, resultado;
var operacao;
var continuar = true;
var prompt = require("prompt-sync")();

function soma(a,b) {
    return Number(a+b);
}
function sub(a,b) {
    return a-b;
}
function multip(a,b) {
    return a*b;
}
function div(a,b) {
    return a/b;
}

while (continuar) {
    console.log("CALCULADORA SIMPLES")
    console.log("====================")
    console.log("1. Soma")
    console.log("2. Subtração")
    console.log("3. Multiplicação")
    console.log("4. Divisão")
    console.log("5. Sair")

    operacao = Number(prompt("Informe a Operação Desejada =>"));
    num1 = Number(prompt("Informe o Primeiro Número =>"));
    num2 = Number(prompt("Informe o Segundo Número =>"));
    //condição de escolha 

    switch (operacao) {
        case 1:
            resultado = soma (num1, num2);
            console.log("O Resultado dessa Soma é: " +resultado);
            break;
        case 2:
            resultado = sub (num1, num2);
            console.log("O Resultado dessa Soma é:" +resultado);
            break;
        case 3:
            resultado = multip (num1, num2);
            console.log("O Resultado dessa Soma é:" +resultado);
            break;
        case 4:
            resultado = div (num1, num2);
            console.log("O Resultado dessa Soma é:" +resultado);
            break;
            
        case 5:
            console.log("Saindo...");
            continuar = false;
            break;
            
        default:
            console.log("Esse item NÃO é válido!")
            break;
    }
}