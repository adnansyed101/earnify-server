import express from "express";
import {
  createPayment,
  getotalPayments,
  getUserPayments,
} from "../controllers/payment.controller.js";

const router = express.Router();

// Get specific user payments
router.get("/", getUserPayments);


// Get specific user payments
router.get("/totalPayment", getotalPayments);

// Create Payment
router.post("/", createPayment);

export default router;
