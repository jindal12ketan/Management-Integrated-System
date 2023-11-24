const express = require('express');
const jsonParser = require('../middleware/jsonParser');
const connectDB = require('./database');

// Create Express application
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(jsonParser); // Parse JSON requests

// Routes
app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js server!');
});

module.exports = app;