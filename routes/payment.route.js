import express from "express";
import {
  createPayment,
  getUserPayments,
} from "../controllers/payment.controller.js";
import { verifyToken } from "../controllers/jwt.controller.js";
import { verifyBuyer } from "../controllers/vrifyRole.controller.js";

const router = express.Router();

// Get specific user payments
router.get("/", verifyToken, verifyBuyer, getUserPayments);

// Create Payment
router.post("/", verifyToken, verifyBuyer, createPayment);

export default router;
