const express = require('express');
const router = express.Router();
const path = require('path');

// Route to serve your HTML file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'login.html' ))
});

router.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'blog.html'))
})

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'register.html'))
})

module.exports = router;
