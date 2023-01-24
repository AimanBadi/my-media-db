import { gql, useQuery } from "@apollo/client";
import { Carousel } from "@/components";

const GET_POPULAR = gql`
  query getPopularMovies {
    getPopularMovies {
      id
      title
      poster
      overview
      rating
    }
  }
`;

const PopularMovies = () => {
  const { loading, error, data } = useQuery(GET_POPULAR);

  if (error) return <h2>there was an error {error.message}</h2>;

  if (loading) return <h1>loading...</h1>;
  else {
    return (
      <div className="flex flex-col justify-center items-center text-center gap-8 overflow-hidden">
        <h1 className="text-4xl font-bold">Popular Movies</h1>
        <Carousel movies={data.getPopularMovies} baseHref="movie" />
      </div>
    );
  }
};

export default PopularMovies;
