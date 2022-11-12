const router = require('express').Router()
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/users.controller')
const permission = require('../middlewares/permission')

router.get('/', permission(1), getUsers)
router.get('/:id', permission(1), getUserById)
router.post('/', permission(1), createUser)
router.patch('/:id', permission(1), updateUser)
router.delete('/:id', permission(1), deleteUser)

module.exports = router

