import express from "express";
import {
  signup,
  login,
  saveQuizResult,
  getQuizResult,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/saveResult", protect, saveQuizResult);
router.get("/getResult", protect, getQuizResult)

export default router;
