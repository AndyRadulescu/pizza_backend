'use strict';
module.exports = (sequelize, DataTypes) => {
    const souce = sequelize.define('souce', {
        name: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        pizza_uuid: DataTypes.STRING
    });

    souce.associate = (models) => {
        console.log('association made');
        souce.belongsTo(models.pizza, {
            foreignKey: 'pizza_uuid'
        });
    };

    return souce;
};