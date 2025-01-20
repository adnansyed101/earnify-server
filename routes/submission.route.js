import express from "express";
import {
  createSubmission,
  getBuyerSubmissions,
  getWorkerSubmissions,
  updateSubmissionStatus,
} from "../controllers/submission.controller.js";
import { verifyToken } from "../controllers/jwt.controller.js";

const router = express.Router();

// Get All Buyer submissions
router.get("/buyer", verifyToken, getBuyerSubmissions);

// Get All Worker submissions
router.get("/worker", verifyToken, getWorkerSubmissions);

// Create Submission
router.post("/", verifyToken, createSubmission);

// Update Submission Status
router.patch("/update/status/:id", verifyToken, updateSubmissionStatus);

export default router;
