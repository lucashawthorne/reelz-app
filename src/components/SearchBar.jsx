import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/movies?search=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch} className="search__container">
      <input
        type="text"
        className="search__box"
        placeholder="Search for Movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search__icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default SearchBar;
