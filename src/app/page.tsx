'use client';

import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { MovieType } from 'src/types/types'; // MovieType'ı kendi türlerinizle uyumlu hale getirin
import Pagination from 'src/components/Pagination';
import SearchBar from 'src/components/SearchBar';
import MovieList from 'src/components/MovieList';
import MovieFilter from 'src/components/MovieFilters';

const Page = () => {
  const { movieCat, movieYear, searchQuery,currentPage } = useSelector((state: RootState) => state.selectedFilters);
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMovies();
  }, [searchQuery, currentPage, movieCat, movieYear]);

  const fetchMovies = async () => {
    let movieFilterAndYear = '';

    if (movieYear) {
      movieFilterAndYear += `&y=${movieYear}`;
    }

    if (movieCat) {
      movieFilterAndYear += `&type=${movieCat}`;
    }

    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchQuery}${movieFilterAndYear}&page=${currentPage}&apikey=e54fbfeb`
    );
    const data = await response.json();
    console.log('response data *****\n', data.Search);

    if (data.Response === 'True') {
      setMovies(data.Search);
      setTotalPages(Math.ceil(data.totalResults / 10));
    } else {
      setMovies([]);
      setTotalPages(0);
    }
  };


  return (
    <div className="container mx-auto p-4">
      <SearchBar />
      <MovieFilter />
      <MovieList movies={movies} />
      <Pagination  totalPages={totalPages} />
    </div>
  );
};

export default Page;
