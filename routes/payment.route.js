import express from "express";
import {
  createPayment,
  getUserPayments,
} from "../controllers/payment.controller.js";
import { verifyToken } from "../controllers/jwt.controller.js";

const router = express.Router();

// Get specific user payments
router.get("/", verifyToken, getUserPayments);

// Create Payment
router.post("/", verifyToken, createPayment);

export default router;
