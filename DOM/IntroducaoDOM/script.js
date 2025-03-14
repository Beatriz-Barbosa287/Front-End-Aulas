//Manipulação de HTML

//Exemplo de uso do DOM

function testeDOM() {
    document.getElementById("titulo").innerText = "Texto Alterado!";
}


//seleionando Elementos 

//getElementByID()
let titulo = document.getElementById("titulo");
titulo.style.color = "blue";  // Muda a cor do título para azul


//getElementsbyClassName()
let descricao = document.getElementsByClassName("descricao");
descricao[1].style.fontWeight = "bold"; // Deixa o primeiro parágrafo em negrito
descricao[2].style.color = "green";


//getElementsbyTag()
let tituloh3 = document.getElementsbyTagName ("h3");
tituloh3[0].style.color = "red";

//getElements by Name 

//query selector -> variavel simples 

let primeiroh1 = document.querySelector("h1");
primeiroh1.innerText = "Meu Teste de DOM";

let todosparagrafos = document.querySelectorAll("p");
todosparagrafos.foreach(x =>
    x.style.fontSize = "18x"
)