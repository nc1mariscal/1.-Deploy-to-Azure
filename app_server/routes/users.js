const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlAboutUs = require('../controllers/ctrlAboutUs'); // ... for the list of About Us
const ctrlContactUs = require('../controllers/ctrlContactUs'); // ... for the the list of Contact Us)
const ctrlDonations = require('../controllers/ctrlDonations'); // ... for the the list of Donations)
const ctrlGifts = require('../controllers/ctrlGifts'); // ... for the the list of Gifts)
const ctrlNeeds = require('../controllers/ctrlNeeds'); // ... for the the list of Needs)
const ctrlUsers = require('../controllers/ctrlUsers'); // ... for the the list of Users)
const ctrlWants = require('../controllers/ctrlWants'); // ... for the the list of Wants)






// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/AboutUs', ctrlAboutUs.winnerlist);  // List of World Cup winners (countries)
router.get('/ContactUs', ctrlContactUs.winnerlist);  // List of Golden ball winners (players)
router.get('/Donations', ctrlDonations.winnerlist);  // L
router.get('/Gifts', ctrlGifts.winnerlist);  // L
router.get('/Needs', ctrlNeeds.winnerlist);  // L
router.get('/Users', ctrlUsers.winnerlist);  // L
router.get('/Wants', ctrlWants.winnerlist);  // L


module.exports = router;
