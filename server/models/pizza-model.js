'use strict';
module.exports = (sequelize, DataTypes) => {
    const pizza = sequelize.define('pizza', {
        uuid: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.INTEGER,
        version: DataTypes.INTEGER,
        toppings: DataTypes.STRING

    });

    pizza.associate = (models) => {
        console.log('association made');
        pizza.hasMany(models.souce, {
            foreignKey: 'pizza_uuid'
        });
    };

    return pizza;
};