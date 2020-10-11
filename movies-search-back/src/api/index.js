import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const fetchApi = (path = "") => {
  const completeUrl = `${BASE_URL}${path}&api_key=${API_KEY}&language=en-US`;
  return fetch(completeUrl)
    .then((res) => res.json())
    .catch(new Error("Problem fetching..."));
};

export const fetchPopularMovies = (page = 1) => {
  return fetchApi(`/movie/popular?page=${page}`);
};
