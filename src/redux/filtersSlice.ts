import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersType } from 'src/types/types';
const initialState: FiltersType = {
  movieCat: '',
  movieYear: '',
  searchQuery: 'Pokemon',
  currentPage: 1,
};
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {

    setMovieCat(state, action: PayloadAction<string>) {
      state.movieCat = action.payload;
      state.currentPage = 1;
    },
    setMovieYear(state, action: PayloadAction<string>) {
      state.movieYear = action.payload;
      state.currentPage = 1;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload; 
    },
  },
});

export const {  setMovieCat, setMovieYear, setSearchQuery,setCurrentPage } = filtersSlice.actions;

export default filtersSlice.reducer;
