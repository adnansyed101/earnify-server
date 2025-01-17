import Submission from "../models/submission.model.js";

export const createSubmission = async (req, res) => {
  const submission = req.body;

  if (
    !submission.task ||
    !submission.buyerEmail ||
    !submission.workerEmail ||
    !submission.status ||
    !submission.currentDate ||
    !submission.submissionDetail ||
    !submission.worker ||
    !submission.buyer
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

export const getAllSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({}).populate('task');
    res.status(200).json({ success: true, data: submissions });
  } catch (err) {
    console.log("Error in finding all submissions: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
