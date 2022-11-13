const router = require('express').Router()
const {
    getAllTops,
    getTopById,
    createTop,
    updateTop,
    deleteTop,
} = require('../controllers/tops.controller')
const authenticate = require('../middlewares/authentication')
const permission = require('../middlewares/permission')

router.get('/', getAllTops)
router.get('/:id', getTopById)
router.post('/', authenticate, permission(1, 2), createTop)
router.patch('/:id', authenticate, permission(1, 2), updateTop)
router.delete('/:id', authenticate, permission(1, 2), deleteTop)

module.exports = router
