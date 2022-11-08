const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('typeofuser', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, allowNull:false},
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
},
{
  hooks: {
    beforeCreate: function (typeusers, options) {
      typeusers.createdAt = new Date();
      typeusers.updatedAt = new Date();
    },
    beforeUpdate: function (typeusers, options) {
      typeusers.updatedAt = new Date();
    },
  },
});