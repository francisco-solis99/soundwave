const { DataTypes} = require('sequelize');


module.exports = (sequelize) => sequelize.define('topSongs', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
},)


