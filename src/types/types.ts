export interface MovieType {
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

export interface FiltersType {
  movieCat: string,
  movieYear: string
  searchQuery: string;
  currentPage: number; 
}
