const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlNeeds = require('../controllers/ctrlNeeds'); // ... for the list of Needs
const ctrlWants = require('../controllers/ctrlWants'); // ... for the the list of Wants

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/needs', ctrlNeeds.needsList);  // List of Needs
router.get('/wants', ctrlWants.wantsList);  // List of Wants

module.exports = router;