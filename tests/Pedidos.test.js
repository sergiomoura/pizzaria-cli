const {Pedidos, sequelize} = require('../databases/models');

async function teste(){
    const pedido = await Pedidos.findByPk(5, {include:'pizzas'});
    console.log(pedido.toJSON());
    sequelize.close();
}

teste();