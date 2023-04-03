const { Pizzas } = require('../databases/models');

async function teste(){
    let pizzas = await Pizzas.findAll({raw:true, attributes:[], where:{id:'Baiana'}});
    console.log(pizzas);
}

teste();