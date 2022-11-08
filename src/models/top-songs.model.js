const sequelize = require('sequelize');
const { DataTypes, Sequelize} = require('sequelize');
const tops = require('./tops.model.js');
const songs = require('');


module.exports = (sequelize) => sequelize.define('topSongs', {
    id: {type: DataTypes.INTEGER, primaryKey: true}, 
},)

//Super many to many relations (add it to config file)
tops.belongsToMany(songs,{ through: topSongs });
songs.belongsToMany(tops,{ through: topSongs }); 