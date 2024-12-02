const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.getIndexPage);
router.post('/create_call', controller.createCallRequest);

module.exports = router;