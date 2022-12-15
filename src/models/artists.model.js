const { DataTypes } = require('sequelize')

const Artists = (sequelize) => sequelize.define('artists', {
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
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ytchannel: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isUrl: true
        }
    },
    urlImage: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    hooks: {
        beforeCreate: function (artist) {
            artist.createdAt = new Date()
            artist.updatedAt = new Date()
        },
        beforeUpdate: function (artist) {
            artist.updatedAt = new Date()
        },
    },
})

module.exports = Artists
