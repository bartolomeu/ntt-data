export class OmdbResponse {
  Title: string;
  Year: string;
  Rated: string;
  Released: Date | string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [
    {
      Source: string;
      Value: string;
    },
  ];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: Date | string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
