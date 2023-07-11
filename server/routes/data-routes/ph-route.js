const express = require('express');
const PhController = require('../../controllers/data-controller/ph-controller');

const router = express.Router();

// define routes
router.get('', PhController.readPh);

module.exports = router;
