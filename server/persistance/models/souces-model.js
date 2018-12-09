'use strict';
module.exports = (sequelize, DataTypes) => {
    const souce = sequelize.define('souce', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        pizza_uuid: DataTypes.STRING
    }, {
        timestamps: false,
        tableName: "souce"
    });

    souce.associate = (models) => {
        console.log('association made');
        souce.belongsTo(models.pizza, {
            foreignKey: 'pizza_uuid'
        });
    };

    return souce;
};