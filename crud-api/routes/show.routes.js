const express = require('express')
const router = express.Router()
const showController =   require('../controllers/show.controller');

// Retrieve all shows
router.get('/', showController.findAll);
// Create a new show
router.post('/', showController.create);
// Retrieve a single show with id
router.get('/:id', showController.findById);
// Retrieve a single show with artist
router.get('/personalize/:artist', showController.findByArtist);
// Update a show with id
router.put('/:id', showController.update);
// Delete a show with id
router.delete('/:id', showController.delete);

module.exports = router ;