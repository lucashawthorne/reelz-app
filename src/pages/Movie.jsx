import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://omdbapi.com/?apikey=96378173&i=${id}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <h2 className="loading__text">Loading movie details...</h2>;
  if (!movie) return <h2>Movie not found.</h2>;

  return (
    <div className="movie__details">
      <button onClick={() => navigate(-1)} className="back__button">
        ← Back to Search
      </button>
      <h1 className="movie__details--title">{movie.Title}</h1>
      <div className="movie__details--content">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="movie__details--poster"
        />
        <div className="movie__details--info">
          <ul className="movie__details--list">
            <li>
              <strong>Year:</strong> {movie.Year}
            </li>
            <li>
              <strong>Rated:</strong> {movie.Rated}
            </li>
            <li>
              <strong>Released:</strong> {movie.Released}
            </li>
            <li>
              <strong>Runtime:</strong> {movie.Runtime}
            </li>
            <li>
              <strong>Genre:</strong> {movie.Genre}
            </li>
            <li>
              <strong>Actors:</strong> {movie.Actors}
            </li>
            <li>
              <strong>Plot:</strong> {movie.Plot}
            </li>
            <li>
              <strong>Language:</strong> {movie.Language}
            </li>
            <li>
              <strong>Ratings:</strong>
            </li>
          </ul>
          <ul>
            {movie.Ratings && movie.Ratings.length > 0 ? (
              movie.Ratings.map((rating, index) => (
                <li key={index}>
                  {rating.Source}: {rating.Value}
                </li>
              ))
            ) : (
              <li>No ratings available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Movie;
