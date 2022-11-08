const { DataTypes } = require('sequelize')
const Song = require('./songs.models')

const Genre = (sequelize) => sequelize.define('Genre', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

Genre.hasMany(Song);
Song.belongsTo(Genre);

module.exports = Genre