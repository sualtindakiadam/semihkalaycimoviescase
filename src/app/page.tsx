// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // next/navigation kullanımı
import { MovieType } from 'src/types/types'; // MovieType'ı kendi türlerinizle uyumlu hale getirin
import Pagination from 'src/components/Pagination';
import SearchBar from 'src/components/SearchBar';
import MovieList from 'src/components/MovieList';
const Page = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [searchQuery, setSearchQuery] = useState('Pokemon');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();



  useEffect(() => {
    fetchMovies();
  }, [searchQuery, currentPage]);

  const fetchMovies = async () => {
    //http://www.omdbapi.com/?i=tt3896198&apikey=e54fbfeb
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchQuery}&page=${currentPage}&apikey=e54fbfeb`
    );
    const data = await response.json();
    console.log("response data *****\n", data.Search)

    if (data.Response === 'True') {
      setMovies(data.Search);
      setTotalPages(Math.ceil(data.totalResults / 10));
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Arama yapıldığında ilk sayfaya dön
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleMovieClick = (id: string) => {
    router.push(`/movies/${id}`); // Dinamik sayfaya yönlendirme
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 w-full border rounded"
          placeholder="Search for movies..."
        />

      </div>
      <MovieList movies={movies} />

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Page;
