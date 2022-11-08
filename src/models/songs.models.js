const { DataTypes } = require('sequelize')

const Song = (sequelize) => sequelize.define('songs', {
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
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    hooks: {
        beforeCreate: function (song, options) {
            song.createdAt = new Date();
            song.updatedAt = new Date();
        },
        beforeUpdate: function(song, options) {
            song.updatedAt = new Date();
        },
    },
})

module.exports = Song
