import express from "express";

import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", authUser);
router.post("/", registerUser);
router.post("/register", registerUser);
router.get("/profile", protect, getUserProfile);

export default router;
