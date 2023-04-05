const { Ingredientes, sequelize } = require('../databases/models');

async function teste(){
    let ingredientes = await Ingredientes.findAll({include: "pizzas"});
    console.log(ingredientes.map(e => e.toJSON()));
    sequelize.close();
}

teste();