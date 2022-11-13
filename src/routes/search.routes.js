const router = require('express').Router()
const {
  searchSongs,
  searchTops,
  searchArtistsSongs
} = require('../controllers/search.controller')

router.get('/songs', searchSongs);
router.get('/tops', searchTops);
router.get('/artists', searchArtistsSongs);

module.exports = router;
