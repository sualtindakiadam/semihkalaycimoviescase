import React from "react";
import Link from "next/link";

interface MovieListProps {
  movies: any[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Release Year</th>
          <th>IMDb ID</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.imdbID}>
            <td>
              <Link href={`/details/${movie.imdbID}`}>{movie.Title}</Link>
            </td>
            <td>{movie.Year}</td>
            <td>{movie.imdbID}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieList;
