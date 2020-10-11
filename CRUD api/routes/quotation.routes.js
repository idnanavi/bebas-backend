const express = require('express')
const router = express.Router()
const quotationController =   require('../controllers/quotation.controller');

// Retrieve all employees
router.get('/', quotationController.findAll);
// Create a new employee
router.post('/', quotationController.create);
// Retrieve a single employee with id
router.get('/:id', quotationController.findById);
// Update a employee with id
router.put('/:id', quotationController.update);
// Delete a employee with id
router.delete('/:id', quotationController.delete);
module.exports = router ;