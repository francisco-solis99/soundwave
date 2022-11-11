const { Op } = require('sequelize');
const sequelize = require('../config/db');


//Get all tops
async function getAllTops(req, res){
    const { limit, orderBy, sort } = req.query;
    const sortProp = ['ASC','DESC'].includes(sort?.toUpperCase()) ? sort.toUpperCase() : 'ASC';
    const orderByProp = Object.keys(sequelize.models.tops.rawAttributes).includes(orderBy) ? orderBy : 'id';

    return await sequelize.models.tops.findAndCountAll({
        limit: limit ? Number(limit) : limit, 
        order: [
            [orderByProp, sortProp]
        ]
    })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json({ message: err.message, data: null}));

};

//Get top by id

async function getTopById(req, res){
    const {params: {id}} = req;
    const top = await sequelize.models.tops.findByPk(id);
    if(!top){
        return res.status(404).json({ code: 404, message: 'Top not found', data: null});
    }
    return res.json(top);
};

//Create top

async function createTop(req, res){
    const {body} = req;
    return await sequelize.models.tops.create(body)
        .then(top => res.status(201).json({ message: 'Top created successfully', data: top}))
        .catch(err => res.status(404).json({ message: 'Error trying to create a new top', data: err }));
};

//Update

async function updateTop(req, res){
    const {body, params: {id}} = req;
    const top = await sequelize.models.tops.findByPk(id);
    if(!top){
        return res.status(404).json({ code: 404, message: 'Top not found'});
    }
    const updatedTop = await top.update({
        name: body.name,
        description: body.description,
        userId: body.userId
    });
    return res.status(201).json({ message: 'Top updated successfully', data: updatedTop})
};

//Delete

async function deleteTop(req, res){
    const {params: {id}} = req;
    const  top = await sequelize.models.tops.findByPk(id);
    if(!top){
        return res.status(404).json({ code: 404, message: 'Top not found'});
    }
    await top.destroy();
    return res.json({ message: 'Deleted succesfully'});
}

module.exports= {
    getAllTops,
    getTopById,
    createTop,
    updateTop,
    deleteTop,
}
