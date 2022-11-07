const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite://db.sqlite');

const Artist = sequelize.define('Artist', {
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    country: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ytchannel: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            isUrl: true
        }
    }
})

module.exports = Artist;