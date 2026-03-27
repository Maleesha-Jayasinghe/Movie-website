import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  async function fetchTrendingMovies() {
    const apiKey = "cf6531032ce4f2d5f6818f9277c51864";
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  }

  return (
    <section id="popular-movies">
      <h1>Trending this Month</h1>
      <div className="movie-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.vote_average}/10</p>
          </div>
        ))}
      </div>
    </section>
  );
}
