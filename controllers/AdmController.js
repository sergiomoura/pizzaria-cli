const PizzasServices = require("../services/PizzasServices");
const fs = require('fs');

const AdmController = {
    listarPizzas: (req, res) =>{
        // Carregar as pizzas
        const pizzas = PizzasServices.carregarPizzas();

        // Renderizar a view listar-pizzas, passando as pizzas para ela
        res.render('lista-de-pizzas.ejs', {pizzas})
    },
    criarPizza: (req, res) => {
        res.render('form-add-pizza.ejs');
    },
    gravarPizza: (req, res) => {
        let novoNome = req.body.nome.replace(' ', '-').toLowerCase() + '.jpg';
        // let novoNome = `${Date.now()}-${req.file.originalname}`
        fs.renameSync(req.file.path, `public/img/${novoNome}`)

        let pizza = {
            nome: req.body.nome,
            ingredientes: req.body.ingredientes.split(',').map(e => e.trim()),
            preco: Number(req.body.preco),
            img: `/img/${novoNome}`,
            destaque: false,
            score: 0
        }

        PizzasServices.adicionarPizza(pizza);

        res.redirect('/adm/pizzas');
    },
    showEditPizza: (req, res) => {
        // Capiturar o id da pizza a ser editada (req.params)

        // Encontrar a pizza a ser editada guardando na variavel pizza (PizzasServices.carregarPizza)

        // Renderizar a view (ainda inexistente) form-edit-pizza.ejs
        // passando para essa view (res.render(____, {pizza}))
    }

}

module.exports = AdmController;