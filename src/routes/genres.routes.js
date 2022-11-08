const router = require('express').Router()
const {
    getAllGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre
} = require('../controllers/genres.controller')

router.get('/', getAllGenres)
router.get('/:id', getGenreById)
router.post('/', createGenre)
router.patch('/:id', updateGenre)
router.delete('/:id', deleteGenre)

module.exports = router