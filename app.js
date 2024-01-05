const express = require('express');
const path = require('path');
const app = express();
const connectDB = require('./src/config/db');
const port = process.env.PORT || 3000;
require('dotenv').config();

connectDB();

// Static files middleware
app.use(express.static(path.join(__dirname, 'public')));
// Middleware
app.use(express.json());

// Routes
const indexRoute = require('./src/routes/index');
const apiRoutes = require('./src/routes/apiRoutes'); // Example API routes
const authRoutes = require('./src/routes/authRoutes');

app.use('/', indexRoute);
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
