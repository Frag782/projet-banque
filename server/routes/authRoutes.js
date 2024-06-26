const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/auth/status', authController.authStatus);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/register', authController.register);

module.exports = router;