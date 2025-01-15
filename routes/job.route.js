import express from "express";
import { createJob } from "../controllers/job.controller.js";

const router = express.Router();

// Create a job
router.post("/", createJob);

export default router;
