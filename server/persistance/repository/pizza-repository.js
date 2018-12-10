const db = require("../models/index");

const Pizza = require('../models').pizza;
const Souce = require('../models').souce;

module.exports = class PizzaRepository {

    constructor(pizzaInfo) {
        this.pizzaInfo = pizzaInfo;
    }

    async insertPizzaAndSouces() {
        console.log(this.pizzaInfo);
        try {
            const response = await db.sequelize.transaction(async () => {
                const pizza = await Pizza.create({
                    uuid: this.pizzaInfo.uuid,
                    name: this.pizzaInfo.pizzaName,
                    description: this.pizzaInfo.pizzaDescription,
                    price: this.pizzaInfo.pizzaPrice,
                    toppings: this.pizzaInfo.toppings
                });
                this.pizzaInfo.souces.forEach(async (item) => {
                    await Souce.create({
                        id: item.id,
                        name: item.souceName,
                        quantity: item.souceQuantity,
                        pizza_uuid: this.pizzaInfo.uuid
                    });
                });
            });
            return {
                ok: true,
                team: response
            }
        } catch (err) {
            console.log(err);
            return {
                ok: false,
                errors: err
            }
        }
    };

};