// routes/userRoutes.js

const express = require("express");
const router = express.Router();
// const User = require("../modals/user"); //  User model

// const {getAllUsers} = require("../controllers/userController/getAllUsers");
const { saveUser } = require("../controllers/userController/saveUser");
const { getAllUsers } = require("../controllers/userController/getAllUsers");
const { loginUser } = require("../controllers/userController/loginUser");
// Route to get all users

router
  .get("/get/all/users", getAllUsers)
  .post("/save/user", saveUser)
  .post("/login/user", loginUser);
module.exports = router;
