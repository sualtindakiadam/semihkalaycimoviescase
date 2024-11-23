
import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setSelectedMovie } from "src/redux/selectedMovieSlice";
import { MovieType } from "src/types/types";
interface MovieListProps {
  movies: MovieType[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const dispatch = useDispatch();

  const handleSelectMovie = (movie: MovieType) => {
    dispatch(setSelectedMovie(movie));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 text-left text-gray-600">Poster</th>
            <th className="py-2 px-4 text-left text-gray-600">Title</th>
            <th className="py-2 px-4 text-left text-gray-600">Year</th>
            <th className="py-2 px-4 text-left text-gray-600">IMDB ID</th>
          </tr>
        </thead>
        <tbody>
          {movies.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center py-4 text-gray-500">
                List boş
              </td>
            </tr>
          ) : (
            movies.map((movie) => (
              <tr key={movie.imdbID} className="border-b hover:bg-gray-100 cursor-pointer">
                <td className="py-2 px-4">
                  <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
                    alt={movie.Title}
                    className="w-20 h-28 object-cover"
                  />
                </td>
                <td className="py-2 px-4">
                  <Link
                    href={{
                      pathname: "/pages/details/" + movie.imdbID,
                      query: {
                        imdbID: movie.imdbID,
                        title: movie.Title,
                        poster: movie.Poster,
                        type: movie.Type,
                        year: movie.Year,
                      },
                    }}
                    className="text-blue-500 hover:underline"
                    onClick={() => handleSelectMovie(movie)} // Tıklanınca Redux'a yaz

                  >
                    {movie.Title}
                  </Link>
                </td>
                <td className="py-2 px-4">{movie.Year}</td>
                <td className="py-2 px-4">{movie.imdbID}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;

