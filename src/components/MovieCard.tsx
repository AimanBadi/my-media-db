import { useState } from "react";

const MovieCard = ({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <img src={src} className="w-[350px] object-contain" />
      <div
        className={`absolute top-0 left-0 text-left bg-white px-4 pt-[70%] w-full h-full z-10 transition-opacity ${
          show ? "opacity-70" : "opacity-0"
        }`}
      >
        <h1 className="font-bold mb-4">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
