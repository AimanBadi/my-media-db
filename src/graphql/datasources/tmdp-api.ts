import { TmdbResponse } from "@/types/tmdbResponse";
import { RESTDataSource } from "apollo-datasource-rest";

export class TmdbAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = "https://api.themoviedb.org/3/movie";
  }

  async getPopular() {
    const result = await this.get(
      `/popular?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = result.results.map((movie: TmdbResponse) => {
      return {
        id: movie.id,
        title: movie.original_title,
        poster: movie.poster_path,
        overview: movie.overview,
        releaseDate: movie.release_date,
        rating: movie.vote_average,
      };
    });
    return data;
  }
}
