import Submission from "../models/submission.model.js";

export const createSubmission = async (req, res) => {
  const submission = req.body;

  if (
    !submission.taskId ||
    !submission.taskTitle ||
    !submission.payableAmount ||
    !submission.submissionDetails ||
    !submission.currentDate ||
    !submission.status ||
    !submission.worker.name ||
    !submission.worker.email ||
    !submission.buyer.name ||
    !submission.buyer.email
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newSubmission = new Submission(submission);

  try {
    await newSubmission.save();
    res.status(201).json({ success: true, data: newSubmission });
  } catch (err) {
    console.log("Error in creating job: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
