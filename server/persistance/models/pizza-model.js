'use strict';
module.exports = (sequelize, DataTypes) => {
    const pizza = sequelize.define('pizza', {
        uuid: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        toppings: DataTypes.STRING,
        user_uuid: DataTypes.STRING
    }, {
        timestamps: false,
        tableName: "pizza"
    });

    pizza.associate = (models) => {
        console.log('association made');
        pizza.hasMany(models.souce, {
            foreignKey: 'pizza_uuid'
        });
        pizza.belongsTo(models.user, {
            foreignKey: 'user_uuid'
        });
    };

    return pizza;
};