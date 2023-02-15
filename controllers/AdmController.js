const PizzasServices = require("../services/PizzasServices");

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

        // Quando o form é post os dados ficam no req.body
        // console.log(req.body)

        // Quando o form é get os dados ficam no req.query
        // console.log(req.query);

        // As informações podem vir como parâmetro de rota...
        // console.log(req.params)

        let pizza = {
            nome: req.body.nome,
            ingredientes: req.body.ingredientes.split(',').map(e => e.trim()),
            preco: Number(req.body.preco),
            img: "/img/no-image.png",
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