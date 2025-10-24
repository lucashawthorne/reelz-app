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
    <div className="movie-detail">
      <button onClick={() => navigate(-1)} className="back__button">
        ← Back to Search
      </button>
      <h1 className="movie-detail__title">{movie.Title}</h1>
      <div className="movie-detail__content">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="movie-detail__poster"
        />
        <div className="movie-detail__info">
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Rated:</strong> {movie.Rated}
          </p>
          <p>
            <strong>Released:</strong> {movie.Released}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Language:</strong> {movie.Language}
          </p>
          <p>
            <strong>Ratings:</strong>
          </p>
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
