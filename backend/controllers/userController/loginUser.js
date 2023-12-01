const User = require("../../modals/user");
const Role = require("../../modals/role");
const { loginResponseDto } = require("../../dto/loginResponseDto");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }

    const user = await User.findOne({ "user.email": email });
    if (!user) {
      return res.status(400).json({ message: "User Not Found" })
    }
    const role = await Role.findOne({ _id: user.user.role });
    if (user && (await bcrypt.compare(password, user.user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "4h",
        }
      );

      user.token = token;
      const loginResponseDto = {
        user: {
          _id: user._id,
          name: user.user.name,
          email: user.user.email,
          password: user.user.password,
          role: role,
        },
        token: token,
      };
      return res.status(200).json(loginResponseDto);
    } else {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
