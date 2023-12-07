const express = require("express");
const router = express.Router();

const { saveRole } = require("../controllers/roleController/saveRole");
const { assignRole } = require("../controllers/roleController/assignRole");
const { getAllRoles } = require("../controllers/roleController/getAllRoles");

router
  .get("/get/all/roles", getAllRoles)
  .post("/save/role", saveRole)
  .post("/assign/role", assignRole);
module.exports = router;
