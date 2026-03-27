import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Tvseries.css";

export default function TvSeriesDetails() {
  const { id } = useParams();
  const [tvSerie, setTvSerie] = useState(null);
  const [videoKey, setVideoKey] = useState("");

  const apiKey = "cf6531032ce4f2d5f6818f9277c51864";

  useEffect(() => {
    // fetch TV series details
    const fetchTvSeriesDetails = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`
      );
      const data = await res.json();
      setTvSerie(data);
    };

    // fetch trailer
    const fetchTvSerieTrailer = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}`
      );
      const data = await res.json();

      const trailer = data.results?.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );

      if (trailer) setVideoKey(trailer.key);
    };

    fetchTvSeriesDetails();
    fetchTvSerieTrailer();
  }, [id]); // ✅ ONLY id here

  if (!tvSerie) return <h2>Loading...</h2>;

  return (
    <section className="tv-details">
      <h1>{tvSerie.name}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${tvSerie.poster_path}`}
        alt={tvSerie.name}
      />

      <p className="tv-overview">{tvSerie.overview}</p>

      {videoKey && (
        <iframe
          width="1000"
          height="450"
          src={`https://www.youtube.com/embed/${videoKey}`}
          title={`Trailer of ${tvSerie.name}`}
          allowFullScreen
        ></iframe>
      )}
    </section>
  );
}
