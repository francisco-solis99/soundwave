const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = (sequelize) => {
  const User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: DataTypes.STRING,
    nickName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    typeuserId: {
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
      beforeCreate: function (user) {
        const salt = bcrypt.genSaltSync() // Generate key
        user.password = bcrypt.hashSync(user.password, salt) // Pass password and key to create encrypted password
        user.createdAt = new Date()
        user.updatedAt = new Date()
      },
      beforeUpdate: function (user) {
        user.updatedAt = new Date()
      },
      beforeBulkCreate: function(users) {
        for (const user of users) {
          const salt = bcrypt.genSaltSync() // Generate key
          user.password = bcrypt.hashSync(user.password, salt) // Pass password and key to create encrypted password
        }
      }
    },
  })

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  }

  return User
}
