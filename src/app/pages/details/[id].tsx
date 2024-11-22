import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";

interface MovieDetailsProps {
  movie: MovieType | null;
}

interface MovieType {
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
  Runtime: string;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
          className="w-full md:w-1/3"
        />
        <div className="md:ml-6 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold">{movie.Title}</h1>
          <p className="text-gray-600">{movie.Year}</p>
          <p className="mt-2">
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {movie.imdbRating}
          </p>
          <p className="mt-4">
            <strong>Plot:</strong> {movie.Plot}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  // Örnek olarak, başlangıçta birkaç filmi önceden oluşturuyoruz.
  const popularMovieIds = ["tt0133093", "tt0137523", "tt0109830"]; // The Matrix, Fight Club, Forrest Gump

  const paths = popularMovieIds.map((id) => ({
    params: { id },
  }));

  return { paths, fallback: true }; // fallback: true dinamik yüklemeye izin verir
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  try {
    const res = await fetch(`http://www.omdbapi.com/?apikey=YOUR_API_KEY&i=${id}`);
    const movie = await res.json();

    if (movie.Response === "False") {
      return { notFound: true }; // 404 sayfası gösterir
    }

    return {
      props: {
        movie,
      },
      revalidate: 60, // Veriyi her 60 saniyede bir günceller
    };
  } catch (error) {
    return { notFound: true }; // Hata durumunda 404
  }
};
