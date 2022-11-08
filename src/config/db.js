const { Sequelize } = require('sequelize');

const topsModel = require('../models/tops.model');
const songsModel = require('../models/songs.models');
const genresModel = require('../models/genres.model');
const artistsModel = require('../models/artists.model');

const sequelize = new Sequelize('soundwave', 'root', 'root',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false
  }
);

// Add models
const models = [ topsModel, songsModel, genresModel, artistsModel ];

for(let model of models) {
  model(sequelize)
}

// // Relations
const { tops, songs, artists, genres } = sequelize.models;

// // Artists - Songs
// artists.hasMany(songs);
// songs.belongsTo(artists);

// // Genres - Songs
// genres.hasMany(songs);
// songs.belongsTo(genres);

//Super many to many relations Tops - Songs
// tops.belongsToMany(songs,{ through: topSongs });
// songs.belongsToMany(tops,{ through: topSongs });

module.exports = sequelize
