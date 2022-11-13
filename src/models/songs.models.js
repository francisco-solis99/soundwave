const { DataTypes } = require('sequelize')

const Songs = (sequelize) => sequelize.define('songs', {
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
    year: {
        type: DataTypes.INTEGER
    },
    linkYT: {
        type: DataTypes.TEXT,
        validate: {
            isUrl: true
        }
    },
    artistId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'artists',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    genreId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'genres',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    hooks: {
        beforeCreate: function (song) {
            song.createdAt = new Date()
            song.updatedAt = new Date()
        },
        beforeUpdate: function (song) {
            song.updatedAt = new Date()
        },
    },
})

module.exports = Songs
