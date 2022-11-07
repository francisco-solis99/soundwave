const Genre = require('../models/genres.model')

async function createGenre(req, res) {
    const body = req.body
    const genre = await Genre.create(body);
    res.status(201).json(genre);
}

async function getGenreById(req, res) {
    const id = req.params.id;
    const genre = await Genre.findByPk(id);
    res.status(200).json(genre);
}

async function getAllGenres(req, res) {
    const genres = await Genre.findAll();
    res.status(200).json(genres);
}

async function updateGenre(req, res) {
    const id = req.params.id;
    const genre = req.body;
    await Genre.update(genre, { where: { id } });
    const updated_genre = await Genre.findByPk(id);
    res.status(200).json(updated_genre);

}
async function deleteGenre(req, res) {
    const id = req.params.id;
    const deletede_genre = await Genre.destroy({ where: { id } });
    res.status(200).json(deletede_genre);
}

module.exports = {
    getAllGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre
}