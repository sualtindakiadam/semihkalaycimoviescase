import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { setMovieCat, setMovieYear } from 'src/redux/filtersSlice';
import '../app/globals.scss'

const MovieFilter: React.FC = () => {
  const dispatch = useDispatch();
  const { movieCat, movieYear } = useSelector((state: RootState) => state.selectedFilters);

  const currentYear = moment().year();

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
    <div className="movieFilterWrapper">
      <div className="movieFilterCategory">
        <select
          value={selectedCat ?? "null"}
          onChange={handleCategoryChange}
          className="select-category"
        >
          <option value="null">All</option>
          <option value="movie">Movies</option>
          <option value="series">TV Series</option>
          <option value="episode">TV Episodes</option>
        </select>
      </div>

      <div className="movieFilterYear">
        <DatePicker.YearPicker
          value={selectedYear}
          onChange={handleYearChange}
          format="YYYY"
          className="select-year"
          disabledDate={(current) => current && current.year() > currentYear} 
        />
      </div>

      <div className="movieFilterButton">
        <button
          onClick={handleApplyFilter}
          className="apply-button"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default MovieFilter;
