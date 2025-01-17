import express from "express";
import {
  createSubmission,
  getUserSubmissions,
} from "../controllers/submission.controller.js";

const router = express.Router();

// Get All submissions
router.get("/", getUserSubmissions);

// Create Submission
router.post("/", createSubmission);

export default router;
