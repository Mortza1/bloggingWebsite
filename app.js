const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRoute = require('./src/routes/index');
const apiRoutes = require('./src/routes/apiRoutes'); // Example API routes

app.use('/', indexRoute);
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
