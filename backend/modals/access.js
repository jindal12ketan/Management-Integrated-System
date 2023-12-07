const mongoose = require("mongoose");

const accessSchema = new mongoose.Schema({
  parent_name: { type: String },
  operation: { type: String },
  access_code: { type: String },
});

const Access = mongoose.model("Access", accessSchema);

module.exports = Access;
