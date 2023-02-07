const path = require('path');

const PaginasController = {

    showIndex: (req, res)=>{
        // return res.sendFile(path.resolve("views/index.html"));
        return res.render('index.ejs');
    },

    showCarrinho: (req, res)=>{
        let carrinho = [
            {
                "id": 1,
                "nome": "Calabresa",
                "ingredientes": [
                    "mussarela",
                    "calabresa",
                    "cebola"
                ],
                "preco": 38.5,
                "img": "/img/calabresa.jpg",
                "destaque": true,
                "score": 27
            },
            {
                "id": 2,
                "nome": "Jaca",
                "ingredientes": [
                    "mussarela",
                    "calabresa",
                    "cebola"
                ],
                "preco": 38.5,
                "img": "/img/calabresa.jpg",
                "destaque": true,
                "score": 27
            },
            {
                "id": 3,
                "nome": "Cogumelo",
                "ingredientes": [
                    "mussarela",
                    "calabresa",
                    "cebola"
                ],
                "preco": 38.5,
                "img": "/img/calabresa.jpg",
                "destaque": true,
                "score": 27
            }
        ]
        let nomeDoUsuario = "Ligia Pretel";
        return res.render('carrinho.ejs', {carrinho, nomeDoUsuario});
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
        // return res.send(pizza);
        return res.sendFile(path.resolve("views/pizza.html"));
    }

}



module.exports = PaginasController;