import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import MovieCard from "./MovieCard";
import { gql } from "apollo-server-micro";

const HELLO_QUERY = gql`
  query Hello {
    hello
  }
`;

const Feed = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=d8778d01fcb591b12f0f36a05f29b2f3"
      );
      const data = await res.json();
      console.log("here", data);
      setMovies(data.results);
    }
    loadMovies();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center gap-8">
      <h1 className="text-4xl font-bold">Popular Movies</h1>
      <div className="grid grid-cols-3 gap-4">
        {movies &&
          movies.map((movie, idx) => (
            <Link href={`media/${movie.id}`}>
              <MovieCard
                key={idx + 1}
                title={movie.original_title}
                description={movie.overview}
                rating={movie.vote_average}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Feed;
