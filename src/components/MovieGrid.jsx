import MovieCard from "./MovieCard";

const MovieGrid = ({ movies, onDetails }) => {
  if (!movies.length) return (
    <div className="no-results"><div className="no-results-icon">🎬</div><h2>No movies found</h2><p>Try searching with another title.</p></div>
  );
  return <div className="movie-grid">{movies.map((movie) => <MovieCard key={movie.id} movie={movie} onDetails={onDetails} />)}</div>;
};

export default MovieGrid;