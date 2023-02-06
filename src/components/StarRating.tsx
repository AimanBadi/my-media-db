import { Rate } from "antd";

const StarRating = ({
  rating = 0,
  disabled = true,
}: {
  rating: number;
  disabled: boolean;
}) => {
  return (
    <Rate
      disabled={disabled}
      defaultValue={Math.floor((rating / 2) * 10) / 10}
    />
  );
};

export default StarRating;
