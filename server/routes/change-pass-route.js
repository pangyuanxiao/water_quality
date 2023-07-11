// import dependencies and initialize the express router
const express = require('express');
const ChangePassController = require('../controllers/change-pass-controller');

const router = express.Router();

// define routes
router.post('', ChangePassController.changePass);

module.exports = router;
