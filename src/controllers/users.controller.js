const { Op } = require("sequelize")
const sequelize = require('../config/db')

// Get Users
async function getUsers(req, res) {
  const { limit, type, orderBy, sort } = req.query
  const typesUserIds = (await sequelize.models.typeusers.findAll({ attributes: ['id'] }))
    .map(item => item.dataValues.id)
  const sortProp = ['ASC', 'DESC'].includes(sort?.toUpperCase()) ? sort.toUpperCase() : 'ASC'
  const orderByProp = Object.keys(sequelize.models.users.rawAttributes).includes(orderBy) ? orderBy : 'id'

  return await sequelize.models.users.findAndCountAll({
    limit: limit ? Number(limit) : limit,
    order: [
      [orderByProp, sortProp]
    ],
    where: {
      typeuserId: { [Op.in]: type ? [Number(type)] : typesUserIds }
    }
  })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json({ message: err.message, data: null }))
}

async function getUserById(req, res) {
  const { params: { id } } = req
  const user = await sequelize.models.users.findByPk(id)
  if (!user) {
    return res.status(404).json({ message: 'User not found', data: null })
  }
  return res.json(user)
}

// Post - Create User
async function createUser(req, res) {
  const { body } = req
  await sequelize.models.users.create({
    name: body.name,
    surname: body.surname,
    nickName: body.nickName,
    email: body.email,
    typeUserId: body.typeUserId,
    password: body.password
  })
    .then(async (user) => {
      await user.save()
      return res.status(201).json({ message: "User created successfully", data: user })
    })
    .catch(err => {
      if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name)) {
        return res.status(400).json({
          message: err.errors.map((e) => e.message),
          data: null
        })
      }
      return res.status(400).json({ message: 'Error trying to create new user', data: null })
    })
}

// Patch - Update User
async function updateUser(req, res) {
  const { body, params: { id } } = req
  const user = await sequelize.models.users.findByPk(id)
  if (!user) {
    return res.status(404).json({ message: 'User not found', data: null })
  }
  await user.update({
    name: body.name,
    surname: body.surname,
    nickName: body.nickName,
    email: body.email,
    password: body.password,
    typeuserId: body.typeuserId
  })
    .then(async (updateUser) => {
      await updateUser.save()
      return res.status(201).json({ message: "User updated successfully", data: updateUser })
    })
    .catch(err => {
      if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name)) {
        return res.status(400).json({
          message: err.errors.map((e) => e.message),
          data: null
        })
      }
      return res.status(400).json({ message: 'Error trying to update new user', data: null })
    })
}

// Delete User
async function deleteUser(req, res) {
  const { params: { id } } = req
  const user = await sequelize.models.users.findByPk(id)
  if (!user) {
    return res.status(404).json({ message: 'User not found', data: null })
  }
  await user.destroy()
  return res.json({ message: 'User removed successfully', data: true })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
