const express = require("express");
const router = express.Router();

const { createRole } = require("../controllers/roleController/createRole");
const { assignRole } = require("../controllers/roleController/assignRole");
const { getAllRoles } = require("../controllers/roleController/getAllRoles");

router
  .get("/get/all/roles", getAllRoles)
  .post("/create/role", createRole)
  .post("/assign/role", assignRole);
module.exports = router;
