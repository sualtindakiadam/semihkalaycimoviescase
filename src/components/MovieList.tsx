import React from "react";
import { useRouter } from "next/navigation";

interface MovieListProps {
  movies: any[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const router = useRouter();

  const handleMovieClick = (id: string) => {
    router.push(`/movies/${id}`); // Dinamik sayfaya yönlendirme
  };

  return (
    <div className="flex flex-col gap-4">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          onClick={() => handleMovieClick(movie.imdbID)}
          className="flex items-center border rounded-lg p-4 shadow cursor-pointer hover:bg-white group"
        >
          {/* Görsel */}
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
            alt={movie.Title}
            className="w-32 h-48 object-cover mr-4" // Görsel boyutu ve aralık
          />

          {/* Bilgi */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-300 group-hover:text-black">
              {movie.Title}
            </h3>
            <p className="text-gray-600">Year: {movie.Year}</p>
            <p className="text-gray-600">IMDB ID: {movie.imdbID}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
