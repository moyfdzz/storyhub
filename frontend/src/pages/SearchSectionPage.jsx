import SearchBar from "../components/SearchBar";
import { useMediaStore } from "../stores/useMediaStore";
import MediaListItems from "../components/MediaListItems";

const SearchSectionPage = () => {
  const { mediaList, loadingState } = useMediaStore();

  return (
    <div>
      <SearchBar />

      {!loadingState && mediaList && mediaList.length > 0 && (
        <MediaListItems mediaListItems={mediaList} />
      )}
    </div>
  );
};

export default SearchSectionPage;
