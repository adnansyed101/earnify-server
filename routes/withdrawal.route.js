import express from "express";
import {
  createWithdrawal,
  updateWithdrawalStatus,
} from "../controllers/withdrawal.controller.js";
import { verifyToken } from "../controllers/jwt.controller.js";

const router = express.Router();

// Create Withdrawal
router.post("/", verifyToken, createWithdrawal);

// Update Withdrawal Status
router.patch("/status/:id", verifyToken, updateWithdrawalStatus);

export default router;
