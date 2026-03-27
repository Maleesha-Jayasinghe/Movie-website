import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Tvseries.css";

export default function TvSeries() {
  const [tvSeries, setTvSeries] = useState([]);

  useEffect(() => {
    fetchDiscoverTvseries();
  }, []);

  async function fetchDiscoverTvseries() {
    const apiKey = "cf6531032ce4f2d5f6818f9277c51864";
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&page=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setTvSeries(data.results);
    } catch (error) {
      console.error("Error fetching TV series:", error);
    }
  }

  return (
    <section id="all-series">
      <h1>TV Series</h1>
      <div className="series-container">
        {tvSeries.map((item) => (
          <div className="series-card" key={item.id}>
          <Link to={`/tv/${item.id}`} className="card-link">

              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.name}
              />
              <h3>{item.name}</h3>
              <p>{item.vote_average}/10</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
