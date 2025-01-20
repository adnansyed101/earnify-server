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
import { verifyToken } from "../controllers/jwt.controller.js";

const router = express.Router();

// Get all Tasks
router.get("/", verifyToken, getAllTasks);

// Get Individual user tasks
router.get("/user/:email", verifyToken, getSpecificUserTask);

// Update Task's required number of workers
router.patch("/update/requiredWorker/:id", verifyToken, updateTaskRequiredWorkers);

// Update Task
router.patch("/update/:id",verifyToken, updateTask);

// Update Task
router.delete("/delete/:id",verifyToken, deleteTask);

// Get single Task
router.get("/:id",verifyToken, getSingleTask);

// Create a Task
router.post("/",verifyToken, createTask);

export default router;
