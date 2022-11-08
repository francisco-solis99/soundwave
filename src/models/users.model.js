const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, allowNull:false},
    surname: DataTypes.STRING,
    nickName: DataTypes.STRING,
    email: {type: DataTypes.STRING, allowNull:false, unique: true, validate: {isEmail:true,} },
    password:{type: DataTypes.STRING, allowNull:false },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    hooks: {
      beforeCreate: function (users, options) {
        users.createdAt = new Date();
        users.updatedAt = new Date();
      },
      beforeUpdate: function (users, options) {
        users.updatedAt = new Date();
      },
    },
  });