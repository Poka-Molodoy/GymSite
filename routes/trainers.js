const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.getTrainersPage);

module.exports = router;