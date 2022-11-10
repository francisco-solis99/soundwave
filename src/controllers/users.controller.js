const { Op } = require("sequelize");
const sequelize = require('../config/db');

async function getUsers (req, res){
    const { limit, type, orderBy, sort } = req.query;
    const typesUserIds = (await sequelize.models.typeusers.findAll({ attributes: ['id'] }))
                               .map(item => item.dataValues.id);
    // console.log(Object.keys(sequelize.models.users.rawAttributes));
    const sortProp = ['ASC', 'DESC'].includes(sort?.toUpperCase()) ? sort.toUpperCase() : 'ASC';
    const orderByProp = Object.keys(sequelize.models.users.rawAttributes).includes(orderBy) ? orderBy : 'id';

    return await sequelize.models.users.findAndCountAll({
      limit: limit ? Number(limit) : limit,
      order: [
        [orderByProp, sortProp]
      ],
      where: {
        typeuserId: { [Op.in]: type ? [Number(type)] : typesUserIds }
      }
    })
      .then(data => res.json(data))
      .catch(err => res.json({ message: 'Error', data: err }))
};

async function getUserById(req, res){
    const {params: {id}} = req;
    const user = await sequelize.models.users.findByPk(id);
    if(!user) return res.status(404).json({code: 404, message: 'User not found'});
    return res.json(user);
};


async function createUser (req, res){
      const { body } = req;
      await sequelize.models.users.create({
          name: body.name,
          surname: body.surname,
          nickName: body.nickName,
          email: body.email,
          typeuserId: body.typeuserId,
          password: body.password
      })
      .then(async(user) => {
        await user.save();
        return res.status(201).json({ message: "User created successfully", data: user });
      })
      .catch(err => {
        if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name)) {
          return res.status(400).json({
            data: err.errors.map((e) => e.message),
          });
        }
        else if (err.message === 'UserType Error') {
          return res.status(400).json({ data: err.message });
        }
        else {
          return res.status(400).json({data: err});
        }
      })
    };

async function updateUser (req, res){
      const { body, params: { id } } = req;
      const user = await sequelize.models.users.findByPk(id);
      if (!user) {
        return res.status(404).json({ code: 404, message: 'User not found' });
      }
      const updateUser = await User.update({
          name: body.name,
          surname: body.surname,
          nickName: body.nickName,
          email: body.email,
          password: body.password,
          typeUserId: body.typeUserId,
      });
      return res.json({ data: updateUser });
};

 async function deleteUser (req, res){
      const { params: { id } } = req;
      const user = await sequelize.models.users.findByPk(id);
      if (!user) {
        return res.status(404).json({ code: 404, message: 'User not found' });
      }
      await user.destroy();
      return res.json();
    };

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
