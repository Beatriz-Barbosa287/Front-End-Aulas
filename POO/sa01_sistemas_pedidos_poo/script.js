class Cliente {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        
    }
}

class Produto {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

class Pedido {
    constructor(id, cliente, itens, desconto) {
        this.id = id;
        this.cliente = cliente;
        this.itens = itens;
        this.desconto = desconto;
        this.total = this.calcularTotal();
    }   
    calcularTotal(){
        let total = this.itens.reduce((acc, item) => acc + item.preco, 0);
        return total - (total * this.desconto / 100);
    }
}

class SistemaPedidos {
    constructor() {
        this.clientes = [];
        this.produtos = [];
        this.pedidos = [];
    }

    cadastrarCliente() {
        const nome = document.getElementById('nomeCliente').value;
        if (!nome) return alert('Nome do cliente é obrigatório!');
        const cliente = new Cliente(this.clientes.length + 1, nome);
        this.clientes.push(cliente);
        
}

    cadastrarProduto() {
        const nome = document.getElementById('nomeProduto').value;
        const preco = parseFloat(document.getElementById('precoProduto').value);
        if (!nome || !preco) return alert('Nome e preço do produto são obrigatórios!');
        const produto = new Produto(this.produtos.length + 1, nome, preco);
        this.produtos.push(produto);
        
    }

    atualizarClientes() {
        const lista = document.getElementById('listaClientes');
        lista.innerHTML = '';
        const selectCliente = document.getElementById('selectCliente');
        selectCliente.innerHTML = '<option value="">Selecione um cliente</option>';
        this.clientes.forEach(cliente => {//percorre a lista de clientes e adiciona na lista de clientes
            const li = document.createElement('li');
            li.textContent = cliente.nome;
            lista.appendChild(li);
        });
    }
}