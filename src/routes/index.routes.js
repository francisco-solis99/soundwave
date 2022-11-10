const express = require('express');
const router = express.Router();
const tops = require('./tops.routes');
const songs = require('./songs.routes');
const topSongs = require('./top-songs.routes');
const artists = require('./artists.routes');
const genres = require('./genres.routes');

// API Routes/endpoints
router.use('/tops', tops);
router.use('/songs', songs);
router.use('/toplist', topSongs);
router.use('/artists', artists);
router.use('/genres', genres);

module.exports = router;
