const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/accounts', accountController.findAccounts);
router.post('/account', accountController.createAccount);
router.post('/account/transaction', accountController.make_a_transaction);

module.exports = router;