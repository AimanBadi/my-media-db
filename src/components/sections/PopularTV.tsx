import { gql, useQuery } from "@apollo/client";
import { Carousel } from "@/components";

const GET_POPULAR = gql`
  query getPopularTV {
    getPopularTV {
      id
      title
      poster
      overview
      rating
    }
  }
`;

const PopularTV = () => {
  const { loading, error, data } = useQuery(GET_POPULAR);

  if (error) return <h2>there was an error {error.message}</h2>;

  if (loading) return <h1>loading...</h1>;
  else {
    return (
      <div className="flex flex-col justify-center items-center text-center gap-8 overflow-hidden">
        <h1 className="text-4xl font-bold">Popular TV Shows</h1>
        <Carousel movies={data.getPopularTV} baseHref="tv" />
      </div>
    );
  }
};

export default PopularTV;
