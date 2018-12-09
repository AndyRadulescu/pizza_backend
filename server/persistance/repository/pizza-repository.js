const sequelize = require("sequelize");

const Pizza = require('../models').pizza;
const Souce = require('../models').souce;

module.exports = class PizzaRepository {

    constructor(pizzaInfo) {
        this.pizzaInfo = pizzaInfo;
    }

    insertPizzaAndSouces() {
        console.log(this.pizzaInfo);
        console.log(this.pizzaInfo.souces);
        return sequelize.transaction().then((t) => {
            console.log('entered');
            return Pizza.create({
                uuid: this.pizzaInfo.uuid,
                name: this.pizzaInfo.name,
                description: this.pizzaInfo.description,
                price: this.pizzaInfo.price,
                toppings: this.pizzaInfo.toppings
            }, {transaction: t}).then(() => {
                let promises = [];
                this.pizzaInfo.souces.forEach((item) => {
                    promises += Souce.create({
                        id: item.id,
                        name: item.name,
                        quantity: item.quantity,
                        pizza_uuid: item.pizza_uuid
                    }, {transaction: t});
                });
                return Promise.all(promises).then(() => {
                    console.log('it worked');
                }).catch((err) => {
                    console.log(err)
                });
            }).then(() => {
                console.log('it worked');
                return t.commit();
            }).catch((err) => {
                console.log(err);
                return t.rollback();
            });
        });
    }
};