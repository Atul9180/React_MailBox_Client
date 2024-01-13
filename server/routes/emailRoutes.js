import express from "express";
import {
  createAndSendEmail,
  getReceivedAndSentEmails,
  getTotalUnreadMessages,
  markEmailAsRead,
  deleteEmail,
} from "../controllers/emailController.js";
import { protect } from "../middleware/authMiddleware.js";

const emailroutes = express.Router();

emailroutes
  .route("/emails")
  .post(protect, createAndSendEmail)
  .get(protect, getReceivedAndSentEmails);

emailroutes.get("/emails/unread", protect, getTotalUnreadMessages);

emailroutes
  .route("/emails/:id")
  .put(protect, markEmailAsRead)
  .delete(protect, deleteEmail);

export default emailroutes;
