const sequelize = require('../config/db');

async function createArtist(req, res) {
    const body = req.body
    return await sequelize.models.artists.create(body)
        .then(artist => res.status(201).json(artist))
        .catch(err => res.status(404).json({ message: 'Error', data: err }))
}

async function getArtistById(req, res) {
    const id = req.params.id
    const artist = await sequelize.models.artists.findByPk(id)
    if (!artist) {
        return res.status(404).json({ message: 'Artist not found' })
    }
    return res.status(200).json(artist)
}

async function getAllArtists(req, res) {
    return await sequelize.models.artists.findAndCountAll()
        .then(artists => res.status(200).json(artists))
        .catch(err => res.status(404).json({ message: 'Error', data: err }))
}

async function updateArtist(req, res) {
    const id = req.params.id
    const artist = req.body
    return await sequelize.models.artists.update(artist, { where: { id } })
        .then((artist) =>  res.status(200).json(artist))
        .catch(err => res.status(404).json({ message: 'Error', data: err }))
}

async function deleteArtist(req, res) {
    const id = req.params.id
    const deleted_artist = await sequelize.models.artists.destroy({ where: { id } })
    if (!deleted_artist) {
        return res.status(404).json({ message: 'Artist not found' })
    }
    return res.status(200).json(deleted_artist)
}

module.exports = {
    createArtist,
    getArtistById,
    getAllArtists,
    updateArtist,
    deleteArtist
};
