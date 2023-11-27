const User = require("../../modals/user"); //  User model
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.saveUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;
    const response = await user.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: "Invalid request", message: error.message });
  }
};
