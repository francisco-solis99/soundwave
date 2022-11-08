const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('typeofuser', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, allowNull:false},
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
},
{
  hooks: {
    beforeCreate: function (order, options) {
      order.createdAt = new Date();
      order.updatedAt = new Date();
    },
    beforeUpdate: function (order, options) {
      order.updatedAt = new Date();
    },
  },
});