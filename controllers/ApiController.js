const { Usuarios } = require('../databases/models');

const ApiController = {
    listarClientes: async (req, res) => {

        // Levantar os usuários no banco de dados
        let clientes = await Usuarios.findAll();

        // Retornar esses usuários
        res.json(clientes);


    }
}

module.exports = ApiController;