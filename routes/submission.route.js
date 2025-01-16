import express from "express"
import { createSubmission } from "../controllers/submission.controller.js";

const router = express.Router()

// Create Submission
router.post("/", createSubmission);


export default router