import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import MovieCard from "./MovieCard";

const GET_POPULAR = gql`
  query getPopularMovies {
    getPopular {
      id
      title
      poster
      overview
      rating
    }
  }
`;
const Feed = () => {
  const { loading, error, data } = useQuery(GET_POPULAR);

  if (error) return <h2>there was an error {error.message}</h2>;

  if (loading) return <h1>loading...</h1>;
  else {
    return (
      <div className="flex flex-col justify-center items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Popular Movies</h1>
        <div className="grid grid-cols-3 gap-4">
          {data.getPopular &&
            data.getPopular.map((movie, idx) => (
              <Link href={`media/${movie.id}`}>
                <MovieCard
                  key={idx + 1}
                  title={movie.title}
                  description={movie.overview.slice(100)}
                  rating={movie.rating}
                  src={`https://image.tmdb.org/t/p/original/${movie.poster}`}
                />
              </Link>
            ))}
        </div>
      </div>
    );
  }
};

export default Feed;
