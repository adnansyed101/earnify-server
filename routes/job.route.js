import express from "express";
import { createJob, getAllJobs } from "../controllers/job.controller.js";

const router = express.Router();

// Create a job
router.get("/", getAllJobs);

// Create a job
router.post("/", createJob);

export default router;
