const express = require('express')
const router = express.Router()
const types = require('./typeuser.routes')
const users = require('./users.routes')
const tops = require('./tops.routes')
const artists = require('./artists.routes')
const genres = require('./genres.routes')
const songs = require('./songs.routes')
const topSongs = require('./top-songs.routes')
const auth = require('./auth.routes')
const search = require('./search.routes')

const authenticate = require('../middlewares/authentication')

// API Routes/endpoints
router.use('/types', authenticate, types)
router.use('/users', authenticate, users)
router.use('/tops', tops)
router.use('/genres', genres)
router.use('/artists', artists)
router.use('/songs', songs)
router.use('/toplist', topSongs)
router.use('/auth', auth)
router.use('/search', search)

module.exports = router
