const express = require("express");
const jsonParser = require("../middleware/jsonParser");
const connectDB = require("./database");
const corsMiddleware = require("../middleware/cors");
const auth = require("../middleware/auth");

require("dotenv").config();

// routes
const userRoutes = require("../routes/userRoutes");

// Create Express application
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(jsonParser); // Parse JSON requests
app.use(corsMiddleware); // cors

// user routes
app.use("/api", userRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Hello, this is your Node.js server!");
});

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

module.exports = app;
