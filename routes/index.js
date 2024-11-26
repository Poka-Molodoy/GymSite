const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.getIndexPage);
router.post('/', controller.createCallRequest);

module.exports = router;