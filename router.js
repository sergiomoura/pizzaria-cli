// Importar o express
const express = require('express');
const PaginasController = require('./controllers/PaginasController');

// Criar o roteador
const router = express.Router();

// Definir as rotas para o roteador
router.get('/', PaginasController.showIndex)

router.get('/carrinho', PaginasController.showCarrinho)

router.get('/perfil', PaginasController.showPerfil);

router.get('/cadastro', PaginasController.showCadastro);

router.get('/pizzas/:idDaPizza', PaginasController.showPizza);

// Exportar o roteador
module.exports = router;