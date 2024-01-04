const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');

// Routes for authentication
router.post('/register', authController.signup);
router.post('/login', authController.login);
// Other authentication routes...

module.exports = router;
