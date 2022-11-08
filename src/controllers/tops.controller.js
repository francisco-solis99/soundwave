const sequelize = require('../config/db');


//Get all tops
async function getAllTops(req, res){
    return await sequelize.models.tops.findAndCountAll()
        .then(data => res.json(data))
        .catch(err => res.json({ message: 'Error', data: err}));
};

//Get top by id

async function getTopById(req, res){
    const {params: {id}} = req;
    const  top = await sequelize.models.tops.findByPk(id);
    if(!top){
        return res.status(404).json({code: 404, message: 'Top not found'});
    }
    return res.json();
};

//Create top

async function createTop(req, res){
    const {body} = req;
    return await sequelize.models.tops.create(body)
        .then(top => res.status(201).json(top))
        .catch(err => res.status(404).json({ message: 'Error', data: err }));
};

//Update

async function updateTop(req, res){
    const {body, params: {id}} = req;
    const top = await sequelize.models.tops.findByPk(id);
    if(!top){
        return res.status(404).json({code: 404, message: 'Top not found'});
    }
    const updatedTop = await top.update({
        name: body.name,
        description: body.description,
    });
    return res.json({data: updatedTop})
};

//Delete

async function deleteTop(req, res){
    const {params: {id}} = req;
    const  top = await sequelize.models.tops.findByPk(id);
    if(!top){
        return res.status(404).json({code: 404, message: 'Top not found'});
    }
    await top.destroy();
    return res.json();
}

module.exports= {
    getAllTops,
    getTopById,
    createTop,
    updateTop,
    deleteTop,
}
