//LISTA DE TAREFAS TO DO LIST

//dispara o evento 
document.getElementById("btnAdiocionar").addEventListener("click", criarTarefa);

function criarTarefa() {
    let input = document.getElementById("tarefa");
    let texto = input.value.trim(); //remove os espaços antes e depois do texto
//verificar se a tarefa está vazia 
if (texto === ""){
    return;
}
let li = document.createElement("li");
li = texto + '<button onclick="removerTarefa (this)"> Remover </button>'
//adicionar p li -> ul
let ul =document.getElementById("Lista");
ul.appendChild(li);
input.value= " "; //limpa o campo do Input

}

function removerTarefa(botao) {
    botao.parentElement.remove();
}