const express = require('express')
const router = express.Router()

// Here we will write the routes
router.use('/types', require('./typeuser.routes'))
router.use('/users', require('./users.routes'))

module.exports = router
