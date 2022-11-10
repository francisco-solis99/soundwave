const router = require('express').Router();
const {
    getTypeUsers,
    getTypeUser,
    createTypeUser,
    updateTypeUser,
    deleteTypeUser
} = require('../controllers/typeuser.controller')

router.get('/', getTypeUsers)
router.get('/:id', getTypeUser)
router.post('/', createTypeUser)
router.patch('/:id', updateTypeUser)
router.delete('/:id', deleteTypeUser)

module.exports = router;
