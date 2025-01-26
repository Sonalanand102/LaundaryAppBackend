const express = require('express');
const { getVendors } = require('../controllers/vendorController'); // Import the controller

const router = express.Router();

// Define the route for getting all vendors with their services
router.get('/vendors', getVendors);

module.exports = router;
