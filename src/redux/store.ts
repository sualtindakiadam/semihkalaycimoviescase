'use client';

// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './selectedMovieSlice';
import selectedMovieFiltersReducer from './filtersSlice'
export const store = configureStore({
  reducer: {
    selectedFilters: selectedMovieFiltersReducer,
    selectedMovie: filterReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
