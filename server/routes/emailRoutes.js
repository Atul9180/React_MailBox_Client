import express from "express";
import {
  createAndSendEmail,
  getReceivedAndSentEmails,
} from "../controllers/emailController.js";
import { protect } from "../middleware/authMiddleware.js";

const emailroutes = express.Router();

emailroutes
  .route("/emails")
  .post(protect, createAndSendEmail)
  .get(protect, getReceivedAndSentEmails);

export default emailroutes;
