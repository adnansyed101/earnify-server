import express from "express";
import { createUser } from "../controllers/user.controller.js";

const router = express.Router();

// Create a user
router.post("/:email", createUser);

export default router;
