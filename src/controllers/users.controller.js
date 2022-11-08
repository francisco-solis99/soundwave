const User = require('../models/users.model')

async function getUsers (req, res)  {
    return await sequelize.models.users.findAndCountAll()
      .then(data => res.json(data))
      .catch(err => res.json({ message: 'Error', data: err }))
  };
  
async function createUser (req, res)  {
      const { body } = req;
      const user = await sequelize.models.users.create({
          name: body.name,
          surname: body.surname,
          nickName: body.nickName,
          email: body.email,
          typeuserId: body.typeuserId,
          password: body.password
  
      });
      await user.save();
      return res.status(201).json({ data: User });
    };
    
async function updateUser (req, res)  {
      const { body, params: { id } } = req;
      const review = await sequelize.models.users.findByPk(id);
      if (!review) {
        return res.status(404).json({ code: 404, message: 'User not found' });
      }
      const updateUser = await User.update({
          name: body.name,
          surname: body.surname,
          nickName: body.nickName,
          email: body.email,
          password: body.password,
          userId: body.userId,
      });
      return res.json({ data: updateUser });
    };
    
 async function deleteUser (req, res)  {
      const { params: { id } } = req;
      const user = await sequelize.models.users.findByPk(id);
      if (!review) {
        return res.status(404).json({ code: 404, message: 'User not found' });
      }
      await user.destroy();
      return res.json();
    };
    
    module.exports = {getUsers, createUser,updateUser, deleteUser};
  