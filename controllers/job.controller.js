import mongoose from "mongoose";
import Job from "../models/job.model.js";

export const createJob = async (req, res) => {
  const job = req.body;

  if (
    !job.title ||
    !job.taskDetail ||
    !job.requiredWorkers ||
    !job.payableAmount ||
    !job.completionDate ||
    !job.submissionInfo ||
    !job.imageURL ||
    !job.buyer.name ||
    !job.buyer.image ||
    !job.buyer.email
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newJob = new Job(job);

  try {
    await newJob.save();
    res.status(201).json({ success: true, data: newJob });
  } catch (err) {
    console.log("Error in creating job: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.status(200).json({ success: true, data: jobs });
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
    const task = await Job.findById(id);
    res.status(200).json({ success: true, data: task });
  } catch (err) {
    console.log("Error in finding job: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
