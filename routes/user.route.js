import express from "express";
import { createUser, getSingleUser } from "../controllers/user.controller.js";

const router = express.Router();

// Get user from query
router.get("/", getSingleUser);

// Create a user
router.post("/:email", createUser);

export default router;
