const router = require('express').Router();
const {
    createArtist,
    getArtistById,
    getAllArtists,
    updateArtist,
    deleteArtist
} = require('../controllers/artists.controller');

router.get('/', getAllArtists);
router.get('/:id', getArtistById);
router.post('/', createArtist);
router.patch('/:id', updateArtist);
router.delete('/:id', deleteArtist);

module.exports = router;
