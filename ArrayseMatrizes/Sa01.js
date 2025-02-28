//SITUAÇÃO DE APRENDIZAGEM 01
const prompt = require("prompt-sync")();//entrada de dados

//array de notas 
let notas = [];
function inserirnotas() {
    let nota = prompt("digite a nota:");
    notas.push(nota);
}

function calcularmedia() {
    let media = notas.reduce((soma, nota) => soma + nota, 0 / notas.length);
    console.log("Sua média é: " + media)
};


function menu() {
        let continuar = true;
        while (continuar) {
            console.log("==========calcular média===========");
            console.log("1.Inserir Nota");
            console.log("2.Calcular Média");
            console.log("3. sair");
            console.log("===================================");
            let operacao = prompt("Escolha a Opção Desejada:")
            switch (operacao) {
                case "1":
                    inserirnotas();
                    break;
                case "2":
                    calcularmedia();
                case "3":
                    continuar = false;
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Essa opção não é válida")
                    break;
            }

        }
}

menu();