import React from "react";
import Link from "next/link";
import { MovieType } from "src/types/types";
import '../app/globals.scss'
interface MovieListProps {
  movies: MovieType[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movieListWrapper">
      <table className="movieListTable">
        <thead>
          <tr>
            <th className="movieListHeader">Poster</th>
            <th className="movieListHeader">Title</th>
            <th className="movieListHeader">Year</th>
            <th className="movieListHeader">IMDB ID</th>
          </tr>
        </thead>
        <tbody>
          {movies.length === 0 ? (
            <tr>
              <td colSpan={4} className="movieListEmpty">
                List boş
              </td>
            </tr>
          ) : (
            movies.map((movie) => (
              <tr key={movie.imdbID} className="movieListRow">
                <td className="movieListCell">
                  <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
                    alt={movie.Title}
                    className="moviePoster"
                  />
                </td>
                <td className="movieListCell">
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
                    className="movieListLink"
                  >
                    {movie.Title}
                  </Link>
                </td>
                <td className="movieListCell">{movie.Year}</td>
                <td className="movieListCell">{movie.imdbID}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
