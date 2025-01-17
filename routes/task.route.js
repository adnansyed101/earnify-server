import express from "express";
import {
  createTask,
  getAllTasks,
  getSingleTask,
  getSpecificUserTask,
  updateTask,
} from "../controllers/task.controller.js";

const router = express.Router();

// Get all Tasks
router.get("/", getAllTasks);

// Get Individual user tasks
router.get("/user/:email", getSpecificUserTask);

// Update Task
router.patch("/update/:id", updateTask);

// Get single Task
router.get("/:id", getSingleTask);

// Create a Task
router.post("/", createTask);

export default router;
