const Song = require('../models/songs.models')

async function createSong(req, res) {
    const body = req.body
    return await Song.create(body)
        .then(song => res.status(201).json(song))
        .catch(err => res.status(404).json({ message: 'Error', data: err }))
}

async function getSongById(req, res) {
    const id = req.params.id
    const song = await Song.findByPk(id)
    if (!song) {
        return res.status(404).json({ message: 'Song not found' })
    }
    return res.status(200).json(song)
}

async function getAllSongs(req, res) {
    return await Song.findAll()
    .then(songs => res.status(200).json(songs))
    .catch(err => res.status(404).json({ message: 'Error', data: err }))
}

async function updateSong(req, res) {
    const id = req.params.id
    const song = req.body
    await Song.update(song, { where: { id } })
        .then(song => res.status(200).json(song))
        .catch(err => res.status(404).json({ message: 'Error', data: err }))
}

async function deleteSong(req, res) {
    const id = req.params.id
    const deleted_song = await Song.destroy({ where: { id } })
    if (!deleted_song) {
        return res.status(404).json({ message: 'Song not found' })
    }
    return res.status(200).json(deleted_song)
}

module.exports = {
    createSong,
    getSongById,
    getAllSongs,
    updateSong,
    deleteSong
}