const express = require('express')
const router = express.Router()
const ticketController =   require('../controllers/ticket.controller');

// Retrieve all tickets
router.get('/', ticketController.findAll);
// Create a new ticket
router.post('/', ticketController.create);
// Retrieve a single ticket with id
router.get('/:id', ticketController.findById);
// Retrieve a single ticket with artist
router.get('/findby/:userId', ticketController.findByUserId);
// Update a ticket with id
router.put('/:id', ticketController.update);
// Delete a ticket with id
router.delete('/:id', ticketController.delete);

module.exports = router ;