import express from "express";
import {
  createNotification,
  getUserNotifications,
} from "../controllers/notification.cotroller.js";
import { verifyToken } from "../controllers/jwt.controller.js";

const router = express.Router();

router.post("/", verifyToken, createNotification);

router.get("/", verifyToken, getUserNotifications);

export default router;
