const sequelize = require('../config/db');
const Songs = require('../models/songs.models');

//Get all top-songs 
async function getAllTopSongs(req, res){
    const topSongs = await sequelize.models.topSongs.findAndCountAll();
    return res.status(200).json({data: topSongs}); 
}; 

//Get top-songs by id

async function getTopSongsById(req, res){
    const {params: {id}} = req; 
    const topSongs = await sequelize.models.topSongs.findOne({
        where: {id}, 
        include: [
            {model: sequelize.models.tops, attributes: ['id']},
            {model: sequelize.models.songs, attributes: ['id']},
        ]
    });
    if(!topSongs){
        return res.status(404).json({code: 404, message: 'Top not found'}); 
    }
    return res.status(201).json({data: topSongs});
};

//Create 

async function createTopSongs(req, res){
    const {body} = req; 
    const topSongs = await sequelize.models.topSongs.create({
        topId: body.topId, 
        songId: body.songId
    });
    await topSongs.save();
    return res.status(201).json({data: topSongs});
};

//Update

async function updateTopSongs(req, res){
    const {body, params: {id}} = req; 
    const topSongs = await sequelize.models.topSongs.findByPk(id);
    if(!topSongs){
        return res.status(404).json({code: 404, message: 'Top not found'}); 
    }
    const updatedTopSongs = await topSongs.update({
        topId: body.topId, 
        songId: body.songId
    }); 
    return res.json({data: updatedTopSongs}); 
};

//Delete

async function deleteTopSongs(req, res){
    const {params: {id}} = req; 
    const topSongs= await sequelize.models.topSongs.findByPk(id);
    if(!topSongs){
        return res.status(404).json({code: 404, message: 'Top not found'});
    }
    await topSongs.destroy();
    return res.json(); 
}; 

module.exports = {
    getAllTopSongs, 
    getTopSongsById, 
    createTopSongs,
    updateTopSongs,
    deleteTopSongs
}; 