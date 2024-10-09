import searchAnimeByTitle from "../services/anilistService.js";

export const getAnimeByTitle = async (req, res) => {
  const { title } = req.params;

  try {
    const anime = await searchAnimeByTitle(title);
    res.json(anime);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch anime data" });
  }
};
