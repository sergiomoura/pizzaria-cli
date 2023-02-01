const path = require('path');

const PaginasController = {

    showIndex: (req, res)=>{
        return res.sendFile(path.resolve("views/index.html"));
    },

    showCarrinho: (req, res)=>{
        return res.sendFile(path.resolve("views/carrinho.html"));
    },

    showPerfil: (req, res)=>{
        return res.sendFile(path.resolve("views/perfil.html"));
    },

    showCadastro: (req, res)=>{
        return res.sendFile(path.resolve("views/cadastro.html"));
    },

    showPizza: (req, res) => {
        let id = req.params.idDaPizza;

        // Importar o array de pizzas
        const pizzas = require('../databases/pizzas.json');

        // localizar a pizza de id procurado
        const pizza = pizzas.find( p => p.id == id);

        // mandar a pizza ser exibida...
        return res.send(pizza);
    }

}

module.exports = PaginasController;