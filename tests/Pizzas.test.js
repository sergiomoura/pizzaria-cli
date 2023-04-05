const { Pizzas } = require('../databases/models');

async function teste(){
    let pizzas = await Pizzas.findAll({
        raw:true,
    });
    console.log(pizzas);
}

teste();