const express = require("express");
const jsonParser = require("../middleware/jsonParser");
const connectDB = require("./database");
const corsMiddleware = require("../middleware/cors");
const auth = require("../middleware/auth");
require("dotenv").config();

const userRoutes = require("../routes/userRoutes");
const roleRoutes = require("../routes/roleRoutes");
const accessRoutes = require("../routes/accessRoutes");
const app = express();

connectDB();

// Middleware
app.use(jsonParser);
app.use(corsMiddleware);

// user routes
app.use("/api", userRoutes);
app.use("/api", roleRoutes);
app.use("/api", accessRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Hello, this is your Node.js server!");
});

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

module.exports = app;
