const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.getIndexPage);
router.post('/call-requests', controller.createCallRequest);

module.exports = router;