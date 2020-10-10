const API_URL = `http://localhost:5000/movies/popular`;

export const fetchPopularMovies = (page = 1) {
  return fetch(`${API_URL}&page=${page}`);
}
