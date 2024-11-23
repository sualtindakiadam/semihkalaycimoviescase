// store/selectedMovieSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieType } from 'src/types/types';

interface SelectedMovieState {
  selectedMovie: MovieType | null;
}

const initialState: SelectedMovieState = {
  selectedMovie: null, // Başlangıçta seçili bir film yok
};

const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<MovieType>) => {
      console.log("redux selected data ------- \n",action.payload)
      state.selectedMovie = action.payload;
    },
    clearSelectedMovie: (state) => {
      state.selectedMovie = null; // Seçili filmi temizler
    },
  },
});

export const { setSelectedMovie, clearSelectedMovie } = selectedMovieSlice.actions;
export default selectedMovieSlice.reducer;
