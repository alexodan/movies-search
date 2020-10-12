import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "./api";
import MoviesGrid from "./components/MoviesGrid";
import Paginator from "./components/Paginator";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPopularMovies(page).then((data) => {
      const { page, results, total_pages } = data;
      setPage(page);
      setTotalPages(total_pages);
      setPopularMovies(results);
      setFilteredMovies(results);
    });
    return () => {};
  }, [page]);

  // useEffect(() => {
  //   if (searchTerm) {
  //     // call api to search movies...
  //     console.log("searching...");
  //   }
  //   return () => {};
  // }, [searchTerm]);

  const handleSearchChange = (query) => {
    setSearchTerm(query);
    if (query === "") {
      setFilteredMovies(popularMovies);
    } else {
      const normalizedQuery = query.toLowerCase();
      const filtered = popularMovies.filter((movie) =>
        movie.title.toLowerCase().includes(normalizedQuery)
      );
      setFilteredMovies(filtered);
    }
  };

  const onPageClick = (page) => {
    setSearchTerm("");
    setPage(page);
  };

  return (
    <div className="p-6">
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      {filteredMovies && <MoviesGrid movies={filteredMovies} />}
      <Paginator current={page} total={totalPages} onPageClick={onPageClick} />
    </div>
  );
};

export default App;
