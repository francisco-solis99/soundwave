const router = require('express').Router()
 const {
    getAllTopSongs,
    getTopSongsById,
    createTopSongs,
    updateTopSongs,
    deleteTopSongs,
    getSongsByTopId,
} = require('../controllers/top-songs.controller')
const authenticate = require('../middlewares/authentication')
const permission = require('../middlewares/permission')

router.get('/', getAllTopSongs)
router.get('/:id', getTopSongsById)
router.get('/top/:id', getSongsByTopId)
router.post('/', authenticate, permission(1, 2), createTopSongs)
router.patch('/:id', authenticate, permission(1, 2), updateTopSongs)
router.delete('/:id', authenticate, permission(1, 2), deleteTopSongs)

module.exports = router
