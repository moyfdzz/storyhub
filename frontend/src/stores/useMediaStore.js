import { create } from "zustand";
import axios from "../lib/axios";
import { toast } from "react-hot-toast";

export const useMediaStore = create((set, get) => ({
  media: null,
  mediaList: null,
  loadingState: false,

  getAnime: async (searchTitle) => {
    try {
      const res = await axios.post("/media/getMedia", { searchTitle });

      if (res.status === 200) {
        console.log("Found the media");
        set({ animeData: res.data, loadingState: false });
        return res.data;
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log(
          "User media does not have that anime. Searching externally..."
        );

        try {
          const externalRes = await axios.get(`/anime/search/${searchTitle}`);

          set({ mediaList: externalRes.data, loadingState: false });

          return externalRes.data;
        } catch (externalError) {
          console.error("Error fetching from external API:", externalError);
          toast.error(
            externalError.response?.data?.message ||
              "An error occurred while fetching from external API"
          );
        }
      } else {
        set({ loadingState: false });
        toast.error(error.response?.data?.message || "An error occurred");
      }
    }
  },

  getMedia: async (selectedCategory, searchTitle) => {
    set({ loadingState: true });

    if (selectedCategory === "Anime") {
      await get().getAnime(searchTitle);
    }
  },
}));
