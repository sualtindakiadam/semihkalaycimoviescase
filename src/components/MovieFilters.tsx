// components/MovieFilter.tsx
import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { setMovieCat, setMovieYear } from 'src/redux/filtersSlice';

const MovieFilter: React.FC = () => {
  const dispatch = useDispatch();
  const { movieCat, movieYear } = useSelector((state: RootState) => state.selectedFilters);

  const currentYear = moment().year();

  // Local state for managing temporary selection before applying
  const [selectedCat, setSelectedCat] = useState<string | null>(movieCat || null);
  const [selectedYear, setSelectedYear] = useState<moment.Moment | null>(
    movieYear ? moment(movieYear, "YYYY") : null
  );

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCat(e.target.value === "null" ? null : e.target.value);
  };

  const handleYearChange = (value: moment.Moment | null) => {
    setSelectedYear(value);
  };

  const handleApplyFilter = () => {
    dispatch(setMovieCat(selectedCat || ""));
    dispatch(setMovieYear(selectedYear ? selectedYear.format("YYYY") : ""));
  };

  return (
    <div className="flex flex-wrap justify-between items-center my-5 rounded-lg w-full">
      {/* Category Filter */}
      <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
        <select
          value={selectedCat ?? "null"}
          onChange={handleCategoryChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-full"
        >
          <option value="null">All</option>
          <option value="movie">Movies</option>
          <option value="series">TV Series</option>
          <option value="episode">TV Episodes</option>
        </select>
      </div>

      {/* Year Filter */}
      <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
        <DatePicker.YearPicker
          value={selectedYear}
          onChange={handleYearChange}
          format="YYYY"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-full"
          style={{
            boxShadow: 'none', // Remove 3D effect
          }}
          disabledDate={(current) => current && current.year() > currentYear} // Disable future years
        />
      </div>

      {/* Apply Filter Button */}
      <div className="w-full sm:w-auto">
        <button
          onClick={handleApplyFilter}
          className="w-full sm:w-auto px-6 py-3 mt-4 sm:mt-0 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default MovieFilter;
