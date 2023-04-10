const {Pedidos, sequelize} = require('../databases/models');

async function teste(){
    const pedidos = await Pedidos.findAll();
    console.log(pedidos.map(p=>p.toJSON()));
    sequelize.close();
}

teste();