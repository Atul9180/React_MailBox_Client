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

    const email = await Email.create({
      sender: req.user.email,
      receiver,
      subject,
      body,
      attachments,
      read: false,
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
    let unreadCount = 0;

    sortedEmails.forEach((email) => {
      if (email.sender === user) {
        sentEmails.push(email);
      }
      if (email.receiver === user) {
        receivedEmails.push(email);
        if (!email.read) {
          unreadCount += 1;
        }
      }
    });

    res.status(200).json({ receivedEmails, sentEmails, unreadCount });
  } else {
    res.status(404);
    throw new Error("No emails found for the user");
  }
});

// @desc    Get total number of unread messages
// @route   GET /api/emails/unread
// @access  Private
const getTotalUnreadMessages = asyncHandler(async (req, res) => {
  const user = req?.user?.email;
  const totalUnread = await Email.countDocuments({
    receiver: user,
    read: false,
  });
  res.json({ totalUnread });
});

// @desc    Mark an email as read
// @route   PUT /api/emails/:id
// @access  Private
const markEmailAsRead = asyncHandler(async (req, res) => {
  const emailId = req.params.id;
  const email = await Email.findById({ _id: emailId });
  if (email) {
    email.read = true;
    await email.save();

    // Return the updated email and the total number of unread messages
    const totalUnread = await Email.countDocuments({
      receiver: req.user.email,
      read: false,
    });
    res.json({ email, totalUnread });
  } else {
    res.status(404).json({ error: "Email not found" });
  }
});

// @desc    Delete an email
// @route   DELETE /api/emails/:id
// @access  Private
const deleteEmail = asyncHandler(async (req, res) => {
  const emailId = req.params.id;
  const email = await Email.findById({ _id: emailId });
  if (email) {
    await email.remove();
    res.json({ message: "Email deleted successfully" });
  } else {
    res.status(404).json({ error: "Email not found" });
  }
});

export {
  createAndSendEmail,
  getReceivedAndSentEmails,
  getTotalUnreadMessages,
  markEmailAsRead,
  deleteEmail,
};
