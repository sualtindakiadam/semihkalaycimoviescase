'use client';
import { configureStore } from '@reduxjs/toolkit';
import selectedMovieFiltersReducer from './filtersSlice'
export const store = configureStore({
  reducer: {
    selectedFilters: selectedMovieFiltersReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
