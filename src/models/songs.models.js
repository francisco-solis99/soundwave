const { DataTypes } = require('sequelize')
const Genre = require('./genres.model')
const Artist = require('./artists.model')

const Song = (sequelize) => sequelize.define('Song', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    year: {
        type: DataTypes.NUMBER
    },
    linkYT: {
        type: DataTypes.TEXT,
        unique: true,
        validate: {
            isUrl: true
        }
    }
})

module.exports = Song