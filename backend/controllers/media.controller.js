import Media from "../models/media.model.js";

export const getMedia = async (req, res) => {
  try {
    const { searchTitle } = req.body;

    const media = await Media.findOne({ title: searchTitle });

    if (!media) {
      return res.status(404).json({ message: "Media not found" });
    }

    res.json(media);
  } catch (error) {
    console.log("Error in getMedia controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
