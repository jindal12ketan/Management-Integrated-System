const Access = require("../../modals/access");

exports.saveAccess = async (req, res) => {
  try {
    const { parent_name, operation, access_code } = req.body;

    const existingAccess = await Access.findOne({ access_code: access_code });

    if (existingAccess) {
      return res.status(400).json({ message: "Access already exists" });
    }

    const access = new Access({
      parent_name,
      operation,
      access_code,
    });

    await access.save();

    res.status(201).json({ message: "Access created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
