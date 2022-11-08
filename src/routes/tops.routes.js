 const router = require('express').Router();

 const {
    getAllTops,
    getTopById,
    createTop,
    updateTop,
    deleteTop,
} = require('../controllers/tops.controller')

router.get('/', getAllTops)
router.get('/:id', getTopById)
router.post('/', createTop)
router.patch('/:id', updateTop)
router.delete('/:id', deleteTop)

module.exports = router
