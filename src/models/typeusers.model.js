const { DataTypes } = require('sequelize')

module.exports = (sequelize) => sequelize.define('typeusers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
},
  {
    hooks: {
      beforeCreate: function (typeuser) {
        typeuser.createdAt = new Date()
        typeuser.updatedAt = new Date()
      },
      beforeUpdate: function (typeuser) {
        typeuser.updatedAt = new Date()
      },
    },
  })
