import mongoose from "mongoose";

const userMediaSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    mediaList: [
      {
        media: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Media",
          required: true,
        },
        status: {
          type: String,
          enum: ["watching", "completed", "plan-to-watch"],
          default: "plan-to-watch",
        },
        progress: {
          type: Number,
          default: 0,
        },
        score: {
          type: Number,
          min: 0,
          max: 10,
        },
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
      },
    ],
  },
  { timestamps: true }
);

const UserMedia = mongoose.model("UserMedia", userMediaSchema);

export default UserMedia;
