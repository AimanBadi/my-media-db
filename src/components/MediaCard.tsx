import { Card } from "antd";
import StarRating from "./StarRating";

const MediaCard = ({
  src,
  title,
  description,
  rating,
}: {
  src: string;
  title: string;
  description: string;
  rating: number;
}) => {
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt={title} src={src} />}
    />
  );
};

export default MediaCard;
