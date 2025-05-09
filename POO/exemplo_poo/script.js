class Carro {
    // Atributos diretos ficam dentro do construtor
    //Construtor é o método que é chamado quando a classe é instanciada-> definindo os atributos da classe
    constructor(marca, modelo, ano, cor, preco) {
       // Atributos diretos-> são aqueles que não são criados por meio de métodos ou funções
        this.marca /* atributo*/ = marca;//parametro da função/metodo;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor; 
        this.preco = preco;
        
    }

    //metodo para exibir as informações do carro
    //Método-> é uma função que pertence a uma classe
    exibirInfo() {
        console.log(`CARRO:  ${this.marca} ,${this.modelo}, ${this.ano}, ${this.cor}, R$${this.preco}`);
    }
}//objeto carro é uma classe que tem atributos e métodos
//instanciando a classe carro-> criando um objeto carro
let carro1 = new Carro("FIAT", "Uno", 1994, "Cinza", 8000.00);
let carro2 = new Carro("GM", "Corsa", 2011, "Preto", 15000.00);

carro1.exibirInfo();
carro2.exibirInfo();

 //Atributos Privados e Públicos 
 // Atributos privados (utiliza-se # )-> são aqueles que não podem ser acessados fora da classe, enquanto os públicos podem ser acessados fora da classe
class Usuario {
    #nome;//declara o atributo como privado
    #senha;
    #email;
    constructor(nome, senha, email) {
        this.#nome = nome; // Atributo privado  
        this.#senha = senha; // Atributo privado
        this.#email = email; // Atributo privado
    }
    //Metodo privado 
    #trocarSenha(novaSenha) {
        this.#senha = novaSenha; // Atributo privado
    }

      
} 