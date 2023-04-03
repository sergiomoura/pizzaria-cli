const { Usuarios } = require('../databases/models');

async function teste(){
    let usuarios = await Usuarios.findAll({raw:true});
    console.log(usuarios);
}

teste();