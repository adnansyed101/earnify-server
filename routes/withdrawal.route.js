import express from "express";
import { createWithdrawal } from "../controllers/withdrawal.controller.js";

const router = express.Router();

// Create Withdrawal
router.post("/", createWithdrawal);

export default router;
