import express from "express";
import {
  getAdminOverview,
  getBuyerOverView,
  getWorkerOverView,
} from "../controllers/overview.controller.js";
import { verifyToken } from "../controllers/jwt.controller.js";
import { verifyAdmin, verifyBuyer, verifyWorker } from "../controllers/vrifyRole.controller.js";

const router = express.Router();

// Get Buyer Overview
router.get("/buyer", verifyToken, verifyBuyer, getBuyerOverView);

// Get Worker Overview
router.get("/worker", verifyToken, verifyWorker, getWorkerOverView);

// Get Worker Overview
router.get("/admin", verifyToken, verifyAdmin, getAdminOverview);

export default router;
