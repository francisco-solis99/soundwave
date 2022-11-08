const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('tops', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    hooks: {
        beforeCreate: function (top, options) {
            top.createdAt = new Date();
            top.updatedAt = new Date();
        },
        beforeUpdate: function(top, options) {
            top.updatedAt = new Date();
        },
    },
});
