const pizzas = require('../databases/pizzas.json');

const PizzasController = {
    index: (req, res) => {
        return res.status(200).json(pizzas);
    }
}

module.exports = PizzasController;