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

function salvar(){
    const caminhoParaArquivo = path.resolve(__dirname + "/../databases/pizzas.json");
    fs.writeFileSync(caminhoParaArquivo, JSON.stringify(pizzas, null, 4));
}
