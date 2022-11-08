const router = require('express').Router()
const {
    createSong,
    getSongById,
    getAllSongs,
    updateSong,
    deleteSong
} = require('../controllers/songs.controller')

router.get('/', getAllSongs)
router.get('/:id', getSongById)
router.post('/', createSong)
router.patch('/:id', updateSong)
router.delete('/:id', deleteSong)

module.exports = router