const pizzas = require('../databases/pizzas.json');

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
