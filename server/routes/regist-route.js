// import dependencies and initialize the express router
const express = require('express');
const RegisterController = require('../controllers/regist-controller');

const router = express.Router();

// define routes
router.post('', RegisterController.register);

module.exports = router;
