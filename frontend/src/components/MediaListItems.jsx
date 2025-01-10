import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MediaListItems = ({ mediaListItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else if (window.innerWidth < 1280) setItemsPerPage(3);
      else setItemsPerPage(5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
  };

  const isStartDisabled = currentIndex === 0;
  const isEndDisabled = currentIndex >= mediaListItems.length - itemsPerPage;

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl sm:text-6xl font-bold text-blue-400 mb-16">
          Search Results
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {mediaListItems?.map((media) => (
                <div
                  key={media.id}
                  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 flex-shrink-0 px-2"
                >
                  <div className="overflow-hidden h-64 flex items-center justify-center">
                    <img
                      src={media.coverImage.large}
                      alt={media.title.english}
                      className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-400 mt-2">
                      {media.title.english || media.title.romaji || "Untitled"}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            disabled={isStartDisabled}
            className={`absolute top-1/2 left-2 transform -translate-y-1/2 p-3 rounded-full transition-colors duration-300 ${
              isStartDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-600"
            }`}
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isEndDisabled}
            className={`absolute top-1/2 right-2 transform -translate-y-1/2 p-3 rounded-full transition-colors duration-300 ${
              isEndDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-600"
            }`}
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaListItems;
