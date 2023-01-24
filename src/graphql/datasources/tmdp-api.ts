import { TmdbMovieResponse, TmdbTVResponse } from "@/types/tmdbResponse";
import { RESTDataSource } from "apollo-datasource-rest";

export class TmdbAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = "https://api.themoviedb.org/3";
  }

  async getPopularMovies() {
    const result = await this.get(
      `/movie/popular?api_key=${process.env.TMDB_API_KEY}`
    );
    return result.results.map((movie: TmdbMovieResponse) => {
      return {
        id: movie.id,
        title: movie.original_title,
        poster: movie.poster_path,
        overview: movie.overview,
        releaseDate: movie.release_date,
        rating: movie.vote_average,
      };
    });
  }

  async getMovie(id: number) {
    const result = await this.get(
      `/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
    );
    return {
      id: result.id,
      title: result.original_title,
      poster: result.poster_path,
      overview: result.overview,
      releaseDate: result.release_date,
      rating: result.vote_average,
    };
  }

  async getPopularTV() {
    const result = await this.get(
      `/tv/popular?api_key=${process.env.TMDB_API_KEY}`
    );
    return result.results.map((tv: TmdbTVResponse) => {
      return {
        id: tv.id,
        title: tv.original_name,
        releaseDate: tv.first_air_date,
        poster: tv.poster_path,
        overview: tv.overview,
        rating: tv.vote_average,
      };
    });
  }

  async getTV(id: number) {
    const result = await this.get(
      `/tv/${id}?api_key=${process.env.TMDB_API_KEY}`
    );

    return {
      id: result.id,
      title: result.original_name,
      releaseDate: result.first_air_date,
      poster: result.poster_path,
      overview: result.overview,
      rating: result.vote_average,
    };
  }
}
