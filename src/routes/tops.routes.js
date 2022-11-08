 const router = express.Router();

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
router.updateTop('/:id', updateTop)
router.deleteTop('/:id', deleteTop)

module.exports = router