const sequelize = require('../config/db')
const { Op } = require('sequelize')

async function searchSongs(req, res) {
  const { limit } = req.query
  const { query } = req.body

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

module.exports = {
  searchSongs
}
