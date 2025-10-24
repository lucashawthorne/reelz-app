import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(searchParams.get("search") || "");
  const [loading, setLoading] = useState(false);

  const [sortOption, setSortOption] = useState("");

  const handlePreview = (imdbID) => {
    navigate(`/reelz-app/movie/${imdbID}`); // ✅ navigate to details page
  };

  // Fetch movies when query changes
  useEffect(() => {
    if (query.trim()) {
      fetchMovies(query);
    }
  }, [query]);

  const fetchMovies = async (searchTerm) => {
    if (!searchTerm.trim()) return; // ignore empty searches
    setLoading(true); // start loading
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=96378173`
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search.slice(0, 6));
      } else {
        setMovies([]); // no results found
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      setMovies([]); // clear movies on error
    } finally {
      setLoading(false); // stop loading, success or error
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setSearchParams({ search: query });

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`
      );
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOption(value);
    let sorted = [...movies];
    if (value === "newest") {
      sorted.sort((a, b) => b.Year - a.Year);
    } else if (value === "oldest") {
      sorted.sort((a, b) => a.Year - b.Year);
    }
    setMovies(sorted);
  };

  return (
    <div>
      <section className="search">
        <h1 className="browse__title">Browse Our Movies</h1>
        <form onSubmit={handleSearch} className="search__container--results">
          <input
            type="text"
            className="search__box"
            placeholder="Search for Movies"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search__icon--results">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>

        <div className="results__wrapper">
          <div className="results">
            <h2 className="results__title">Search results</h2>
            <h2 className="search__name">{query}</h2>
          </div>
          <div>
            <select id="sortMovies" value={sortOption} onChange={handleSort}>
              <option value="" disabled>
                Sort by Year
              </option>
              <option value="newest">Newest to Oldest</option>
              <option value="oldest">Oldest to Newest</option>
            </select>
          </div>
        </div>

        <div className="movies">
          {loading ? (
            <p>Loading search results for “{query}”...</p>
          ) : movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.imdbID} className="movie__wrapper">
                <img
                  src={movie.Poster}
                  className="movie__img"
                  alt={movie.Title}
                />
                <h2 className="movie__title">{movie.Title}</h2>
                <h4 className="movie__year">{movie.Year}</h4>
                <button
                  className="movie__button"
                  onClick={() => handlePreview(movie.imdbID)}
                >
                  Preview
                </button>
              </div>
            ))
          ) : query ? (
            <p>No results for “{query}”.</p>
          ) : (
            <p>Start typing to search for a movie!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Movies;
