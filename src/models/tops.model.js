const { DataTypes } = require('sequelize')

const Tops = (sequelize) => sequelize.define('tops', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
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
        beforeCreate: function (top) {
            top.createdAt = new Date()
            top.updatedAt = new Date()
        },
        beforeUpdate: function (top) {
            top.updatedAt = new Date()
        },
    },
})

module.exports = Tops
