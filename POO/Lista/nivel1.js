// Classe Pessoa
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

// Classe Livro
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    exibirInfo() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}`);
    }
}

// Classe Calculadora
class Calculadora {
    static somar(a, b) {
        return a + b;
    }

    static subtrair(a, b) {
        return a - b;
    }

    static multiplicar(a, b) {
        return a * b;
    }

    static dividir(a, b) {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return a / b;
    }
}

// Exemplos de uso:

// Pessoa
const pessoa = new Pessoa("Beatriz", 25);
pessoa.apresentar();

// Livro
const livro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1178);
livro.exibirInfo();

// Calculadora
console.log(Calculadora.somar(10, 5));
console.log(Calculadora.subtrair(10, 5));
console.log(Calculadora.multiplicar(10, 5));
console.log(Calculadora.dividir(10, 5));