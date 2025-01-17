import express from "express";
import {
  createUser,
  getSingleUser,
  updateUserCoin,
} from "../controllers/user.controller.js";

const router = express.Router();

// Get user from query
router.get("/", getSingleUser);

// Update user coin
router.patch("/updatecoin/:id", updateUserCoin);

// Create a user
router.post("/:email", createUser);

export default router;
