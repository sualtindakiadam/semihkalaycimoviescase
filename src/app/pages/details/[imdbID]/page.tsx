import { notFound } from 'next/navigation';
import styles from './MovieDetails.module.css';

interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Director: string;
  Actors: string;
  Awards: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Rated: string;
  Ratings: { Source: string; Value: string }[];
  Released: string;
  Runtime: string;
  Writer: string;
  Country: string;
  imdbRating: string;
  imdbVotes: string;
  totalSeasons: string;
}

export default async function Page({ params }: { params: { imdbID: string } }) {
  const imdbID = params.imdbID;

  // API'den veya veri kaynağından film bilgilerini çekebilirsiniz
  const response = await fetch(
    `http://www.omdbapi.com/?i=${imdbID}&apikey=e54fbfeb`
  );
  const movie: Movie = await response.json();

  if (!movie) {
    notFound();  // Eğer film bulunamazsa 404 sayfasına yönlendirir
  }

  return (
    <div className={styles.movieDetails}>
      <div className={styles.movieHeader}>
        <img src={movie.Poster} alt={movie.Title} className={styles.moviePoster} />
        <div className={styles.movieInfo}>
          <h1 className={styles.movieTitle}>{movie.Title}</h1>
          <p className={styles.movieType}>{movie.Type} | {movie.Year}</p>
          <p className={styles.movieRating}>
            <strong>IMDb Rating:</strong> {movie.imdbRating} ({movie.imdbVotes} votes)
          </p>
          <p className={styles.movieRated}><strong>Rated:</strong> {movie.Rated}</p>
          <p className={styles.movieRuntime}><strong>Runtime:</strong> {movie.Runtime}</p>
          <p className={styles.movieReleased}><strong>Released:</strong> {movie.Released}</p>
          <p className={styles.movieGenre}><strong>Genre:</strong> {movie.Genre}</p>
          <p className={styles.movieCountry}><strong>Country:</strong> {movie.Country}</p>
          <p className={styles.movieLanguage}><strong>Language:</strong> {movie.Language}</p>
          <p className={styles.movieAwards}><strong>Awards:</strong> {movie.Awards}</p>
          <p className={styles.movieDirector}><strong>Director:</strong> {movie.Director || 'N/A'}</p>
          <p className={styles.movieActors}><strong>Actors:</strong> {movie.Actors}</p>
        </div>
      </div>

      <div className={styles.movieBody}>
        <h2 className={styles.moviePlotTitle}>Plot</h2>
        <p className={styles.moviePlot}>{movie.Plot}</p>

        <div className={styles.movieDetailsInfo}>
          <p><strong>Writer:</strong> {movie.Writer}</p>
          <p><strong>Metascore:</strong> {movie.Metascore || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}
