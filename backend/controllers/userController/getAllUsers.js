const User = require("../../modals/user");
const Role = require("../../modals/role");
const userDto = require("../../dto/userDto");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    const userPromises = users.map(async (user) => {
      const role = await Role.findOne({ _id: user.user.role });
      return {
        _id: user.user._id,
        name: user.user.name,
        email: user.user.email,
        role: role,
      };
    });

    const usersDto = await Promise.all(userPromises);
    res.json(usersDto);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
