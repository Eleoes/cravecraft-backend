// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');

// Initialize the App
const app = express();

// Configure Settings
require('dotenv').config();
const { PORT, DATABASE_URL } = process.env;

// Remove the Deprecation Warning for upcoming Mongoose 7 strictQuery change
mongoose.set('strictQuery', false);

// Connect to MongoDB using Mongoose
mongoose.connect(DATABASE_URL);

// Mount Middleware
app.use(cors());
app.use(logger('dev'));

mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (error) => console.log('MongoDB error:' + error.message));

// Mount routes
app.get('/', (req,res) => {
    res.send('Welcome to CraveCraft API');
});

// Tell the App to Listen
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
