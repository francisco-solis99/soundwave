const router = require('express').Router()
const {
  searchSongs
} = require('../controllers/search.controller')

router.get('/songs', searchSongs);

module.exports = router;
