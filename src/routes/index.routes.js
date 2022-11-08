const express = require('express')
const router = express.Router()
const artists = require('./artists.routes');
const genres = require('./genres.routes');
const songs = require('./songs.routes');

// API Routes/endpoints
router.use('/artists', artists);
router.use('/genres', genres);
router.use('/songs', songs);

module.exports = router;
