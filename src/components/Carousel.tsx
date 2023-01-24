import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MediaCard from "./MediaCard";

const Carousel = ({ movies, baseHref }: { movies: any; baseHref: string }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="cursor-grab overflow-hidden max-w-[80rem]"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex"
      >
        {movies.map((movie, idx) => (
          <motion.div className="min-h-[20rem] min-w-[20rem] p-[40px]">
            <Link href={`${baseHref}/${movie.id}`} key={idx + 1}>
              <MediaCard
                title={movie.title}
                description={movie.overview}
                rating={movie.rating}
                src={`https://image.tmdb.org/t/p/original/${movie.poster}`}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
