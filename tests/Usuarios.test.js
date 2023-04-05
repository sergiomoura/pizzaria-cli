const { Usuarios } = require('../databases/models');

async function teste(){
    // let usuario = await Usuarios.findByPk(2, {raw:true, include: "enderecos"});
    let usuario = await Usuarios.findByPk(2, {include: "enderecos"});
    console.log(usuario.toJSON());
}

teste();