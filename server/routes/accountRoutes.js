const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.post('/account', accountController.create_account);
router.post('/account/transaction', accountController.make_a_transaction);
router.get('/accounts/:username', accountController.find_user_accounts);

module.exports = router;