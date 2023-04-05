const { Enderecos, sequelize } = require('../databases/models');

async function teste(){
    let enderecos = await Enderecos.findAll({include: "usuario"});
    for(let i in enderecos) {
        console.log(enderecos[i].toJSON());
    }
    sequelize.close();
}

teste();