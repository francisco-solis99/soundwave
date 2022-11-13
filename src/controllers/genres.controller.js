const sequelize = require('../config/db')

// Get Genre
async function getAllGenres(req, res) {
  const { limit, orderBy, sort } = req.query
  const sortProp = ['ASC', 'DESC'].includes(sort?.toUpperCase()) ? sort.toUpperCase() : 'ASC'
  const orderByProp = Object.keys(sequelize.models.genres.rawAttributes).includes(orderBy) ? orderBy : 'id'

  return await sequelize.models.genres.findAndCountAll({
    limit: limit ? Number(limit) : limit,
    order: [
      [orderByProp, sortProp]
    ]
  })
    .then(artists => res.status(200).json(artists))
    .catch(err => res.status(404).json({ message: err.message, data: null }))
}

async function getGenreById(req, res) {
  const id = req.params.id
  const genre = await sequelize.models.genres.findByPk(id)
  if (!genre) {
    return res.status(404).json({ message: 'Genre not found', data: null })
  }
  return res.status(200).json(genre)
}

// Post - Create Genre
async function createGenre(req, res) {
  const { body } = req
  await sequelize.models.genres.create({
    name: body.name
  })
    .then(async (genre) => {
      await genre.save()
      return res.status(201).json({ message: "Genre created successfully", data: genre })
    })
    .catch(err => {
      if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name)) {
        return res.status(400).json({
          message: err.errors.map((e) => e.message),
          data: null
        })
      }
      return res.status(400).json({ message: 'Error trying to create new genre', data: null })
    })
}

// Patch - Update Genre
async function updateGenre(req, res) {
  const { body, params: { id } } = req
  const genre = await sequelize.models.genres.findByPk(id)
  if (!genre) {
    return res.status(404).json({ message: 'Genre not found', data: null })
  }
  await genre.update({
    name: body.name,
    genreId: body.genreId,
  })
    .then(async (updateGenre) => {
      await updateGenre.save()
      return res.status(201).json({ message: "Genre updated successfully", data: updateGenre })
    })
    .catch(err => {
      if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name)) {
        return res.status(400).json({
          message: err.errors.map((e) => e.message),
          data: null
        })
      }
      return res.status(400).json({ message: 'Error trying to update new genre', data: null })
    })
}

// Delete Genre
async function deleteGenre(req, res) {
  const id = req.params.id
  const deleted_genre = await sequelize.models.genres.findByPk(id)
  if (!deleted_genre) {
    return res.status(404).json({ message: 'Genre not found', data: null })
  }
  await deleted_genre.destroy()
  return res.json({ message: 'Deleted successfully', data: true })
}

module.exports = {
  getAllGenres,
  getGenreById,
  createGenre,
  updateGenre,
  deleteGenre
}
