import express from "express";
import {
  createSubmission,
  getBuyerSubmissions,
  getWorkerSubmissions,
  updateSubmissionStatus,
} from "../controllers/submission.controller.js";

const router = express.Router();

// Get All submissions
router.get("/buyer", getBuyerSubmissions);

// Get All submissions
router.get("/worker", getWorkerSubmissions);

// Create Submission
router.post("/", createSubmission);

// Update Submission Status
router.patch("/update/status/:id", updateSubmissionStatus);

export default router;
