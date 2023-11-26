const User = require("../../modals/user"); //  User model

exports.postUser = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        const response = await user.save();
        res.json(response);

    } catch (error) {
        res.status(400).json({ error: 'Invalid request', message: error.message });
    }
}