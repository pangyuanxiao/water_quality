// import dependencies and initialize the express router
const express = require('express');
// eslint-disable-next-line max-len
const AddOrUpdateController = require('../controllers/add-or-update-controller');

const router = express.Router();

// define routes
router.post('', AddOrUpdateController.addOrUpdate);

module.exports = router;
