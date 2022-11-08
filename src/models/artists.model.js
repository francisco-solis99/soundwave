const { DataTypes } = require('sequelize')

const Artist = (sequelize) => sequelize.define('Artist', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ytchannel: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isUrl: true
        }
    }
})

module.exports = Artist