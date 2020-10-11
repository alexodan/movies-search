import React, { useState } from "react";

const SearchBar = ({ onSearchChange }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    onSearchChange(value);
  };

  return (
    <div className="flex justify-center">
      <input
        value={text}
        onChange={handleChange}
        className="outline-none border-black border-solid border-b-2 w-64 text-center"
        type="text"
        placeholder="Search for a movie by title"
      />
    </div>
  );
};

export default SearchBar;
