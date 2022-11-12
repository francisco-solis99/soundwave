const sequelize = require('../config/db');

async function getTypeUsers(req, res) {
  return await sequelize.models.typeusers.findAndCountAll()
    .then(data => res.json(data))
    .catch(err => res.json({ message: 'Error', data: err }))
};

async function getTypeUser(req, res) {
  const { params: { id } } = req;
  const typeUser = await sequelize.models.typeusers.findByPk(id);
  if (!typeUser) return res.status(404).json({ code: 404, message: 'User not found' });
  return res.json(typeUser);
};

async function createTypeUser(req, res) {
  const { body } = req;
  const typeUser = await sequelize.models.typeusers.create({
    name: body.name
  });
  await typeUser.save();
  return res.status(201).json({ message: 'New user type created successfully', data: typeUser });
};

async function updateTypeUser(req, res) {
  const { body, params: { id } } = req;
  const typeUser = await sequelize.models.typeusers.findByPk(id);
  if (!typeUser) {
    return res.status(404).json({ code: 404, message: 'Type user not found' });
  }

  const updateTypeUser = await typeUser.update({
    name: body.name,
    typeuserId: body.typeuserId,
  });

  return res.json({ data: updateTypeUser });
};

async function deleteTypeUser(req, res) {
  const { params: { id } } = req;
  const typeuser = await sequelize.models.typeusers.findByPk(id);
  if (!typeuser) {
    return res.status(404).json({ code: 404, message: 'Type user not found' });
  }
  await typeuser.destroy();
  return res.json({ message: 'Deleted successfully' });
};

module.exports = {
  getTypeUsers,
  getTypeUser,
  createTypeUser,
  updateTypeUser,
  deleteTypeUser
};
