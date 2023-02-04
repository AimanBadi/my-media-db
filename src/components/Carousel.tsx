import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MediaCard from "./MediaCard";

const Carousel = ({ movies, baseHref }: { movies: any; baseHref: string }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth! - carousel.current?.offsetWidth!);
  }, []);

  return (
    <motion.div ref={carousel}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        style={{ display: "flex", cursor: "grab" }}
      >
        {movies.map((movie: any, idx: number) => (
          <motion.div
            style={{
              minHeight: "20rem",
              minWidth: "20rem",
              padding: "40px",
              display: "flex",
            }}
          >
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
