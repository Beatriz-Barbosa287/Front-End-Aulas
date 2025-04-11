// Classe Aluno
class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.notas = [];
    }

    adicionarNota(nota) {
        if (nota < 0 || nota > 10) {
            console.log("Nota inválida. Deve estar entre 0 e 10.");
            return;
        }
        this.notas.push(nota);
    }

    calcularMedia() {
        if (this.notas.length === 0) {
            return 0;
        }
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }

    situacao() {
        const media = this.calcularMedia();
        return media >= 7 ? "Aprovado" : "Reprovado";
    }
}

// Classe Produto
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    vender(qtd) {
        if (qtd > this.quantidade) {
            console.log("Estoque insuficiente.");
            return;
        }
        this.quantidade -= qtd;
        console.log(`${qtd} unidade(s) de ${this.nome} vendida(s).`);
    }

    repor(qtd) {
        this.quantidade += qtd;
        console.log(`${qtd} unidade(s) de ${this.nome} adicionada(s) ao estoque.`);
    }

    exibirInfo() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Quantidade em estoque: ${this.quantidade}`);
    }
}

// Classe ContaBancaria
class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log("Valor de depósito inválido.");
            return;
        }
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para saque.");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
    }

    consultarSaldo() {
        console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`);
    }
}

// Exemplos de uso:

// Aluno
const aluno = new Aluno("João");
aluno.adicionarNota(8);
aluno.adicionarNota(6);
aluno.adicionarNota(9);
console.log(`Média: ${aluno.calcularMedia()}`);
console.log(`Situação: ${aluno.situacao()}`);

// Produto
const produto = new Produto("Notebook", 3500.00, 10);
produto.exibirInfo();
produto.vender(3);
produto.repor(5);
produto.exibirInfo();

// Conta Báncaria
const conta = new ContaBancaria("Maria", 1000);
conta.consultarSaldo();
conta.depositar(500);
conta.sacar(300);
conta.sacar(1500); // Teste de saldo insuficiente
conta.consultarSaldo();