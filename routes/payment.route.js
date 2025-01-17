import express from "express";
import { createPayment } from "../controllers/payment.controller.js";

const router = express.Router();

// Create Payment
router.post("/", createPayment);

export default router;
