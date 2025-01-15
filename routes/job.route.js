import express from "express";
import {
  createJob,
  getAllTasks,
  getSingleTask,
} from "../controllers/job.controller.js";

const router = express.Router();

// Create a job
router.get("/", getAllTasks);

// Create single job
router.get("/:id", getSingleTask);

// Create a job
router.post("/", createJob);

export default router;
