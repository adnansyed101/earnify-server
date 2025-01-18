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
    console.log("Error in creating task: " + err.message);
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
    console.log("Error in finding all tasks: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getSpecificUserTask = async (req, res) => {
  const email = req.params.email;

  try {
    const tasks = await Task.find({ buyerEmail: email })
      .sort({ completionDate: -1 })
      .populate("buyer");

    res.status(200).json({ success: true, data: tasks });
  } catch (err) {
    console.log("Error in finding all tasks: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getSingleTask = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(500).json({ success: false, message: "Invalid Task Id" });
  }

  try {
    const task = await Task.findById(id).populate("buyer");
    res.status(200).json({ success: true, data: task });
  } catch (err) {
    console.log("Error in finding job: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, taskDetail, submissionInfo } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(500).json({ success: false, message: "Invalid Task Id" });
  }

  const updated = {
    $set: { title, taskDetail, submissionInfo },
  };

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, updated, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedTask });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(500).json({ success: false, message: "Invalid Task Id" });
  }

  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Task Deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateTaskRequiredWorkers = async (req, res) => {
  const { id } = req.params;
  const { requiredWorkers } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(500).json({ success: false, message: "Invalid Task Id" });
  }

  const updated = {
    $set: { requiredWorkers },
  };

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, updated, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedTask });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
