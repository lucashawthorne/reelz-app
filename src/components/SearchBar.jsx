import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();


  const handleSearch = (event) => {
    event.preventDefault();
    if (!query.trim()) return;
    navigate(`/reelz-app/movies?search=${encodeURIComponent(query)}`);
  };

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery); // update local state
    setSearchParams({ search: newQuery }); // update URL for back button navigation
  };

  return (
    <form onSubmit={handleSearch} className="search__container">
      <input
        type="text"
        className="search__box"
        placeholder="Search for Movies"
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit" className="search__icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default SearchBar;
