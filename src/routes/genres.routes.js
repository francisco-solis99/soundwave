const router = require('express').Router()
const {
    getAllGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre
} = require('../controllers/genres.controller')
const authenticate = require('../middlewares/authentication')
const permission = require('../middlewares/permission')

router.get('/', getAllGenres)
router.get('/:id', getGenreById)
router.post('/', authenticate, permission(1, 2), createGenre)
router.patch('/:id', authenticate, permission(1, 2), updateGenre)
router.delete('/:id', authenticate, permission(1, 2), deleteGenre)

module.exports = router
