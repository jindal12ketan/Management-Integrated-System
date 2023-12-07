const Access = require("../../modals/access");
const Role = require("../../modals/role"); 
const RoleAccessMapping = require("../../modals/roleAccessMapping");

exports.saveRoleAccessMapping = async (req, res) => {
  try {
    const { role_name, access_code } = req.body;

    const existingRole = await Role.findOne({ name: role_name });
    const existingAccess = await Access.findOne({ access_code: access_code });
    const existingRoleAccessMapping = await RoleAccessMapping.findOne({
      roleId: existingRole?._id,
      accessId: existingAccess?._id,
    });

    if (existingRoleAccessMapping) {
      return res
        .status(400)
        .json({ message: "Role-Access Mapping already exists" });
    }
    if (!existingRole || !existingAccess) {
      return res.status(500).json({ message: "Role or access does not exist" });
    } else {
      const roleAccessMapping = new RoleAccessMapping({
        roleId: existingRole?._id,
        accessId: existingAccess?._id,
      });
      await roleAccessMapping.save();
      return res.status(201).json({ message: "Role-Access Mapping created successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
