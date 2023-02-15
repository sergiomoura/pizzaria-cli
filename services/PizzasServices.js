const pizzas = require('../databases/pizzas.json');
const fs = require('fs');
const path = require('path');

/**
 * Retorna um array com todas as pizzas gravadas.
 * @returns {Pizza[]}
 */
function carregarPizzas(){
    return pizzas;
};

/**
 * Retorna a pizza de id passado pelo parâmetro idPizza
 * @param {number} idDaPizza 
 * @returns {Pizza} 
 * @throws Emite erro caso não encontre nenhuma pizza com o id dado
 */
function carregarPizza(idDaPizza){
    let pizza = pizzas.find(p => p.id == idDaPizza);
    if(pizza == undefined){
        throw new Error("Pizza inexistente");
    }
    return pizza;
}

/**
 * Adiciona uma pizza.
 * @param {Pizza} pizza 
 */
function adicionarPizza(pizza){
    // Criar um ID para a pizza
    if(pizzas.length > 0){
        pizza.id = pizzas[pizzas.length - 1].id + 1;
    } else {
        pizza.id = 1;
    }

    // Adicionar pizza ao array de pizzas
    pizzas.push(pizza);

    // Salvar este array no arquivo pizzas.json
    salvar();
}

/**
 * Remove uma pizza.
 * @param {number} idDaPizza
 * @throws Emite erro caso não exista pizza com o id passado
 */
function removerPizza(idDaPizza){
    let posicao = pizzas.findIndex(p => p.id == idDaPizza);
    if(posicao == -1){
        throw new Error("Pizza inexistente");
    }
    pizzas.splice(posicao, 1);
    salvar();
}

/**
 * Altera as informações de uma pizza
 * @param {number} idDaPizza 
 * @param {{nome: string, ingredientes:string[], preco:number, destaque: boolean}} dadosDaPizza 
 */
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
