import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Movie from "./components/Movie";
import MovieDetails from "./components/MovieDetails";
import TvSeries from "./components/TvSeries";
import TvSeriesDetails from "./components/TvSeriesDetails";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} /> {/* Movie list */}
        <Route path="/movies/:id" element={<MovieDetails />} /> {/* Movie details */}
       {/* TV Series */}
        <Route path="/tv" element={<TvSeries />} />
        <Route path="/tv/:id" element={<TvSeriesDetails />} />
      </Routes>
    </>
  );
}

export default App;
