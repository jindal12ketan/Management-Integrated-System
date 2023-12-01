const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  description: { type: String },
  status: { type: Boolean },
});

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
