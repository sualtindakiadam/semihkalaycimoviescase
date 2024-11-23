// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // next/navigation kullanımı
import { MovieType } from 'src/types/types'; // MovieType'ı kendi türlerinizle uyumlu hale getirin
import Pagination from 'src/components/Pagination';
import SearchBar from 'src/components/SearchBar';
import MovieList from 'src/components/MovieList';
import MovieFilter from 'src/components/MovieFilters';
const Page = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [searchQuery, setSearchQuery] = useState('Pokemon');
  const [movieCat, setMovieCat] = useState<string | null>(null);
  const [movieYear, setMovieYear] = useState<moment.Moment | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();


  useEffect(() => {
    fetchMovies();
  }, [searchQuery, currentPage,movieCat,movieYear]);

  const fetchMovies = async () => {
    //http://www.omdbapi.com/?i=tt3896198&apikey=e54fbfeb
      let movieFilterAndYear =""
      if (movieYear !== null) {
        const year = movieYear.format('YYYY'); // movieYear'ı 'YYYY' formatında alıyoruz
        movieFilterAndYear += `&y=${year}`;
      }

      if (movieCat !== null) {
        movieFilterAndYear += `&type=${movieCat}`;
      }
      
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchQuery}${movieFilterAndYear}&page=${currentPage}&apikey=e54fbfeb`
    );
    const data = await response.json();
    console.log("response data *****\n", data.Search)

    if (data.Response === 'True') {
      setMovies(data.Search);
      setTotalPages(Math.ceil(data.totalResults / 10));
    }
    else{
      setMovies([]);
      setTotalPages(0);
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
      <SearchBar handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
      <MovieFilter 
           movieCat={movieCat}
           setMovieCat={setMovieCat}
           movieYear={movieYear}
           setMovieYear={setMovieYear}/>
      <MovieList movies={movies} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Page;
