import express from "express"
import { getAdminOverview, getBuyerOverView, getWorkerOverView } from "../controllers/overview.controller.js";

const router = express.Router();

// Get Buyer Overview
router.get('/buyer', getBuyerOverView);

// Get Worker Overview
router.get('/worker', getWorkerOverView)

// Get Worker Overview
router.get('/admin', getAdminOverview)

export default router;