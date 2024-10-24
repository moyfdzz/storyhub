import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema(
  {
    mediaId: {
      type: String, // Unique ID from an external API
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["anime", "movie", "manga", "comic", "book", "series"],
      required: true,
    },
    apiSource: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Media = mongoose.model("Media", mediaSchema);

export default Media;
