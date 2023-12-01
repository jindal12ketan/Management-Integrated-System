const User = require("../../modals/user");
const Role = require("../../modals/role");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.saveUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!(email && password && name)) {
      return res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ "user.email": email });
    if (oldUser) {
      return res
        .status(409)
        .json({ message: "User Already Exist. Please Login" });
    }

    const existingRole = await Role.findOne({ name: role });
    if (!existingRole) {
      return res.status(400).json({ message: "Role not found" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      user: {
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        role: existingRole._id,
      },
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    user.token = token;

    const response = await user.save();
    return res.json(response);
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ error: "Invalid request", message: error.message });
  }
};
