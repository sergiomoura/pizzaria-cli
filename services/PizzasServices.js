const { Pizzas, Ingredientes } = require('../databases/models');

const pizzas = require('../databases/pizzas.json');
const fs = require('fs');
const path = require('path');

/**
 * Retorna um array com todas as pizzas gravadas.
 * @returns {Pizza[]}
 */
async function carregarPizzas(){
    const pizzas = await Pizzas.findAll({include: 'ingredientes'});
    return pizzas;
};

/**
 * Retorna a pizza de id passado pelo parâmetro idPizza
 * @param {number} idDaPizza 
 * @returns {Pizza} 
 * @throws Emite erro caso não encontre nenhuma pizza com o id dado
 */
async function carregarPizza(idDaPizza){
    let pizza = await Pizzas.findByPk(idDaPizza, {include:'ingredientes'});
    if(pizza == undefined){
        throw new Error("Pizza inexistente");
    }
    return pizza;
}

/**
 * Adiciona uma pizza.
 * @param {Pizza} pizza 
 */
async function adicionarPizza(pizza){

    let pizzaCriada = await Pizzas.create(pizza);
    pizzaCriada.setIngredientes(pizza.ingredientes);

}

/**
 * Remove uma pizza.
 * @param {number} idDaPizza
 * @throws Emite erro caso não exista pizza com o id passado
 */
async function removerPizza(idDaPizza){

    let nLinhasRemovidas = await Pizzas.destroy({where: {id: idDaPizza}});

    if(nLinhasRemovidas == 0){
        throw new Error("Pizza inexistente");
    }
    
}

/**
 * Altera as informações de uma pizza
 * @param {number} idDaPizza 
 * @param {{nome: string, ingredientes:string[], preco:number, destaque: boolean}} dadosDaPizza 
 */
async function alterarPizza(idDaPizza, dadosDaPizza){

    const pizza = await Pizzas.findByPk(idDaPizza);

    if(pizza === undefined){
        throw new Error("Pizza inexistente");
    };

    await pizza.update(dadosDaPizza);
    pizza.setIngredientes(dadosDaPizza.ingredientes);

}

async function carregarIngredientes(){

    const ingredientes = await Ingredientes.findAll();
    return ingredientes;

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
    alterarPizza,
    carregarIngredientes
}
module.exports = PizzasServices;
