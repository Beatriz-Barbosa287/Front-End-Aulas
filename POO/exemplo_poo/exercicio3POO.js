// Classe ContaBancaria
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
        } else {
            console.log("O valor do saque deve ser positivo.");
        }
    }

    exibirSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}

// Exemplo de uso
const conta = new ContaBancaria("Beatriz Barbosa", 1000);
conta.exibirSaldo();
conta.depositar(500);
console.log("---------------------------");
conta.exibirSaldo();
conta.sacar(300);
console.log("---------------------------");
conta.exibirSaldo();
conta.sacar(1500); // Tentativa de saque com saldo insuficiente