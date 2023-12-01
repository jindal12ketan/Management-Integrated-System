// models/user.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: {
    name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', default: null },
  },
  token: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
