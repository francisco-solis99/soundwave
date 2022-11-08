const sequelize = require('../config/db');


async function createGenre(req, res) {
    const { body } = req
    return await sequelize.models.genres.create(body)
        .then(genre => res.status(200).json(genre))
        .catch(err => res.status(404).json({ message: 'Error', data: err }))
}

async function getGenreById(req, res) {
    const id = req.params.id
    const genre = await sequelize.models.genres.findByPk(id)
    if (!genre) {
        return res.status(404).json({ message: 'Genre not found' })
    }
    return res.status(200).json(genre)
}

async function getAllGenres(req, res) {
    return await sequelize.models.genres.findAndCountAll()
        .then(genre => res.status(200).json(genre))
        .catch(err => res.status(404).json({ message: 'Error', data: err }))
}

async function updateGenre(req, res) {
    const id = req.params.id
    const genre = req.body
    await sequelize.models.genres.update(genre, { where: { id } })
        .then(genre => res.status(200).json(genre))
        .catch(err => res.status(404).json({ message: 'Error', data: err }))
}

async function deleteGenre(req, res) {
    const id = req.params.id
    const deleted_genre = await sequelize.models.genres.destroy({ where: { id } })
    if (!deleted_genre) {
        return res.status(404).json({ message: 'Genre not found' })
    }
    return res.status(200).json(deleted_genre)
}

module.exports = {
    getAllGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre
}
