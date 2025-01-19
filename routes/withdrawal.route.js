import express from "express";
import {
  createWithdrawal,
  updateWithdrawalStatus,
} from "../controllers/withdrawal.controller.js";

const router = express.Router();

// Create Withdrawal
router.post("/", createWithdrawal);

// Update Withdrawal Status
router.patch("/status/:id", updateWithdrawalStatus);

export default router;
