const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Set static folder for serving HTML, CSS, JS files
app.use(express.static(path.join(__dirname, 'public')));

// Define your API routes or other backend logic here

// Route to serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
