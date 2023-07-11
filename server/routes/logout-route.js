// import dependencies and initialize the express router
const express = require('express');
const LogoutController = require('../controllers/logout-controller');

const router = express.Router();

// define routes
router.post('', LogoutController.logout);

module.exports = router;
