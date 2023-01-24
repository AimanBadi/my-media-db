import { useState } from "react";
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
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <img src={src} className="w-full h-full rounded-[2rem]" />
      <div
        className={`absolute top-0 left-0 text-left text-white font-bold bg-orange-400 bg-opacity-70 px-4 pt-[70%] w-full h-full z-10 transition-opacity rounded-[2rem] ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <StarRating rating={rating / 2} />
        <h1 className="font-bold mb-4">{title}</h1>
        <p>{description.slice(0, 50) + "..."}</p>
      </div>
    </div>
  );
};

export default MediaCard;
