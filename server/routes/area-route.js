// import dependencies and initialize the express router
const express = require('express');
const AreasController = require('../controllers/area-controller');

const router = express.Router();

// define routes
router.post('', AreasController.getAreas);
router.post('/amhara', AreasController.getAmhara);

module.exports = router;
