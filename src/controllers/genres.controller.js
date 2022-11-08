const Genre = require('../models/genres.model')

async function createGenre(req, res) {
    const { body } = req
    return await Genre.create(body)
        .then(genre => res.status(200).json(genre))
        .catch(err => res.status(404).json({ message: 'Error', data: err }))
}

async function getGenreById(req, res) {
    const id = req.params.id;
    const genre = await Genre.findByPk(id);
    if (!genre) {
        return res.status(404).json({ message: 'Genre not found' })
    }
    return res.status(200).json(genre);
}

async function getAllGenres(req, res) {
    return await Genre.findAll()
        .then(genre => res.status(200).json(genre))
        .catch(err => res.status(404).json({ message: 'Error', data: err }))
}

async function updateGenre(req, res) {
    const id = req.params.id;
    const genre = req.body;
    await Genre.update(genre, { where: { id } })
        .then(genre => res.status(200).json(genre))
        .catch(err => res.status(404).json({ message: 'Error', data: err }))
}

async function deleteGenre(req, res) {
    const id = req.params.id;
    const deleted_genre = await Genre.destroy({ where: { id } });
    if (!deleted_genre) {
        return res.status(404).json({ message: 'Genre not found' })
    }
    return res.status(200).json(deleted_genre);
}

module.exports = {
    getAllGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre
}