import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";
import Loader from "../components/Loader";
import { getShows, searchShows } from "../services/movieApi";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const loadAll = async () => {
    try {
      setLoading(true); setError("");
      setMovies(await getShows());
    } catch { setError("Something went wrong while loading movies."); }
    finally { setLoading(false); }
  };

  useEffect(() => { loadAll(); }, []);

  const handleSearch = async (query) => {
    try {
      setSearchLoading(true); setError("");
      setMovies(await searchShows(query));
    } catch { setError("Something went wrong while searching."); }
    finally { setSearchLoading(false); }
  };

  const handleClear = async () => {
    try {
      setSearchLoading(true); setError("");
      setMovies(await getShows());
    } catch { setError("Something went wrong while loading movies."); }
    finally { setSearchLoading(false); }
  };

  return (
    <main className="movies-page">
      <section className="movies-header">
        <div className="container">
          <p className="page-label">EXPLORE COLLECTION</p>
          <h1>Discover Amazing <span>Movies & Shows</span></h1>
          <p>Search and explore your favorite TV shows.</p>
          <SearchBar onSearch={handleSearch} onClear={handleClear} />
        </div>
      </section>
      <section className="movies-section">
        <div className="container">
          <div className="movies-title">
            <div><p>EXPLORE</p><h2>{searchLoading ? "Searching..." : "Popular Shows"}</h2></div>
            {!loading && !searchLoading && <span className="movie-count">{movies.length} Shows</span>}
          </div>
          {error && <div className="error-message">⚠️ {error}</div>}
          {loading || searchLoading ? <Loader /> : <MovieGrid movies={movies} onDetails={setSelectedMovie} />}
        </div>
      </section>
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </main>
  );
};

export default Movies;