const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.getContactsPage);
router.post('/feedback', controller.createFeedback);

module.exports = router;