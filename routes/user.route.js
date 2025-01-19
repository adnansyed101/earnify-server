import express from "express";
import {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUserCoin,
  updateUserRole,
} from "../controllers/user.controller.js";

const router = express.Router();

// Get user from query
router.get("/alluser", getAllUsers);

// Get user from query
router.get("/", getSingleUser);

// Update user coin
router.patch("/updatecoin/:id", updateUserCoin);

// Update user role
router.patch("/updaterole/:id", updateUserRole);

// Create a user
router.post("/:email", createUser);

export default router;
