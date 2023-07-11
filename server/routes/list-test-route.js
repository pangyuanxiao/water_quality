// import dependencies and initialize the express router
const express = require('express');
const TestsController = require('../controllers/list-test-controller');

const router = express.Router();

// define routes
router.get('', TestsController.listTests);

module.exports = router;
