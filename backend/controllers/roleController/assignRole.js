const User = require("../../modals/user");
const Role = require("../../modals/role");

exports.assignRole = async (req, res) => {
  try {
    const { userEmail, userRole } = req.body;

    if (!userEmail || !userRole) {
      return res
        .status(400)
        .json({ message: "userEmail and userRole are required" });
    }

    const user = await User.findOne({ "user.email": userEmail });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const role = await Role.findOne({ name: userRole });

    if (!role) {
      return res.status(400).json({ message: "Role not found" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { "user.email": userEmail },
      { $set: { "user.role": role } },
    );

    if (updatedUser) {
      res.status(200).json({ message: "Role assigned to user successfully" });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
