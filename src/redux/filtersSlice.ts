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
    // Filtreleri ayarlayan action
    setFilters(state, action: PayloadAction<FiltersType>) {
      return action.payload;
    },
    // Bireysel filtre güncellemeleri
    setMovieCat(state, action: PayloadAction<string>) {
      state.movieCat = action.payload;
    },
    setMovieYear(state, action: PayloadAction<string>) {
      state.movieYear = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload; // Sayfa numarasını günceller
    },

    // Filtreleri sıfırlama
    resetFilters() {
      return initialState;
    },
  },
});

export const { setFilters, setMovieCat, setMovieYear, setSearchQuery,setCurrentPage, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
