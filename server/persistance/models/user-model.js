'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        uuid: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        password: DataTypes.STRING,
        token: DataTypes.STRING
    }, {
        tableName: 'user',
        timestamps: false,
    });

    user.associate = (models) => {
        user.hasMany(models.pizza, {
            foreignKey: 'user_uuid'
        });
    };

    return user;
};