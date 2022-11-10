const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    surname: DataTypes.STRING,
    nickName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate: {
        isEmail:true
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull:false
    },
    typeUserId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'typeusers',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    hooks: {
      beforeCreate: function (user, options) {
        user.createdAt = new Date();
        user.updatedAt = new Date();
      },
      beforeUpdate: function (user, options) {
        user.updatedAt = new Date();
      },
    },
  });
