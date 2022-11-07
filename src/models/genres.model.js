const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite://db.sqlite')

const Genre = sequelize.define('Sequelize', {
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    }
})

module.exports = Genre