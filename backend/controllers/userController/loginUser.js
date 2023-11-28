const User = require("../../modals/user"); // Update the path to the user model
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }

    const user = await User.findOne({ "user.email": email });

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
      return res.status(200).json(user);
    } else {
      return res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
