// import dependencies and initialize the express router
const express = require('express');
const HelpsController = require('../controllers/list-helps-controller');

const router = express.Router();

// define routes
router.post('', HelpsController.listHelps);

module.exports = router;
