import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import { setSearchQuery } from "src/redux/filtersSlice";
import '../app/globals.scss'

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.selectedFilters.searchQuery);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div className="searchBarWrapper">
      <div className="searchBarContainer">
        <input
          type="text"
          onChange={handleSearchChange}
          value={searchQuery}
          placeholder="Search movies..."
          className="searchBarInput"
        />
        <span className="searchBarIcon">
          🔍
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
