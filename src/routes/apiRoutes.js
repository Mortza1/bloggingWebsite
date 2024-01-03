const express = require('express');
const router = express.Router();

// Define your API routes here
router.get('/example', (req, res) => {
    // Example API route logic
    res.json({ message: 'This is an example API route' });
});

module.exports = router;
