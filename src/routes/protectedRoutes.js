const express = require('express');
const router = express.Router();
const path = require('path');
const verifyToken = require('../middlewares/jwt'); // Import the middleware

router.get('/blog', verifyToken, (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'blog.html'));
});

module.exports = router;