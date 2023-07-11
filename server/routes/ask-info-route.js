// import dependencies and initialize the express router
const express = require('express');
const AskInfoController = require('../controllers/ask-info-controller');

const router = express.Router();

// define routes
router.post('', AskInfoController.askInfo);

module.exports = router;
