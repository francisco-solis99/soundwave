const { DataTypes } = require('sequelize')

const Genre = (sequelize) => sequelize.define('Sequelize', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = Genre