const Role = require("../../modals/role");

exports.getAllRoles = async (req, res) => {
    try {
        const roles = await Role.find(); 
        res.send(roles);
    } catch (error) {
        console.error("Error fetching users:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}