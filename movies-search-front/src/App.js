import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "./api";
import MoviesGrid from "./components/MoviesGrid";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPopularMovies(page).then((data) => {
      const { page, results, total_pages } = data;
      console.log(results);
      setPage(page);
      setTotalPages(total_pages);
      setPopularMovies(results);
    });
    return () => {};
  }, []);

  useEffect(() => {
    // call api to search movies...
    console.log("searching...");
    return () => {};
  }, [searchTerm]);

  const handleSearchChange = (query) => {
    if (query === "") {
      setPopularMovies(popularMovies);
    } else {
      const normalizedQuery = query.toLowerCase();
      const filteredMovies = popularMovies.filter((movie) =>
        movie.title.toLowerCase().includes(normalizedQuery)
      );
      setSearchTerm(query);
      setPopularMovies(filteredMovies);
    }
  };

  return (
    <div className="p-6">
      <SearchBar onSearchChange={handleSearchChange} />
      {popularMovies && <MoviesGrid movies={popularMovies} />}
      {/* <Paginator current={page} total={totalPages} /> */}
    </div>
  );
};

export default App;
