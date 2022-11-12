const sequelize = require('../config/db')
const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const { authorization } = req.headers

    jwt.verify(authorization, 'secretKey', async (error, decoded) => {
        // Return error if token is not valid or expired
        if (error) return res.status(401).json({ message: 'Unauthorized!' })
        
        // Search if there's a user with the id within the token
        const user = await sequelize.models.users.findOne({ where: { id: decoded.userId } })

        if (!user) return res.status(404).json({ code:404, message:'User not found'})

        // If the user exists call the next function
        req.user = user
        next()
    })
}

module.exports = authenticate