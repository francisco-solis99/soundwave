const { Sequelize } = require('sequelize')

const typesUsersModel = require('../models/typeusers.model')
const usersModel = require('../models/users.model')
const topsModel = require('../models/tops.model')
const songsModel = require('../models/songs.models')
const topSongsModel = require('../models/top-songs.model')
const genresModel = require('../models/genres.model')
const artistsModel = require('../models/artists.model')

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false
  }
)

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.')
}).catch((error) => {
  console.error('Unable to connect to the database: ', error)
})

// Add models
const models = [typesUsersModel, usersModel, topsModel, songsModel, topSongsModel, genresModel, artistsModel]

for (let model of models)
  model(sequelize)

// Relations
const { typeusers, users, tops, songs, artists, genres, topSongs } = sequelize.models

// Users with typeUsers
users.belongsTo(typeusers)

// many to many relation Tops - Songs
topSongs.belongsTo(tops)
topSongs.belongsTo(songs)
// tops.belongsToMany(songs,{ through: topSongs })
// songs.belongsToMany(tops,{ through: topSongs })

// Artists - Songs
// artists.hasMany(songs)
songs.belongsTo(artists)

// Genres - Songs
// genres.hasMany(songs)
tops.belongsTo(genres)

genres.belongsTo(users)
artists.belongsTo(users)
songs.belongsTo(users)


module.exports = sequelize
