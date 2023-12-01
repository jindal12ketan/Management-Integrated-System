const Role = require("../../modals/role");

exports.createRole = async (req, res) => {
  try {
    const { roleName, roleDescription, roleStatus } = req.body;

    const existingRole = await Role.findOne({ name: roleName });

    if (existingRole) {
      return res.status(400).json({ message: "Role already exists" });
    }

    const role = new Role({
      name: roleName,
      description: roleDescription,
      status: roleStatus,
    });

    await role.save();

    res.status(201).json({ message: "Role created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
