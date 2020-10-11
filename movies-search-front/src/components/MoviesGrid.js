import React from "react";
import MovieCard from "./MovieCard";

const MoviesGrid = ({ movies }) => {
  return (
    <div className="MoviesGrid">
      <div className="flex flex-wrap justify-around">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
