import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getSingleTask,
  getSpecificUserTask,
  updateTask,
  updateTaskRequiredWorkers,
} from "../controllers/task.controller.js";

const router = express.Router();

// Get all Tasks
router.get("/", getAllTasks);

// Get Individual user tasks
router.get("/user/:email", getSpecificUserTask);

// Update Task's required number of workers
router.patch("/update/requiredWorker/:id", updateTaskRequiredWorkers);

// Update Task
router.patch("/update/:id", updateTask);

// Update Task
router.delete("/delete/:id", deleteTask);

// Get single Task
router.get("/:id", getSingleTask);

// Create a Task
router.post("/", createTask);

export default router;
