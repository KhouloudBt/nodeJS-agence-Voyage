const express = require('express')
const router = express.Router()
const hotelController =   require('src\routers\hotel.router.js');
// Retrieve all hotels
router.get('/', hotelController.findAll);
// Create a new hotel
router.post('/', hotelController.create);
// Retrieve a single hotel with id
router.get('/:id', hotelController.findById);
// Update a hotel with id
router.put('/:id', hotelController.update);
// Delete a hotel with id
router.delete('/:id', hotelController.delete);
module.exports = router