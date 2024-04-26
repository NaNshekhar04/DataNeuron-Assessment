const User = require("../models/userModel.js");

async function addUser(req, res) {
  try {
    const newUser = new User(req.body);
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
    const user = await User.findByIdAndUpdate(userId, updatedUserData, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Failed to update user" });
  }
}

module.exports = {
  addUser,
  updateUser,
};
