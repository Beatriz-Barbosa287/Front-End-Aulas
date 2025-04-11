// Classe Funcionário
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    exibirInfo() {
        console.log(`Funcionário: ${this.nome}, Salário: R$${this.salario.toFixed(2)}`);
    }
}

// Classe Gerente (herda de Funcionario)
class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
        super(nome, salario);
        this.bonus = bonus;
    }

    salarioTotal() {
        return this.salario + this.bonus;
    }

    exibirInfo() {
        console.log(`Gerente: ${this.nome}, Salário Total: R$${this.salarioTotal().toFixed(2)}`);
    }
}

// Classe Animal
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    som() {
        console.log("Som genérico de animal.");
    }
}

// Subclasse Cachorro
class Cachorro extends Animal {
    som() {
        console.log(`${this.nome} diz: Au au!`);
    }
}

// Subclasse Gato
class Gato extends Animal {
    som() {
        console.log(`${this.nome} diz: Miau!`);
    }
}

// Classe Carro
class Carro {
    #velocidade;

    constructor() {
        this.#velocidade = 0;
    }

    acelerar() {
        this.#velocidade += 10;
        console.log(`Acelerando... Velocidade atual: ${this.#velocidade} km/h`);
    }

    frear() {
        this.#velocidade = Math.max(this.#velocidade - 10, 0);
        console.log(`Freando... Velocidade atual: ${this.#velocidade} km/h`);
    }

    getVelocidade() {
        return this.#velocidade;
    }
}

// Exemplos de uso:

// Funcionario e Gerente
const funcionario = new Funcionario("Carlos", 3000);
funcionario.exibirInfo();

const gerente = new Gerente("Ana", 5000, 2000);
gerente.exibirInfo();

// Animal e subclasses
const cachorro = new Cachorro("Rex");
cachorro.som();

const gato = new Gato("Mimi");
gato.som();

// Carro
const carro = new Carro();
carro.acelerar();
carro.acelerar();
carro.frear();
console.log(`Velocidade final: ${carro.getVelocidade()} km/h`);