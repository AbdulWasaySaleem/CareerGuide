import express from "express";
import {
  signup,
  login,
  saveQuizResult,
  getQuizResult,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { rateLimiter } from "../middlewares/rateLimiter.js";

const router = express.Router();

// User routes
router.post("/signup",rateLimiter , signup);
router.post("/login",rateLimiter, login);
router.post("/saveResult", protect, saveQuizResult);
router.get("/getResult", protect, getQuizResult);

export default router;
