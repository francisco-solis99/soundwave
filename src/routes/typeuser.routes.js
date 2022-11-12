const router = require('express').Router()
const {
    getTypeUsers,
    getTypeUser,
    createTypeUser,
    updateTypeUser,
    deleteTypeUser
} = require('../controllers/typeuser.controller')
const permission = require('../middlewares/permission')

router.get('/', permission(1), getTypeUsers)
router.get('/:id', permission(1), getTypeUser)
router.post('/', permission(1), createTypeUser)
router.patch('/:id', permission(1), updateTypeUser)
router.delete('/:id', permission(1), deleteTypeUser)

module.exports = router
