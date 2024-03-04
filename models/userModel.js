import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {phone_number: {
      type: String,
      required: true,
      unique: true,
    },
    priority: {
      type: Number,
      required: true,
      enum: [0, 1, 2], // Priority values 0, 1, 2
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
