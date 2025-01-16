import express from "express";
import {
  createTask,
  getAllTasks,
  getSingleTask,
} from "../controllers/task.controller.js";

const router = express.Router();

// Get all Tasks
router.get("/", getAllTasks);

// Get single Task
router.get("/:id", getSingleTask);

// Create a Task
router.post("/", createTask);

export default router;
