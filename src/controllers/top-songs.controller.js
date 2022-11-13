const sequelize = require('../config/db')

// Get Top-Songs
async function getAllTopSongs(req, res) {
    return await sequelize.models.topSongs.findAndCountAll()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json({ message: err.message, data: null }))
}

async function getTopSongsById(req, res) {
    const { params: { id } } = req
    const topSongs = await sequelize.models.topSongs.findOne({
        where: { id },
        include: [
            { model: sequelize.models.tops, attributes: ['name'] },
            { model: sequelize.models.songs, attributes: ['name'] },
        ]
    })
    if (!topSongs) {
        return res.status(404).json({ message: 'Top not found', data: null })
    }
    return res.status(201).json({ data: topSongs })
}

// Post - Create Top-Songs
async function createTopSongs(req, res) {
    const { body } = req
    await sequelize.models.topSongs.create({
        topId: body.topId,
        songId: body.songId
    })
        .then(async (topSongs) => {
            await topSongs.save()
            return res.status(201).json({ message: 'Top created successfully', data: topSongs })
        })
        .catch(err => res.status(404).json({ message: 'Error trying to create new top', data: err }))
}

// Patch - Update
async function updateTopSongs(req, res) {
    const { body, params: { id } } = req
    const topSongs = await sequelize.models.topSongs.findByPk(id)
    if (!topSongs) {
        return res.status(404).json({ message: 'Top not found', data: null })
    }
    const updatedTopSongs = await topSongs.update({
        topId: body.topId,
        songId: body.songId
    })
    return res.json({ message: 'Top updated successfully', data: updatedTopSongs })
}

// Delete
async function deleteTopSongs(req, res) {
    const { params: { id } } = req
    const topSongs = await sequelize.models.topSongs.findByPk(id)
    if (!topSongs) {
        return res.status(404).json({ message: 'Top not found', data: null })
    }
    await topSongs.destroy()
    return res.json({ message: 'Deleted successfully', data: true })
}

module.exports = {
    getAllTopSongs,
    getTopSongsById,
    createTopSongs,
    updateTopSongs,
    deleteTopSongs
}
