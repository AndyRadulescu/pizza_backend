const Pizza = require('../models').pizza;
const Souce = require('../models').souce;

exports.getSomething = (req, res) => {
    console.log(req.body);
    res.send("something happend");
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