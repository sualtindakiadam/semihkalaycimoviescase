import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import { setSearchQuery } from "src/redux/filtersSlice";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  // Redux store'dan searchQuery değerini alıyoruz
  const searchQuery = useSelector((state: RootState) => state.selectedFilters.searchQuery);

  // Search değişikliğinde Redux store'u güncelleyen fonksiyon
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div className="w-full my-5 shadow-md">
      <div className="relative flex items-center mx-auto">
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
