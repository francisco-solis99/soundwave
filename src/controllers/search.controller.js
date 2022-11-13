const sequelize = require('../config/db')
const { Op } = require('sequelize')

async function searchTops(req, res){
  const { limit } = req.query;
  const { query } = req.body;
  // If the query was no gaven
  if(!query) return res.status(400).json({ message: 'Query required', data: null });

  await sequelize.models.tops.findAll({
    limit: limit ? Number(limit) : limit,
    where: {
      name: {
        [Op.like]: `%${query}%`
      }
    },
  })
  .then(results => {
    return res.status(200).json({data: results});
  })
  .catch(err => {
    res.status(404).json({ message: err.message, data: null })
  })
}


async function searchSongs(req, res){
  const { limit } = req.query;
  const { query } = req.body;
  // If the query was no gaven
  if (!query) return res.status(400).json({ message: 'Query required', data: null })

  await sequelize.models.songs.findAll({
    limit: limit ? Number(limit) : limit,
    where: {
      name: {
        [Op.like]: `%${query}%`
      }
    },
    include: [
      {
        model: sequelize.models.artists,
        attributes: ['name', 'country', 'ytchannel']
      },
      {
        model: sequelize.models.genres,
        attributes: ['name']
      }
    ]
  })
    .then(results => {
      return res.status(200).json({ data: results })
    })
    .catch(err => {
      res.status(404).json({ message: err.message, data: null })
    })
}

async function searchArtistsSongs(req, res){
  const { limit } = req.query;
  const { query } = req.body;
  // If the query was no gaven
  if(!query) return res.status(400).json({ message: 'Query required', data: null });

  const artists = await sequelize.models.artists.findAll({
    limit: limit ? Number(limit) : limit,
    where: {
      name: {
        [Op.like]: `%${query}%`
      }
    },
  });
  if(!artists) return res.status(404).json({ message: 'Artists not found', data: null});
  const artistsIds = artists.map((artist) => artist.dataValues.id);


  await sequelize.models.songs.findAll({
    where: {
      artistId: {
        [Op.in]: artistsIds
      }
    },
    include: [
      {
        model: sequelize.models.artists,
        attributes: ['name', 'country', 'ytchannel']
      },
      {
        model: sequelize.models.genres,
        attributes: ['name']
      }
    ]
  })
  .then(results => {
    return res.status(200).json({data: results});
  })
  .catch(err => {
    res.status(404).json({ message: err.message, data: null })
  })
}


async function searchGenresSongs(req, res){
  const { limit } = req.query;
  const { query } = req.body;
  // If the query was no gaven
  if(!query) return res.status(400).json({ message: 'Query required', data: null });

  const genres = await sequelize.models.genres.findAll({
    limit: limit ? Number(limit) : limit,
    where: {
      name: {
        [Op.like]: `%${query}%`
      }
    },
  });
  if(!genres) return res.status(404).json({ message: 'Genres not found', data: null});
  const genresIds = genres.map((genre) => genre.dataValues.id);
  console.log(genresIds);

  await sequelize.models.songs.findAll({
    where: {
      genreId: {
        [Op.in]: genresIds
      }
    },
    include: [
      {
        model: sequelize.models.artists,
        attributes: ['name', 'country', 'ytchannel']
      },
      {
        model: sequelize.models.genres,
        attributes: ['name']
      }
    ]
  })
  .then(results => {
    return res.status(200).json({data: results});
  })
  .catch(err => {
    res.status(404).json({ message: err.message, data: null })
  })
}


module.exports = {
  searchSongs,
  searchTops,
  searchArtistsSongs,
  searchGenresSongs
};
