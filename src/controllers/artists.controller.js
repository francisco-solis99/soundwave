const Artist = require('../models/artists.model')

async function createArtist(req, res) {
    const body = req.body
    const artist = await Artist.create(body);
    res.status(201).json(artist);
}

async function getArtistById(req, res) {
    const id = req.params.id;
    const artist = await Artist.findByPk(id);
    res.status(200).json(artist);
}

async function getAllArtists(req, res) {
    const artists = await Artist.findAll();
    res.status(200).json(artists);
}

async function updateArtist(req, res) {
    const id = req.params.id;
    const artist = req.body;
    await Artist.update(artist, { where: { id } });
    const updated_artist = await Artist.findByPk(id);
    res.status(200).json(updated_artist);
}

async function deleteArtist(req, res) {
    const id = req.params.id;
    const deleted_artist = await Artist.destroy({ where: { id } });
    res.status(200).json(deleted_artist);
}

module.exports = {
    createArtist,
    getArtistById,
    getAllArtists,
    updateArtist,
    deleteArtist
}