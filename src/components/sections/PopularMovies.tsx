import { gql, useQuery } from "@apollo/client";
import { Space } from "antd";
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
      <Space
        direction="vertical"
        style={{ textAlign: "center", overflow: "hidden", maxWidth: "80%" }}
      >
        <h1>Popular Movies</h1>
        <Carousel movies={data.getPopularMovies} baseHref="movie" />
      </Space>
    );
  }
};

export default PopularMovies;
