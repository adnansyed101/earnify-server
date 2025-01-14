import User from "../models/user.model.js";

export const createUser = async (req, res) => {
  const user = req.body;

  if (!user.email || !user.image || !user.name || !user.role) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json({ success: true, data: newUser });
  } catch (err) {
    console.log("Error in creating user: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
