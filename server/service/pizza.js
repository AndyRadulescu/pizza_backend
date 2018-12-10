const Pizza = require('../persistance/models').pizza;
const Souce = require('../persistance/models').souce;
const PizzaRepository = require('../persistance/repository/pizza-repository');

exports.getSomething = async (req, res) => {
    let pizzaRepository = new PizzaRepository(req.body.pizzas[0]);
    let response = await pizzaRepository.insertPizzaAndSouces();
    if (response.ok === true) {
        res.status(200).send("worked");
    } else {
        res.status(401).send("error");
    }
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