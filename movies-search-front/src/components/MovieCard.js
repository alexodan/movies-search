import React from "react";

const ellipsis = (str, len = 180) =>
  str.length < len ? str : str.substr(0, len) + "...";

const MovieCard = (props) => {
  const { vote_average, title, overview, poster_path, release_date } = props;
  return (
    <div className="MovieCard md:flex my-4 shadow-xl max-w-md rounded-lg bg-gray-200 overflow-hidden">
      <div className="md:flex-shrink-0">
        <img
          className="rounded-l-lg md:w-56"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 p-2">
        <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
          <h2>{title}</h2>
        </div>
        <span className="block mt-1 text-lg leading-tight text-gray-900">
          Score: {vote_average}
        </span>
        <span className="block mt-1 text-lg leading-tight text-gray-900">
          Release: {release_date}
        </span>
        <h2 className="block mt-1 text-lg leading-tight font-semibold text-gray-900">
          Summary:
        </h2>
        <p className="mt-2 text-gray-600">{ellipsis(overview)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
