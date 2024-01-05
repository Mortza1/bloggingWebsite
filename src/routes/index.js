const express = require('express');
const router = express.Router();
const path = require('path');
const verifyToken = require('../middlewares/jwt'); // Import the middleware

// Route to serve your HTML file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'login.html'));
});

// Protect only the '/blog' route with JWT middleware
router.get('/blog', verifyToken, (req, res) => {
    if (req.userId)
        res.sendFile(path.join(__dirname, '../../public', 'blog.html'));
});

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'register.html'));
});

module.exports = router;
