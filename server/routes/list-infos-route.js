// import dependencies and initialize the express router
const express = require('express');
const InfosController = require('../controllers/list-infos-controller');

const router = express.Router();

// define routes
router.post('', InfosController.listRecommends);

module.exports = router;
