const sequelize = require('../config/db')
const jwt = require('jsonwebtoken')

async function login(req, res) {
    const { body } = req

    // Find if there's a user with the given email
    const user = await sequelize.models.users.findOne({
        where: { email: body.email }
    })

    // If there's no user with that email return error
    if (!user) return res.status(401).json({ message: 'No user registered with this email' })

    // If there's a user, check if the password is correct
    if (!user.validPassword(body.password)) return res.status(401).json({ message: 'Invalid credentials' })

    // Generate token
    const token = jwt.sign({ userId: user.id }, 'secretKey', {
        expiresIn: "10h"
    })

    // Return success message
    return res.json({ message: 'Successful login!', token })
}

async function signup(req, res) {
    const { body } = req

    // Find if there's a user with the given email
    let user = await sequelize.models.users.findOne({
        where: { email: body.email }
    })

    // If there's is return unique email error
    if (user) return res.status(400).json({ message: "Ups! This email is already registered" })

    // If not, create new user
    user = await sequelize.models.users.create({
        name: body.name,
        surname: body.surname,
        nickName: body.nickName,
        email: body.email,
        password: body.password,
        typeuserId: body.typeuserId,
    })

    // Save user
    await user.save()
    return res.json({ message: 'User has been successfully created' })
}

module.exports = {
    login,
    signup
}
