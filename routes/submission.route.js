import express from "express";
import {
  createSubmission,
  getAllSubmissions,
} from "../controllers/submission.controller.js";

const router = express.Router();

// Get All submissions
router.get("/", getAllSubmissions);

// Create Submission
router.post("/", createSubmission);

export default router;
