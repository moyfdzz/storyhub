import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("Anime");

  const categories = ["Anime", "Series", "Movies", "Books"];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center space-x-6 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-lg font-semibold px-4 py-2 ${
              selectedCategory === category
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-300 hover:text-blue-400"
            } transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder={`Type to find ${selectedCategory}`}
          className="w-full max-w-xl px-4 py-2 bg-gray-800 text-gray-300 placeholder-gray-500 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="ml-2 text-gray-400 hover:text-blue-400 transition duration-300 flex items-center">
          <Search />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
