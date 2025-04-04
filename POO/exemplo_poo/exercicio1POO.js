class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome; // Atributo público
        this.preco = preco; // Atributo público
        this.estoque = estoque; // Atributo público
        
    }
    //método vender (quantidade)-> Reduzir o estoque do produto
    vender(quantidade) {
        if (quantidade > this.estoque) {
            console.log("Estoque insuficiente para realizar a venda.");
        } else {
            this.estoque -= quantidade; // Reduz o estoque
            console.log(`Venda realizada! Estoque atual: ${this.estoque}`);
        }
    }
    //método repor (quantidade)-> Aumentar o estoque do produto
    repor(quantidade) {
        this.estoque += quantidade; // Aumenta o estoque
        console.log(`Estoque atualizado! Estoque atual: ${this.estoque}`);
    }
  

    //método exibirInfo()-> Exibir as informações do produto
    exibirInfo() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco}, Estoque: ${this.estoque}`);
    }
}
let produto1 = new Produto("Notebook", 2500, 10);
let produto2 = new Produto("Celular", 1500, 20);  
console.log("---------------------------");
produto1.exibirInfo();
produto2.exibirInfo(); 
console.log("---------VENDAS-------------");
// Exemplo de uso dos métodos  

console.log("Venda de 5 unidades do Produto:" + produto1.nome);
produto1.vender(5); // Vender 5 unidades do produto 1  
console.log("---------------------------");
console.log("Venda de 5 unidades do Produto:" + produto2.nome);
produto1.vender(12); // Vender 12 unidades do produto 2

console.log("--------REPOSIÇÃO-----------");

console.log("Reposição de 10 unidades do Produto:" + produto1.nome);
produto1.repor(10); // Repor 10 unidades do produto 1
console.log("---------------------------");
console.log("Reposição de 10 unidades do Produto:" + produto2.nome);
produto1.repor(20); // Repor 10 unidades do produto 1
