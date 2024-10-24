import anilistClient from "../config/anilistClient.js";

const searchAnimeByTitle = async (title) => {
  const query = `
    query ($search: String, $page: Int, $perPage: Int) {
      Page(page: $page, perPage: $perPage) {
        media(search: $search, type: ANIME) {
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
    }
  `;

  const variables = {
    search: title,
    page: 1,
    perPage: 10,
  };

  try {
    const data = await anilistClient.request(query, variables);
    return data.Page.media;
  } catch (error) {
    console.error("Error fetching anime data:", error);
    throw error;
  }
};

export default searchAnimeByTitle;
