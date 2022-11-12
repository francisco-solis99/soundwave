const { Op } = require("sequelize");
const sequelize = require('../config/db');

async function getAllArtists(req, res) {
    const { limit, type, orderBy, sort } = req.query;
    const typesUserIds = (await sequelize.models.typeusers.findAll({ attributes: ['id'] }))
                               .map(item => item.dataValues.id);
    const sortProp = ['ASC', 'DESC'].includes(sort?.toUpperCase()) ? sort.toUpperCase() : 'ASC';
    const orderByProp = Object.keys(sequelize.models.artists.rawAttributes).includes(orderBy) ? orderBy : 'id';

    return await sequelize.models.artists.findAndCountAll({
      limit: limit ? Number(limit) : limit,
      order: [
        [orderByProp, sortProp]
      ],
      where: {
        id: { [Op.in]: type ? [Number(type)] : typesUserIds }
      }
    })
      .then(artists => res.status(200).json(artists))
      .catch(err => res.status(404).json({ message: err.message, data: null }))
};
  
async function getArtistById(req, res) {
    const id = req.params.id
    const artist = await sequelize.models.artists.findByPk(id);
    if (!artist) {
        return res.status(404).json({code: 404, message: 'Artist not found' });
    }
    return res.json(artist);
};

async function createArtist(req, res) {
    const body = req.body
    await sequelize.models.artists.create({
        name: body.name,
        country: body.country,
        ytchannel: body.ytchannel
    })
    .then(async(artist) => {
        await artist.save();
        return res.status(201).json({ message: "Artist created successfully", data: user });
    })
    .catch(err => {
        if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name)) {
         return res.status(400).json({
            message: err.errors.map((e) => e.message),
            data: null
        });
    }
        return res.status(400).json({ message: 'Error trying to create the new artist', data: null });
    })
   };
        
async function updateArtist(req, res) {
    const { body, params: { id } } = req;
    const artist = await sequelize.models.artists.findByPk(id);
    if (!artist) {
        return res.status(404).json({ code: 404, message: 'Artist not found', data: null });
    }
    await artist.update({
        name: body.name,
        country: body.country,
        ytchannel: body.ytchannel,
        artistId: body.artistId
      })
      .then(async(updateArtist) => {
        await updateArtist.save();
        return res.status(201).json({ message: "Artist updated successfully", data: updateArtist });
      })
      .catch(err => {
        if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name)) {
          return res.status(400).json({
            message: err.errors.map((e) => e.message),
            data: null
          });
        }
        return res.status(400).json({ message: 'Error trying to update the new artist', data: null });
      });
};


async function deleteArtist(req, res) {
    const id = req.params.id
    const deleted_artist = await sequelize.models.artists.findByPk(id);    
    if (!deleted_artist) {
        return res.status(404).json({ code: 404, message: 'Artist not found' });
    }
    await deleted_artist.destroy();
    return res.json({ message: 'Deleted successfully' });
  };

module.exports = {
    createArtist,
    getArtistById,
    getAllArtists,
    updateArtist,
    deleteArtist
};
