import React from "react";

interface SearchBarProps {
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery:string
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearchChange,searchQuery }) => {
  return (
    <div className="w-full my-5  shadow-md">
      <div className="relative flex items-center  mx-auto">
        <input
          type="text"
          onChange={handleSearchChange}
          value={searchQuery}
          placeholder="Search movies..."
          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
          🔍
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
