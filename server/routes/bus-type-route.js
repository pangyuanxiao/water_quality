// import dependencies and initialize the express router
const express = require('express');
const BusTypeController = require('../controllers/bus-type-controller');

const router = express.Router();

// define routes
router.post('', BusTypeController.busTypes);

module.exports = router;
