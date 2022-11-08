const { DataTypes} = require('sequelize');


module.exports = (sequelize) => sequelize.define('topSongs', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
},)

//Super many to many relations (add it to config file)
tops.belongsToMany(songs,{ through: topSongs });
songs.belongsToMany(tops,{ through: topSongs });
