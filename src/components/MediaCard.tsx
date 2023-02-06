import { Card, Typography } from "antd";
import StarRating from "./StarRating";

const { Title, Paragraph } = Typography;

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
        position: "relative",
      }}
      cover={<img alt={title} src={src} />}
    >
      <div
        style={{
          position: "absolute",
          display: "none",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "10px",
          borderRadius: "10px",
          width: "100%",
          height: "100%",
          background: "rgba(234, 88, 12, 0.7)",
          color: "#fff",
          fontWeight: "bold",
          top: 0,
          left: 0,
        }}
      >
        <Title
          style={{
            color: "white",
            textAlign: "left",
          }}
        >
          {title}
        </Title>
        <StarRating rating={rating} disabled={true} />
        <Paragraph
          style={{
            color: "white",
            textAlign: "left",
          }}
        >
          {description.slice(0, 100)}
        </Paragraph>
      </div>
    </Card>
  );
};

export default MediaCard;
