// components/MovieFilter.tsx
import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';

interface MovieFilterProps {
  movieCat: string | null;
  setMovieCat: (category: string | null) => void;
  movieYear: moment.Moment | null;
  setMovieYear: (year: moment.Moment | null) => void;
}

const MovieFilter: React.FC<MovieFilterProps> = ({
  movieCat,
  setMovieCat,
  movieYear,
  setMovieYear,
}) => {
  const currentYear = moment().year();

  const [selectedCat, setSelectedCat] = useState(movieCat);
  const [selectedYear, setSelectedYear] = useState(movieYear);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCat(e.target.value);
  };

  const handleYearChange = (value: moment.Moment | null) => {
    setSelectedYear(value);
  };

  const handleApplyFilter = () => {
    setMovieCat(selectedCat)
    setMovieYear(selectedYear)
  };

  return (
    <div className="flex flex-wrap justify-between items-center my-5 rounded-lg w-full">
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

      <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
        <DatePicker.YearPicker
          value={selectedYear}
          onChange={handleYearChange}
          format="YYYY"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-full"
          style={{
            boxShadow: 'none', // Üç boyutlu efekti kaldırıyoruz
          }}
          disabledDate={(current) => current && current.year() > currentYear} // Geçerli yıldan sonra olan yılları devre dışı bırakır

        />
      </div>

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
