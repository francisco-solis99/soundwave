const TypeUser = require('../models/typeuser.model')

async function getTypeUsers (req, res)  {
    return await sequelize.models.typeusers.findAndCountAll()
      .then(data => res.json(data))
      .catch(err => res.json({ message: 'Error', data: err }))
  };
  
async function createTypeUser (req, res)  {
      const { body } = req;
      const user = await sequelize.models.typeusers.create({
          name: body.name  
      });
      await user.save();
      return res.status(201).json({ data: TypeUser });
    };
    
async function updateTypeUser(req, res)  {
      const { body, params: { id } } = req;
      const review = await sequelize.models.typeusers.findByPk(id);
      if (!review) {
        return res.status(404).json({ code: 404, message: 'Type user not found' });
      }
      const updateTypeUser = await TypeUser.update({
          name: body.name,
          typeuserId: body.typeuserId,
      });
      return res.json({ data: updateTypeUser });
    };
    
 async function deleteTypeUser (req, res)  {
      const { params: { id } } = req;
      const typeuser = await sequelize.models.typeusers.findByPk(id);
      if (!review) {
        return res.status(404).json({ code: 404, message: 'Type user not found' });
      }
      await typeuser.destroy();
      return res.json();
    };
    
    module.exports = {getTypeUsers, createTypeUser,updateTypeUser, deleteTypeUser};
  