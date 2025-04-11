// Classe Funcionario
class Funcionario {
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    aumentarSalario(percentual) {
        if (percentual > 0) {
            const aumento = (this.salario * percentual) / 100;
            this.salario += aumento;
            console.log(`Salário aumentado em ${percentual}%. Novo salário: R$${this.salario.toFixed(2)}`);
        } else {
            console.log("O percentual de aumento deve ser positivo.");
        }
    }

    exibirInfo() {
        return `Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
    }
}

// Exemplo de uso
const funcionario = new Funcionario("Beatriz Barbosa", 3000, "Desenvolvedora");
console.log(funcionario.exibirInfo());
funcionario.aumentarSalario(10); 
console.log("---------------------------");
// Aumenta o salário em 10%
console.log(funcionario.exibirInfo());