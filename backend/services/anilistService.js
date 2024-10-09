import anilistClient from "../config/anilistClient.js";

const searchAnimeByTitle = async (title) => {
  const query = `
    query ($search: String) {
      Media(search: $search, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          large
        }
        episodes
        description
      }
    }
  `;

  const variables = { search: title };

  try {
    const data = await anilistClient.request(query, variables);
    return data.Media;
  } catch (error) {
    console.error("Error fetching anime data:", error);
    throw error;
  }
};

export default searchAnimeByTitle;
