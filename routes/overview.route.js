import express from "express";
import {
  getAdminOverview,
  getBuyerOverView,
  getWorkerOverView,
} from "../controllers/overview.controller.js";
import { verifyToken } from "../controllers/jwt.controller.js";

const router = express.Router();

// Get Buyer Overview
router.get("/buyer", verifyToken, getBuyerOverView);

// Get Worker Overview
router.get("/worker", verifyToken, getWorkerOverView);

// Get Worker Overview
router.get("/admin", verifyToken, getAdminOverview);

export default router;
