import User from "../models/user.model.js";

export const createUser = async (req, res) => {
  const user = req.body;
  const email = req.params.email;

  const isExist = await User.findOne({ email: email });

  if (isExist) {
    return res
      .status(202)
      .json({ success: false, message: "User Already Exists in database" });
  }

  if (!user.email || !user.image || !user.name || !user.role || !user.coin) {
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

export const getSingleUser = async (req, res) => {
  const email = req.query.email;

  try {
    const user = await User.findOne({ email });
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.log("Error in finding job: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
