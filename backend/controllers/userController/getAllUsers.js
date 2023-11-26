const User = require("../../modals/user"); //  User model

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find(); // Use the find method to get all users from MongoDB
        res.send(users);
    } catch (error) {
        console.error("Error fetching users:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}