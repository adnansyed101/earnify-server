import express from "express";
import {
  createSubmission,
  getBuyerSubmissions,
  getWorkerSubmissions,
  getWorkerSubmissionsCount,
  updateSubmissionStatus,
} from "../controllers/submission.controller.js";
import { verifyToken } from "../controllers/jwt.controller.js";
import {
  verifyBuyer,
  verifyWorker,
} from "../controllers/vrifyRole.controller.js";

const router = express.Router();

// Get All Buyer submissions
router.get("/buyer", verifyToken, verifyBuyer, getBuyerSubmissions);

// Get All Worker submissions
router.get("/worker", verifyToken, verifyWorker, getWorkerSubmissions);

// Get All Worker submissions
router.get(
  "/worker/count",
  verifyToken,
  verifyWorker,
  getWorkerSubmissionsCount
);

// Create Submission
router.post("/", verifyToken, verifyWorker, createSubmission);

// Update Submission Status
router.patch(
  "/update/status/:id",
  verifyToken,
  verifyBuyer,
  updateSubmissionStatus
);

export default router;
