const Pizza = require('../persistance/models').pizza;
const Souce = require('../persistance/models').souce;
const PizzaRepository = require('../persistance/repository/pizza-repository');

exports.getSomething = (req, res) => {
    let pizzaRepository = new PizzaRepository(req.body.pizzas[0]);
    res.send(pizzaRepository.insertPizzaAndSouces());
};

exports.getAllPizza = (req, res) => {
    Pizza.findAll({
        include: [{
            model: Souce
        }]
    }).then((pizza) => {
        res.send(pizza);
    });
};