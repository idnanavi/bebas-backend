const express = require('express')
const router = express.Router()
const quotationController =   require('../controllers/quotation.controller');

// Retrieve all quotation
router.get('/', quotationController.findAll);
// Create a new quotation
router.post('/', quotationController.create);
// Retrieve a single quotation with id
router.get('/:id', quotationController.findById);
// Update a quotation with id
router.put('/:id', quotationController.update);
// Delete a quotation with id
router.delete('/:id', quotationController.delete);

module.exports = router ;