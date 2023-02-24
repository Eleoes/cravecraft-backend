// Dependencies
const express = require('express');
const mongoose = require('mongoose');

// Initialize the App
const app = express();

// Configure Settings
require('dotenv').config();
const { PORT, DATABASE_URL } = process.env;

// Remove the Deprecation Warning for Mongoose's upcoming strictQuery change
mongoose.set('strictQuery', false);

// Connect to MongoDB using Mongoose
mongoose.connect(DATABASE_URL);

// Mount Middleware
mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (error) => console.log('MongoDB error:' + error.message))

// Mount routes
app.get('/', (req,res) => {
    res.send('Hello World');
});

// Tell the App to Listen
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
