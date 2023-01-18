"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import StarRating from "@/components/StarRating";

const movie = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const router = useRouter();
  const id = usePathname()?.replace("/media", "");

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    async function loadData() {
      if (id !== undefined && id !== "") {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=d8778d01fcb591b12f0f36a05f29b2f3`
        );
        const data = await res.json();
        console.log(data);
        setMovie(data);
        setIsloading(false);
      }
    }
    loadData();
  }, [id]);

  if (isLoading) {
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
    >
      <div className="relative flex flex-col justify-center items-center pt-4">
        <div className="flex flex-col gap-4">
          <img
            className="w-[480px] object-contain"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
          <div>
            <StarRating rating={movie.vote_average / 2} />
            <h1 className="text-2xl self-start font-bold mb-2">
              {movie.original_title}
            </h1>
            <p className="max-w-lg leading-7">{movie.overview}</p>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <h1>Write your thoughts:</h1>
            <textarea className="resize-none w-full border mb-2"></textarea>
          </div>
        </div>

        <div className="absolute top-5 left-5">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="cursor-pointer"
            onClick={handleBack}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default movie;
