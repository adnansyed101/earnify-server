import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUserCoin,
  updateUserRole,
} from "../controllers/user.controller.js";
import { verifyToken } from "../controllers/jwt.controller.js";

const router = express.Router();

// Get user from query
router.get("/alluser", verifyToken, getAllUsers);

// Get user from query
router.get("/", verifyToken, getSingleUser);

// Update user coin
router.patch("/updatecoin/:id", verifyToken, updateUserCoin);

// Delete user
router.delete("/deleteuser/:id", verifyToken, deleteUser);

// Update user role
router.patch("/updaterole/:id", verifyToken, updateUserRole);

// Create a user
router.post("/:email", createUser);

export default router;
