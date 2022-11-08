const { DataTypes } = require('sequelize')


const Genres = (sequelize) => sequelize.define('genres', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    hooks: {
        beforeCreate: function (genre, options) {
            genre.createdAt = new Date();
            genre.updatedAt = new Date();
        },
        beforeUpdate: function(genre, options) {
            genre.updatedAt = new Date();
        },
    },
})



module.exports = Genres;
