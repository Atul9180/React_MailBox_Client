import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, //unique true means duplication avoid creating indexes
    password: { type: String, required: true },
  },
  {
    timestamps: true, //automatically add createdAt and updatedAt to the schema
  }
);

//Encrypt password using bcrypt :
userSchema.pre("save", async function (next) {
  //if password not modified go to next middleware else hash. this refers to user.create or user.save
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// custom metd to match user entered password to hashed password in database: bool returns
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
