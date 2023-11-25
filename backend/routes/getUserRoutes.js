// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const User = require("../modals/user"); //  User model

// Route to get all users
router.get("/get/users", async (req, res) => {
  try {
    const users = await User.find(); // Use the find method to get all users from MongoDB
    res.send(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/post/users", async (req, res) => {
  try {
    console.log('Request received:', new Date().toISOString());

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    console.log('User object created:', new Date().toISOString());

    const response = await user.save();

    console.log('User saved to database:', new Date().toISOString());
    res.json(response);

    console.log('Response sent:', new Date().toISOString());
  } catch (error) {
    res.status(400).json({ error: 'Invalid request', message: error.message });
  }
});
module.exports = router;
