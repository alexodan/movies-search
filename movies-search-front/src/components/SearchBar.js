import React, { useState } from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    onSearchChange(value);
  };

  return (
    <div className="flex justify-center">
      <input
        value={searchTerm}
        onChange={handleChange}
        className="outline-none border-black border-solid border-b-2 w-64 text-center"
        type="text"
        placeholder="Search for a movie by title"
      />
    </div>
  );
};

export default SearchBar;
