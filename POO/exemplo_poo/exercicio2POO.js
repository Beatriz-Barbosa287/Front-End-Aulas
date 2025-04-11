// Classe Veiculo
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInfo() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}

// Subclasse Carro
class Carro extends Veiculo {
    constructor(marca, modelo, ano, quantidadePortas) {
        super(marca, modelo, ano);
        this.quantidadePortas = quantidadePortas;
    }

    exibirInfo() {
        return `${super.exibirInfo()}, Número de Portas: ${this.quantidadePortas}`;
    }
}

// Exemplo de uso
let carro1 = new Carro("Toyota", "Corolla", 2020, 4);
let carro2 = new Carro("Honda", "Civic", 2021, 4);
let carro3 = new Carro("Ford", "Fiesta", 2019, 4);
console.log("---------------------------"); 
console.log(carro1.exibirInfo());   
console.log(carro2.exibirInfo());
console.log(carro3.exibirInfo());
console.log("---------------------------");










