import React from "react";
import Link from "next/link";

interface MovieListProps {
  movies: any[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="flex flex-col gap-4">
      {movies.map((movie) => (
           <Link  href={{
            pathname: '/pages/details/'+movie.imdbID,
            query: {
              imdbID: movie.imdbID,
              title: movie.Title,
              poster: movie.Poster,
              type: movie.Type,
              year: movie.Year,
            },
          }} key={movie.imdbID}>
          <div className="flex items-center border rounded-lg p-4 shadow cursor-pointer hover:bg-white group">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
              alt={movie.Title}
              className="w-32 h-48 object-cover mr-4"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-300 group-hover:text-black">
                {movie.Title}
              </h3>
              <p className="text-gray-600">Year: {movie.Year}</p>
              <p className="text-gray-600">IMDB ID: {movie.imdbID}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
