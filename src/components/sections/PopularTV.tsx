import { gql, useQuery } from "@apollo/client";
import { Carousel } from "@/components";
import { Space } from "antd";

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
      <Space
        direction="vertical"
        style={{ textAlign: "center", overflow: "hidden", maxWidth: "80%" }}
      >
        <h1>Popular TV Shows</h1>
        <Carousel movies={data.getPopularTV} baseHref="movie" />
      </Space>
    );
  }
};

export default PopularTV;
