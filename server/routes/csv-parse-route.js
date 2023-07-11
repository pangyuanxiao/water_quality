const express = require('express');
const CsvParseController = require('../controllers/csv-parse-controller');

const router = express.Router();

// define routes
router.get('', CsvParseController.read);

module.exports = router;
