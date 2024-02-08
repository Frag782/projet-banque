const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.post('/account', accountController.create_account);

module.exports = router;