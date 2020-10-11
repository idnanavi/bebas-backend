const express = require('express')
const router = express.Router()
const showController =   require('../controllers/show.controller');

// Retrieve all employees
router.get('/', showController.findAll);
// Create a new employee
router.post('/', showController.create);
// Retrieve a single employee with id
router.get('/:id', showController.findById);
// Update a employee with id
router.put('/:id', showController.update);
// Delete a employee with id
router.delete('/:id', showController.delete);
module.exports = router ;