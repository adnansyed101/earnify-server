import express from "express";
import {
  createSubmission,
  getBuyerSubmissions,
  getWorkerSubmissions,
  updateSubmissionStatus,
  getOverview,
} from "../controllers/submission.controller.js";

const router = express.Router();

// Get All Buyer submissions
router.get("/buyer", getBuyerSubmissions);

// Get All Worker submissions
router.get("/worker", getWorkerSubmissions);

// Get All submissions
router.get("/overview", getOverview);

// Create Submission
router.post("/", createSubmission);

// Update Submission Status
router.patch("/update/status/:id", updateSubmissionStatus);

export default router;
