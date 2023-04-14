/*
    RECURSOS: pizzas, pedidos, clientes, enderecos, faturamentos, ...
    TIPOS DE USUÁRIOS: clientes, administradores  
    
    Ações de Adm sobre pizzas:
        GET /api/adm/pizzas
        POST /api/adm/pizzas
        DELETE /api/adm/pizzas/:id
        PUT /api/adm/pizzas/:id
*/

const express = require('express');
const ApiController = require('./controllers/ApiController');
const routerApi = express.Router();

routerApi.get('/adm/pizzas', ()=>{});
routerApi.post('/adm/pizzas', (req, res)=>{return res.json(req.body)});
routerApi.delete('/adm/pizzas/:id', ()=>{});
routerApi.put('/adm/pizzas/:id', ()=>{});

routerApi.get('/adm/clientes', ApiController.listarClientes);            // Listar os clientes (paginação, busca)
routerApi.get('/adm/clientes/:idCliente', ()=>{}); // Mostrar informações de um cliente específico

// Rota para cadastro de cliente:
routerApi.post('/auth/register', ()=>{});

// Rota para login do cliente:
routerApi.post('/auth/login', ()=>{});

module.exports = routerApi;