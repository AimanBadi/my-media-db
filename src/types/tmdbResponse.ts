export type TmdbMovieResponse = {
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
  release_date: Date;
  vote_average: number;
};

export type TmdbTVResponse = {
  id: number;
  poster_path: string;
  original_name: string;
  overview: string;
  first_air_date: string;
  vote_average: number;
};
