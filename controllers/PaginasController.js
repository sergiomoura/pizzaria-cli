const fs = require('fs');
const path = require('path');
const idu = 2;

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

        // importar o array de usuarios
        const usuarios = require('../databases/usuarios.json');

        // encontrar o usuario com o id dado
        const usuario = usuarios.find(u => u.id == idu);

        if(usuario !== undefined){
            // caso encontre, passar usuario para view perfil.ejs
            return res.render('perfil.ejs', {usuario});
        } else {
            // caso não encontre, mando uma view erro-404.ejs
            return res.render('erro-404.ejs');
        }
        
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
        return res.render('pizza.ejs', {pizza});
    }

}



module.exports = PaginasController;