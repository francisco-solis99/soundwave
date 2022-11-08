const { DataTypes } = require('sequelize')
const Song = require('./songs.models')

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

Artist.hasMany(Song);
Song.belongsTo(Artist);

module.exports = Artist