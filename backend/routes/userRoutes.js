// routes/userRoutes.js

const express = require("express");
const router = express.Router();
// const User = require("../modals/user"); //  User model

// const {getAllUsers} = require("../controllers/userController/getAllUsers");
const { postUser } = require("../controllers/userController/postUser");
const { getAllUsers } = require("../controllers/userController/getAllUsers");
// Route to get all users

router.get("/get/users", getAllUsers)
  .post("/post/user", postUser);
module.exports = router;
