import express from "express";
import {
  createPayment,
  getTotalPayments,
  getUserPayments,
} from "../controllers/payment.controller.js";

const router = express.Router();

// Get specific user payments
router.get("/", getUserPayments);

// Get specific user payments
router.get("/totalPayment", getTotalPayments);

// Create Payment
router.post("/", createPayment);

export default router;
