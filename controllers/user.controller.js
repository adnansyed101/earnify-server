import mongoose from "mongoose";
import User from "../models/user.model.js";
import Submission from "../models/submission.model.js";
import Task from "../models/task.model.js";
import Withdrawal from "../models/withdrawal.model.js";

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
  const decodedEmail = req.user?.email;

  if (decodedEmail !== email) {
    return res.status(401).send({ message: "Unauthorized Access" });
  }

  try {
    const user = await User.findOne({ email });
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.log("Error in finding user: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateUserCoin = async (req, res) => {
  const { id } = req.params;
  const { coin } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(500).json({ success: false, message: "Invalid User Id" });
  }

  const updated = {
    $set: { coin },
  };

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updated, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedUser });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    console.log("Error in finding all users: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(500).json({ success: false, message: "Invalid User Id" });
  }

  const updated = {
    $set: { role },
  };

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updated, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedUser });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(500).json({ success: false, message: "Invalid User Id" });
  }

  try {
    await User.findByIdAndDelete(id);
    await Task.deleteMany({ buyer: id });
    await Submission.deleteMany({ worker: id });
    await Submission.deleteMany({ buyer: id });
    await Withdrawal.deleteMany({ worker: id });
    res
      .status(200)
      .json({ success: true, message: "Deleted User and All user Tasks" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getBestWorker = async (req, res) => {
  try {
    const bestWorker = await User.find({ role: "Worker" })
      .sort({ coin: -1 })
      .limit(6);
    res.status(200).json({ success: true, data: bestWorker });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
