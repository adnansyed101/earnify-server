import mongoose from "mongoose";
import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
  const task = req.body;

  if (
    !task.title ||
    !task.taskDetail ||
    !task.requiredWorkers ||
    !task.payableAmount ||
    !task.completionDate ||
    !task.submissionInfo ||
    !task.imageURL ||
    !task.buyerEmail ||
    !task.buyer
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newTask = new Task(task);

  try {
    await newTask.save();
    res.status(201).json({ success: true, data: newTask });
  } catch (err) {
    console.log("Error in creating job: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ requiredWorkers: { $gt: 0 } }).populate(
      "buyer"
    );
    res.status(200).json({ success: true, data: tasks });
  } catch (err) {
    console.log("Error in finding all jobs: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getSpecificUserTask = async (req, res) => {
  const email = req.params.email;

  try {
    const tasks = await Task.find({ buyerEmail: email }).populate("buyer");

    res.status(200).json({ success: true, data: tasks });
  } catch (err) {
    console.log("Error in finding all jobs: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getSingleTask = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(500)
      .json({ success: false, message: "Invalid Service Id" });
  }

  try {
    const task = await Task.findById(id).populate("buyer");
    res.status(200).json({ success: true, data: task });
  } catch (err) {
    console.log("Error in finding job: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
