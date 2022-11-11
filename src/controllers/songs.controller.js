const sequelize = require('../config/db');


async function createSong(req, res) {
    const {body} = req;
    await sequelize.models.songs.create({
        name: body.name,
        year: body.year,
        linkYT: body.linkYT,
        artistId: body.artistId,
        genreId: body.genreId
    })
    .then(async(song) =>{
        await songs.save();
        return res.status(201).json({ message: 'Song created successfully', data: song});
    })
    .catch(err => res.status(404).json({ message: 'Error trying to create a new song', data: err }));
}

async function getSongById(req, res) {
    const {params: {id}} = req;
    const song = sequelize.models.songs.findOne({
        where: {id},
        include: [
            {model: sequelize.model.artists, attributes: ['id']},
            {model: sequelize.model.genres, attributes: ['id']}
        ]
    }); 
    if (!song) {
        return res.status(404).json({ message: 'Song not found' })
    }
    return res.status(200).json({data: song});
}

async function getAllSongs(req, res) {
    return await sequelize.models.songs.findAndCountAll()
    .then(song => res.status(200).json(song))
    .catch(err => res.status(404).json({ message: err.message, data: null }))
}

async function updateSong(req, res) {
    const {body, params: {id}} = req; 
    const song = await sequelize.models.songs.findByPk(id);
    if(!song){
        return res.status(404)({code: 404, message: 'Song not found'});
    }
    const updatedSong = await song.update({
        name: body.name,
        year: body.year,
        linkYT: body.linkYT,
        artistId: body.artistId,
        genreId: body.genreId
    });
    return res.json({ message: 'Song created successfully', data: updatedSong})
}

async function deleteSong(req, res) {
   const {params: {id}} = req;
   const song = await sequelize.models.songs.findByPk(id); 
   if(!song){
    return res.status(404).json({code: 404, message: 'Song not found'}); 
   }
   await song.destroy(); 
   return res.json({ message: 'Song deleted successfully'})
}; 

module.exports = {
    createSong,
    getSongById,
    getAllSongs,
    updateSong,
    deleteSong
};
