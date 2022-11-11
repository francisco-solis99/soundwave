const express = require('express');
const router = express.Router();
const types = require('./typeuser.routes');
const users = require('./users.routes');
const tops = require('./tops.routes');
const songs = require('./songs.routes');
const topSongs = require('./top-songs.routes');
const artists = require('./artists.routes');
const genres = require('./genres.routes');
const auth = require('./auth.routes');

// API Routes/endpoints
router.use('/types', types);
router.use('/users', users);
router.use('/tops', tops);
router.use('/songs', songs);
router.use('/toplist', topSongs);
router.use('/artists', artists);
router.use('/genres', genres);
router.use('/auth', auth);

module.exports = router;
