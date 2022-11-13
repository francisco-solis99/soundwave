const router = require('express').Router()
const {
  searchSongs,
  searchTops,
  searchArtistsSongs,
  searchGenresSongs
} = require('../controllers/search.controller')

router.get('/songs', searchSongs);
router.get('/tops', searchTops);
router.get('/artists', searchArtistsSongs);
router.get('/genres', searchGenresSongs);

module.exports = router
