import { notFound } from 'next/navigation';
import '../../../globals.scss'
import { MovieType } from 'src/types/types';

export default async function Page({ params }: { params: { imdbID: string } }) {
  const imdbID = params.imdbID;

  // API'den veya veri kaynağından film bilgilerini çekebilirsiniz
  const response = await fetch(
    `http://www.omdbapi.com/?i=${imdbID}&apikey=e54fbfeb`
  );
  const movie: MovieType = await response.json();

  if (!movie) {
    notFound();  // Eğer film bulunamazsa 404 sayfasına yönlendirir
  }

  return (
    <div className="movieDetails">
      <div className="movieHeader">
        <img src={movie.Poster} alt={movie.Title} className="moviePoster" />
        <div className="movieInfo">
          <h1 className="movieTitle">{movie.Title}</h1>
          <p className="movieType">{movie.Type} | {movie.Year}</p>
          <p className="movieRating">
            <strong>IMDb Rating:</strong> {movie.imdbRating} ({movie.imdbVotes} votes)
          </p>
          <p className="movieRated"><strong>Rated:</strong> {movie.Rated}</p>
          <p className="movieRuntime"><strong>Runtime:</strong> {movie.Runtime}</p>
          <p className="movieReleased"><strong>Released:</strong> {movie.Released}</p>
          <p className="movieGenre"><strong>Genre:</strong> {movie.Genre}</p>
          <p className="movieCountry"><strong>Country:</strong> {movie.Country}</p>
          <p className="movieLanguage"><strong>Language:</strong> {movie.Language}</p>
          <p className="movieAwards"><strong>Awards:</strong> {movie.Awards}</p>
          <p className="movieDirector"><strong>Director:</strong> {movie.Director || 'N/A'}</p>
          <p className="movieActors"><strong>Actors:</strong> {movie.Actors}</p>
        </div>
      </div>

      <div className="movieBody">
        <h2 className="moviePlotTitle">Plot</h2>
        <p className="moviePlot">{movie.Plot}</p>

        <div className="movieDetailsInfo">
          <p><strong>Writer:</strong> {movie.Writer}</p>
          <p><strong>Metascore:</strong> {movie.Metascore || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}
