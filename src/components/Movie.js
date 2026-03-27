import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

export default function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchDiscoverMovies();
  }, []);

  async function fetchDiscoverMovies() {
    const apiKey = "cf6531032ce4f2d5f6818f9277c51864";
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  }

  return (
    <section id="all-movies">
      <h1>Movies</h1>
      <div className="movie-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            {/* Make the entire card clickable */}
            <Link to={`/movies/${movie.id}`} className="card-link">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.vote_average}/10</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
