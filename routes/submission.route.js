import express from "express";
import {
  createSubmission,
  getUserSubmissions,
  updateSubmissionStatus,
} from "../controllers/submission.controller.js";

const router = express.Router();

// Get All submissions
router.get("/", getUserSubmissions);

// Create Submission
router.post("/", createSubmission);

// Update Submission Status
router.patch("/update/status/:id", updateSubmissionStatus);

export default router;
