const User = require("../../modals/user");
const Role = require("../../modals/role");
const Access = require("../../modals/access");
const RoleAccessMapping = require("../../modals/roleAccessMapping");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const loginResponseDto = require("../../dto/loginResponseDto");

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ "user.email": email });
    const role = await Role.findById(user.user.role);
    const role_accesses = await RoleAccessMapping.find({ roleId: role._id });

    const accessPromises = role_accesses.map(async (role_access) => {
      const access = await Access.findOne({ _id: role_access.accessId });
      return { authority: access.access_code };
    });
    const authorities = await Promise.all(accessPromises);

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Both email and password are required" });
    }

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user && (await bcrypt.compare(password, user.user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        { expiresIn: "4h" }
      );

      const loginResponse = loginResponseDto(user, token, role, authorities);

      return res.status(200).json(loginResponse);
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
