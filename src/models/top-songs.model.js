const { DataTypes} = require('sequelize');


const TopsSongs =  (sequelize) => sequelize.define('topSongs', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
},);


module.exports = TopsSongs;


