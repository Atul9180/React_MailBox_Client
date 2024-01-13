import mongoose from "mongoose";

const emailSchema = mongoose.Schema(
  {
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    subject: { type: String, required: true },
    body: { type: String, required: true },
    attachments: [{ type: String }],
  },
  { timestamps: true }
);

// Indexing the 'sender', 'receiver' field
emailSchema.index({ sender: 1 });
emailSchema.index({ receiver: 1 });

const Email = mongoose.model("Email", emailSchema);
export default Email;
