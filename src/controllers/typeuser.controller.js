const sequelize = require('../config/db');

async function getTypeUsers (req, res)  {
    return await sequelize.models.typeusers.findAndCountAll()
      .then(data => res.json(data))
      .catch(err => res.json({ message: 'Error', data: err}))
};

async function getTypeUser(req, res){
  const {params: {id}} = req;
  const typeUser = await sequelize.models.typeusers.findByPk(id);
  if(!typeUser){
     return res.status(404).json({ message: 'User not found', data: null});
  }
  return res.json(typeUser);
};

async function createTypeUser (req, res){
      const { body } = req;
      await sequelize.models.typeusers.create({
          name: body.name
      })
      .then(async(typeUser) => {
      await typeUser.save();
      return res.status(201).json({ message: 'New user type created successfully', data: typeUser});
    })
    .catch(err => {
      if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name)) {
        return res.status(400).json({
          message: err.errors.map((e) => e.message),
          data: null
        });
      }
      return res.status(400).json({ message: 'Error trying to create the new type of user', data: null });
    })
  };

async function updateTypeUser(req, res)  {
      const { body, params: { id } } = req;
      const typeUser = await sequelize.models.typeusers.findByPk(id);
      if (!typeUser) {
        return res.status(404).json({ message: 'Type user not found', data: null });
      }
      await typeUser.update({
          name: body.name,
      })
      .then(async(updateUser) => {
        await updateUser.save();
        return res.status(201).json({ message: "User updated successfully", data: updateUser });
      })
      .catch(err => {
        if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name)) {
          return res.status(400).json({
            message: err.errors.map((e) => e.message),
            data: null
          });
        }
        return res.status(400).json({ message: 'Error trying to update the new type of user', data: null });
      });
};

async function deleteTypeUser (req, res)  {
      const { params: { id } } = req;
      const typeuser = await sequelize.models.typeusers.findByPk(id);
      if (!typeuser) {
        return res.status(404).json({ message: 'Type user not found', data: null });
      }
      await typeuser.destroy();
      return res.json({ message: 'Type of user removed successfully', data: true});
};

module.exports = {
     getTypeUsers,
     getTypeUser,
     createTypeUser,
     updateTypeUser,
     deleteTypeUser
};
