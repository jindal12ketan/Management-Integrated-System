const express = require("express");
const router = express.Router();

const { saveAccess } = require("../controllers/accessController/saveAccess");
const {
  saveRoleAccessMapping,
} = require("../controllers/roleAccessMappingController/saveRoleAccessMapping");

router
  .post("/save/access", saveAccess)
  .post("/save/roleAccessMapping", saveRoleAccessMapping);
module.exports = router;
