//Exemplo de USO do DOM

//Header - Cabeçalho  - >  DOM
let header = document.createElement("div");
document.body.appendChild(header); //adiciona elemento como filho 
header.style.backgroundColor = "black";
header.style.height = "8vh";
let menu = document.createElement("div");
header.appendChild(menu);
header.classList.add("header");//dando nome para a let header -> "equivalente a uma div class"
menu.classList.add("menu");
let menuItens = ["Início", "Produtos", "Contato"];
menuItens.forEach(element => {
    let item = document.createElement("a");
    item.innerText = element;
    menu.appendChild(item);
});

