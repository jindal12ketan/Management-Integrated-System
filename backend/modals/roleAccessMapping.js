const mongoose = require("mongoose");

const roleAccessMappingSchema = new mongoose.Schema({
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  accessId: { type: mongoose.Schema.Types.ObjectId, ref: "Access" },
});

const RoleAccessMapping = mongoose.model("RoleAccessMapping", roleAccessMappingSchema);

module.exports = RoleAccessMapping;
