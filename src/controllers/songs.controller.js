const sequelize = require('../config/db')


async function createSong(req, res) {
    const { body } = req
    await sequelize.models.songs.create({
        name: body.name,
        year: body.year,
        linkYT: body.linkYT,
        artistId: body.artistId,
        genreId: body.genreId,
        userId: body.userId
    })
        .then(async (song) => {
            await song.save()
            return res.status(201).json({ message: 'Song created successfully', data: song })
        })
        .catch(err => {
            if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name)) {
                return res.status(400).json({
                    message: err.errors.map((e) => e.message),
                    data: null
                })
            }
            return res.status(400).json({ message: 'Error trying to create new song', data: null })
        })
}


async function getSongById(req, res) {
    const { params: { id } } = req;
    const song = await sequelize.models.songs.findOne({
        where: { id },
        include: [
            { model: sequelize.models.artists, attributes: ['id', 'name', 'country', 'ytchannel'] },
            { model: sequelize.models.genres, attributes: ['id', 'name'] }
        ]
    });
    if (!song) {
        return res.status(404).json({ message: 'Song not found' })
    }
    return res.status(200).json({ data: song })
}

async function getAllSongs(req, res) {
    const { limit, orderBy, sort } = req.query
    const sortProp = ['ASC', 'DESC'].includes(sort?.toUpperCase()) ? sort.toUpperCase() : 'ASC'
    const orderByProp = Object.keys(sequelize.models.users.rawAttributes).includes(orderBy) ? orderBy : 'id'

    return await sequelize.models.songs.findAndCountAll({
        limit: limit ? Number(limit) : limit,
        order: [
            [orderByProp, sortProp]
        ],
        include: [
            { model: sequelize.models.artists, attributes: ['id', 'name', 'country', 'ytchannel', 'urlImage', 'userId'] },
            { model: sequelize.models.genres, attributes: ['id', 'name', 'urlImage', 'userId'] }
        ]
    })
        .then(song => res.status(200).json(song))
        .catch(err => res.status(404).json({ message: err.message, data: null }))
}


async function getAllSongsByUserId(req, res) {
    const { limit, id } = req.query;
    const songsByUser = await sequelize.models.songs.findAll({
        where: { userId: id === 'null' ? null : Number(id) },
        include: [
            { model: sequelize.models.artists, attributes: ['id', 'name', 'country', 'ytchannel', 'urlImage', 'userId'] },
            { model: sequelize.models.genres, attributes: ['id', 'name', 'urlImage', 'userId'] }
        ],
        limit: limit ? Number(limit) : limit
    })
    if (!songsByUser) {
        return res.status(404).json({ message: 'Songs not found', data: null })
    }
    return res.status(200).json(songsByUser);
}

async function updateSong(req, res) {
    const { body, params: { id } } = req
    const song = await sequelize.models.songs.findByPk(id)
    if (!song) {
        return res.status(404)({ message: 'Song not found', data: null })
    }
    const updatedSong = await song.update({
        name: body.name,
        year: body.year,
        linkYT: body.linkYT,
        artistId: body.artistId,
        genreId: body.genreId
    })
    return res.json({ message: 'Song created successfully', data: updatedSong })
}

async function deleteSong(req, res) {
    const { params: { id } } = req
    const song = await sequelize.models.songs.findByPk(id)
    if (!song) {
        return res.status(404).json({ message: 'Song not found', data: null })
    }
    await song.destroy()
    return res.json({ message: 'Song deleted successfully', data: true })
}

module.exports = {
    createSong,
    getSongById,
    getAllSongs,
    getAllSongsByUserId,
    updateSong,
    deleteSong
}
