const { Sequelize } = require('sequelize');


const topsModel = require('../models/tops.model');
const songsModel = require('../models/songs.models');
const topSongsModel = require('../models/top-songs.model');
const genresModel = require('../models/genres.model');
const artistsModel = require('../models/artists.model');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306,
    logging: false
  }
);

// Add models
const models = [ topsModel, songsModel, topSongsModel, genresModel, artistsModel ];

for(let model of models)
  model(sequelize);

// Relations
const { tops, songs, artists, genres, topSongs} = sequelize.models;

// Artists - Songs
artists.hasMany(songs);
songs.belongsTo(artists);

// Genres - Songs
genres.hasMany(songs);
songs.belongsTo(genres);

// many to many relation Tops - Songs
tops.belongsToMany(songs,{ through: topSongs });
songs.belongsToMany(tops,{ through: topSongs });

module.exports = sequelize;
