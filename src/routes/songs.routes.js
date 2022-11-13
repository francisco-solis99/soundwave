const router = require('express').Router()
const {
    createSong,
    getSongById,
    getAllSongs,
    updateSong,
    deleteSong
} = require('../controllers/songs.controller')
const authenticate = require('../middlewares/authentication')
const permission = require('../middlewares/permission')

router.get('/', getAllSongs)
router.get('/:id', getSongById)
router.post('/', authenticate, permission(1), createSong)
router.patch('/:id', authenticate, permission(1), updateSong)
router.delete('/:id', authenticate, permission(1), deleteSong)

module.exports = router