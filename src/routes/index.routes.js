const express = require('express')
const router = express.Router()
const types = require('./typeuser.routes')
const users = require('./users.routes')
const tops = require('./tops.routes')
const songs = require('./songs.routes')
const topSongs = require('./top-songs.routes')
const artists = require('./artists.routes')
const genres = require('./genres.routes')
const auth = require('./auth.routes')

const authenticate = require('../middlewares/authentication')

// API Routes/endpoints
router.use('/artists', artists)
router.use('/auth', auth)
router.use('/genres', genres)
router.use('/songs', songs)
router.use('/toplist', topSongs)
router.use('/tops', tops)
router.use('/types', authenticate, types)
router.use('/users', authenticate, users)

module.exports = router
