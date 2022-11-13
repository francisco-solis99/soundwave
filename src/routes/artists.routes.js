const router = require('express').Router()
const {
    createArtist,
    getArtistById,
    getAllArtists,
    updateArtist,
    deleteArtist
} = require('../controllers/artists.controller')
const authenticate = require('../middlewares/authentication')
const permission = require('../middlewares/permission')

router.get('/', getAllArtists)
router.get('/:id', getArtistById)
router.post('/', authenticate, permission(1, 2), createArtist)
router.patch('/:id', authenticate, permission(1, 2), updateArtist)
router.delete('/:id', authenticate, permission(1, 2), deleteArtist)

module.exports = router
