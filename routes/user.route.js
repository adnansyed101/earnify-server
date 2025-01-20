import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getBestWorker,
  getSingleUser,
  updateUserCoin,
  updateUserRole,
} from "../controllers/user.controller.js";
import { verifyToken } from "../controllers/jwt.controller.js";
import { verifyAdmin } from "../controllers/vrifyRole.controller.js";

const router = express.Router();

// Get user from query
router.get("/alluser", verifyToken, verifyAdmin, getAllUsers);

// Get user from query
router.get("/", verifyToken, getSingleUser);

// Get best Worker
router.get("/bestworker", getBestWorker);

// Update user coin
router.patch("/updatecoin/:id", verifyToken, updateUserCoin);

// Delete user
router.delete("/deleteuser/:id", verifyToken, verifyAdmin, deleteUser);

// Update user role
router.patch("/updaterole/:id", verifyToken, verifyAdmin, updateUserRole);

// Create a user
router.post("/:email", createUser);

export default router;
