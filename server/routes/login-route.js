// import dependencies and initialize the express router
const express = require('express');
const LoginController = require('../controllers/login-controller');

const router = express.Router();

// define routes
router.post('', LoginController.login);

module.exports = router;
