import { notFound } from 'next/navigation';

interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

// Server Component olarak çalıştığı için veri sunucudan çekiliyor
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
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Type}</p>
      <p>{movie.Year}</p>
    </div>
  );
}
