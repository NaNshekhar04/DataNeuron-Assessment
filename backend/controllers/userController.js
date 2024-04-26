const User = require("../models/userModel.js");

async function addUser(req, res) {
    try {
        await User.deleteMany();
        const newUser = new User(req.body);
        console.log(newUser);
        await newUser.save();
        res.status(201).json({ message: "User added successfully", user: newUser });
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ message: "Failed to add user" });
    }
}

async function updateUser(req, res) {
    const userId = req.params.id;
    const updatedUserData = req.body;

    try {
        // Find the latest document for the user
        const latestUser = await User.findOne({ userId }).sort({ createdAt: -1 });

        if (!latestUser) {
            return res.status(404).json({ message: "Latest user not found" });
        }

        // Update the latest document
        const updatedUser = await User.findByIdAndUpdate(latestUser._id, updatedUserData, {
            new: true,
        });

        res.status(200).json({ message: "Latest user updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating latest user:", error);
        res.status(500).json({ message: "Failed to update latest user" });
    }
}


async function getLatestUser(req, res) {
    try {
        const latestUser = await User.findOne().sort({ createdAt: -1 });

        if (!latestUser) {
            return res.status(404).json({ message: "Latest user not found" });
        }

        res.status(200).json({ user: latestUser });
    } catch (error) {
        console.error("Error fetching latest user:", error);
        res.status(500).json({ message: "Failed to fetch latest user" });
    }
}

module.exports = {
    addUser,
    updateUser,
    getLatestUser
};
