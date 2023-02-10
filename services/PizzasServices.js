const pizzas = require('../databases/pizzas.json');
const fs = require('fs');
const path = require('path');

function carregarPizzas(){
    return pizzas;
};

function carregarPizza(idDaPizza){
    let pizza = pizzas.find(p => p.id == idDaPizza);
    if(pizza == undefined){
        throw new Error("Pizza inexistente");
    }
    return pizza;
}

function adicionarPizza(pizza){
    // Adicionar pizza ao array de pizzas
    pizzas.push(pizza);

    // Salvar este array no arquivo pizzas.json
    salvar();
}

function removerPizza(idDaPizza){
    let posicao = pizzas.findIndex(p => p.id == idDaPizza);
    if(posicao == -1){
        throw new Error("Pizza inexistente");
    }
    pizzas.splice(posicao, 1);
    salvar();
}

function alterarPizza(idDaPizza, dadosDaPizza){
    let pizza = pizzas.find(p => p.id == idDaPizza);
    if(pizza == undefined){
        throw new Error("Pizza inexistente");
    }

    pizza.nome = dadosDaPizza.nome;
    pizza.ingredientes = dadosDaPizza.ingredientes;
    pizza.preco = dadosDaPizza.preco;
    pizza.destaque = dadosDaPizza.destaque;

    salvar();

}

function salvar(){
    const caminhoParaArquivo = path.resolve(__dirname + "/../databases/pizzas.json");
    fs.writeFileSync(caminhoParaArquivo, JSON.stringify(pizzas, null, 4));
}

const PizzasServices = {
    carregarPizza,
    carregarPizzas,
    adicionarPizza,
    removerPizza,
    alterarPizza
}
module.exports = PizzasServices;
