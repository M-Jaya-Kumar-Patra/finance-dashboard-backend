import express from "express";
import {
  getSummary,
  getCategoryBreakdown,
  getMonthlyTrends,
} from "../controllers/dashboardController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/summary", protect, getSummary);
router.get("/categories", protect, getCategoryBreakdown);
router.get("/trends", protect, getMonthlyTrends);

export default router;