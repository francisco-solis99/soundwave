const express = require('express')
const router = express.Router()
const artists = require('./artists.routes');
const genres = require('./genres.routes');

// API Routes/endpoints
router.use('/artists', artists);
router.use('/genres', genres);

module.exports = router;
