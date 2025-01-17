import express from "express";
import {
  createPayment,
  getUserPayments,
} from "../controllers/payment.controller.js";

const router = express.Router();

// Get specific user payments
router.get("/", getUserPayments);

// Create Payment
router.post("/", createPayment);

export default router;
