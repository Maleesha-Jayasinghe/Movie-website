import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";


export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videoKey, setVideoKey] = useState("");

  const apiKey = "cf6531032ce4f2d5f6818f9277c51864";

useEffect(() => {
  const fetchMovieDetails = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
    const data = await res.json();
    setMovie(data);
  };

  const fetchMovieTrailer = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
    );
    const data = await res.json();
    const trailer = data.results.find((vid) => vid.type === "Trailer");
    if (trailer) setVideoKey(trailer.key);
  };

  fetchMovieDetails();
  fetchMovieTrailer();
}, [id, apiKey]);


  if (!movie) return <h2>Loading...</h2>;

  return (
    <section className="movie-details">
      <h1>{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <p className="movie-overview">{movie.overview}</p>

      {videoKey && (
       <iframe
  width="1000"
  height="450"
  src={`https://www.youtube.com/embed/${videoKey}`}
  title={`Trailer of ${movie.title}`}  // ✅ added title
  allowFullScreen
></iframe>

      )}
    </section>
  );
}
