// Dependencies
const express = require('express');

// Initialize the App
const app = express();

// Configure Settings
require('dotenv').config();
const { PORT, DATABASE_URL } = process.env;

// Connect to MongoDB using Mongoose

// Mount Middleware

// Mount routes
app.get('/', (req,res) => {
    res.send('Hello World');
});

// Tell the App to Listen
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
