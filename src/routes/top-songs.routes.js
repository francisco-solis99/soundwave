const router = require('express').Router()
 const {
    getAllTopSongs,
    getTopSongsById,
    createTopSongs,
    updateTopSongs,
    deleteTopSongs
} = require('../controllers/top-songs.controller')
const authenticate = require('../middlewares/authentication')
const permission = require('../middlewares/permission')

router.get('/', getAllTopSongs)
router.get('/:id', getTopSongsById)
router.post('/', authenticate, permission(1), createTopSongs)
router.patch('/:id', authenticate, permission(1), updateTopSongs)
router.delete('/:id', authenticate, permission(1), deleteTopSongs)

module.exports = router
