import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
