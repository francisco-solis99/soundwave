const Artist = require('../models/artists.model')

async function createArtist(req, res) {
    const body = req.body
    return await Artist.create(body)
        .then(artist => res.status(201).json(artist))
        .catch(err => res.status(404).json({ message: 'Error', data: err }))
}

async function getArtistById(req, res) {
    const id = req.params.id
    const artist = await Artist.findByPk(id)
    if (!artist) {
        return res.status(404).json({ message: 'Artist not found' })
    }
    return res.status(200).json(artist)
}

async function getAllArtists(req, res) {
    return await Artist.findAll()
        .then(artists => res.status(200).json(artists))
        .catch(err => res.status(404).json({ message: 'Error', data: err }))
}

async function updateArtist(req, res) {
    const id = req.params.id
    const artist = req.body
    await Artist.update(artist, { where: { id } })
        .then(artist => res.status(200).json(artist))
        .catch(err => res.status(404).json({ message: 'Error', data: err }))
}

async function deleteArtist(req, res) {
    const id = req.params.id
    const deleted_artist = await Artist.destroy({ where: { id } })
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
}