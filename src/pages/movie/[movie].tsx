"use client";
import { usePathname, useRouter } from "next/navigation";
import { Space, Image, Typography, Rate } from "antd";
import { motion } from "framer-motion";
import { gql, useQuery } from "@apollo/client";
import { StarRating } from "@/components";

const { Title, Text } = Typography;

const GET_MOVIE = gql`
  query getMovieDetails($movieId: ID!) {
    getMovie(id: $movieId) {
      id
      title
      poster
      overview
      rating
    }
  }
`;

const movie = () => {
  const id = usePathname()?.replace("/movie", "").replace("/", "");

  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { movieId: id },
  });

  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  if (error) {
    return <div>There was an Error {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 50,
      }}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Space
        direction="vertical"
        style={{
          textAlign: "left",
          display: "flex",
          alignItems: "flex-start",
          maxWidth: "50%",
        }}
      >
        <Space
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Image
            width={400}
            src={`https://image.tmdb.org/t/p/original/${data.getMovie.poster}`}
          />
        </Space>

        <StarRating rating={data.getMovie.rating} disabled={true} />
        <Title>{data.getMovie.title}</Title>
        <Text>{data.getMovie.overview}</Text>
      </Space>

      {/* <div className="relative flex flex-col justify-center items-center pt-4">
        <div className="flex flex-col gap-4">
          <img
            className="w-[480px] object-contain"
            src={`https://image.tmdb.org/t/p/original/${data.getMovie.poster}`}
          />
          <div>
            <StarRating rating={data.getMovie.rating / 2} />
            <h1 className="text-2xl self-start font-bold mb-2">
              {data.getMovie.title}
            </h1>
            <p className="max-w-lg leading-7">{data.getMovie.overview}</p>
          </div>
          <ReviewForm mediaId={id as string} />
        </div>

        <div className="absolute top-5 left-5">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="cursor-pointer"
            onClick={handleBack}
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default movie;
