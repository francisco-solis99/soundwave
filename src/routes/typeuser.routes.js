const router = express.Router();
const {
    getTypeUser,
    getTypeUserId,
    createTypeUser,
    updateTypeUser,
    deleteTypeUser
} = require('../controllers/users.controller')

router.get('/', getTypeUser)
router.get('/:id', getTypeUserId)
router.post('/', createTypeUser)
router.patch('/:id', updateTypeUser)
router.delete('/:id', deleteTypeUser)

module.exports = router;