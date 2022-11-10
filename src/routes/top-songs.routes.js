const router = require('express').Router();

 const {
    getAllTopSongs,
    getTopSongsById,
    createTopSongs,
    updateTopSongs,
    deleteTopSongs
} = require('../controllers/top-songs.controller')

router.get('/', getAllTopSongs)
router.get('/:id', getTopSongsById)
router.post('/', createTopSongs)
router.patch('/:id', updateTopSongs)
router.delete('/:id', deleteTopSongs)

module.exports = router
