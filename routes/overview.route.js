import express from "express"
import { getBuyerOverView, getWorkerOverView } from "../controllers/overview.controller.js";

const router = express.Router();

// Get Buyer Overview
router.get('/buyer', getBuyerOverView);

// Get Worker Overview
router.get('/worker', getWorkerOverView)

export default router;