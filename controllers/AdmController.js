const PizzasServices = require("../services/PizzasServices");
const fs = require('fs');
const bcrypt = require('bcrypt');
const { Ingredientes } = require('../databases/models');

const AdmController = {
    listarPizzas: async (req, res) =>{
        // Carregar as pizzas
        const pizzas = await PizzasServices.carregarPizzas();
        const msg = req.query.msg;

        // Renderizar a view listar-pizzas, passando as pizzas para ela
        res.render('lista-de-pizzas.ejs', {pizzas, msg})
    },
    criarPizza: async (req, res) => {
        ingredientes = await Ingredientes.findAll();
        res.render('form-add-pizza.ejs', {ingredientes});
    },
    gravarPizza: async (req, res) => {
        
        let novoNome = req.body.nome.replace(' ', '-').toLowerCase() + '.jpg';
        fs.renameSync(req.file.path, `public/img/${novoNome}`)

        let pizza = {
            nome: req.body.nome,
            ingredientes: req.body.ingredientes,
            preco: Number(req.body.preco),
            img: `/img/${novoNome}`,
            destaque: false,
            score: 0
        }

        await PizzasServices.adicionarPizza(pizza);

        res.redirect('/adm/pizzas');
    },
    showEditPizza: async (req, res) => {
        
        // Capiturar o id da pizza a ser editada (req.params)
        const idDaPizza = req.params.id;

        // Encontrar a pizza a ser editada guardando na variavel pizza (PizzasServices.carregarPizza)
        const pizza = await PizzasServices.carregarPizza(idDaPizza);

        // Transformando o array de ingredientes da pizza(objetos) em array de ids;
        pizza.ingredientes = pizza.ingredientes.map(i => i.id);

        // Carregar os ingredientes
        const ingredientes = await PizzasServices.carregarIngredientes();



        // Renderizar a view (ainda inexistente) form-edit-pizza.ejs
        // passando para essa view (res.render(____, {pizza}))
        res.render('form-edit-pizza.ejs', {pizza, ingredientes});
    },
    showLogin: (req, res) => {
        res.render('login.ejs');
    },
    login: (req, res) => {
        // 1 - Capturar o email e a senha digitados pelo administrador
        const {email, senha} = req.body;

        // 2 - Verificar a existência do administrador.
        // Caso não exista, enviar mensagem de erro
        const administradores = require('../databases/administradores.json');
        let adm = administradores.find(adm => adm.email === email);
        if(adm === undefined){
            return res.send("Falha no login");
        }


        // 3 - Verificar a senha do administrador.
        // Caso senha não seja válida, enviar mensagem de erro
        const senhaOk = bcrypt.compareSync(senha, adm.senha);
        if(!senhaOk){
            return res.send("Falha no login");
        }

        // 4 - Criar a session/cookie do administrador
        req.session.admLogado = true;

        // 5 - Redirecioná-lo para /adm/pizzas
        res.redirect('/adm/pizzas');

    },
    delete: async (req, res) => {
        // capturar o id da pizza
        const id = req.params.id;

        // deletar a pizza pelo id
        await PizzasServices.removerPizza(id);
        
        // redirecionar para /adm/pizzas (informando que deletou com sucesso)
        res.redirect('/adm/pizzas?msg=pizzaApagada');
    },
    atualizarPizza: async (req, res) => {

        const idDaPizza = req.params.id;
        let novoNome = req.body.nome.replace(' ', '-').toLowerCase() + '.jpg';
        fs.renameSync(req.file.path, `public/img/${novoNome}`)
        
        const dados = {
            nome: req.body.nome,
            preco: req.body.preco,
            ingredientes: req.body.ingredientes,
            img: `/img/${novoNome}`,
        }

        await PizzasServices.alterarPizza(idDaPizza, dados);

        res.redirect('/adm/pizzas');
    }

}

module.exports = AdmController;