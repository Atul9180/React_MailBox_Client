import asyncHandler from "express-async-handler";
import Email from "../models/emailModel.js";
import User from "../models/userModel.js";

// @desc    Create and send an email
// @route   POST /api/emails
// @access  Private
const createAndSendEmail = asyncHandler(async (req, res) => {
  try {
    const { sender, receiver, subject, body, attachments } = req.body;

    // Validate sender
    if (sender !== req.user.email) {
      res.status(400).json({ error: "Invalid sender email" });
      return;
    }

    // Validate receiver existence
    const receiverExists = await User.countDocuments({ email: receiver });
    if (receiverExists === 0) {
      res.status(404).json({ error: "Receiver email not found" });
      return;
    }

    // Create a new email
    const email = await Email.create({
      sender: req.user.email, // Ensure consistency with sender
      receiver,
      subject,
      body,
      attachments,
    });

    if (email) {
      res.status(201).json(email);
    } else {
      res.status(500);
      throw new Error("Failed to create and send email");
    }
  } catch (error) {
    res.status(500);
    throw new Error("Internal Server Error");
  }
});

// @desc    Get all emails received by the user
// @route   GET /api/emails
// @access  Private
// const getReceivedEmails = asyncHandler(async (req, res) => {
//with lean optimization of lean
const getReceivedAndSentEmails = asyncHandler(async (req, res) => {
  const user = req.user.email;

  const emails = await Email.find({
    $or: [{ sender: user }, { receiver: user }],
  }).lean();

  if (emails.length > 0) {
    const sortedEmails = emails.sort((a, b) => b.createdAt - a.createdAt);
    const receivedEmails = [];
    const sentEmails = [];

    sortedEmails.forEach((email) => {
      if (email.sender === user) {
        sentEmails.push(email);
      }
      if (email.sender !== user || email.receiver === email.sender) {
        receivedEmails.push(email);
      }
    });

    res.status(200).json({ receivedEmails, sentEmails });
  } else {
    res.status(404);
    throw new Error("No emails found for the user");
  }
});

export { createAndSendEmail, getReceivedAndSentEmails };
