const MovieCard = ({ movie, onDetails }) => {
  const image = movie.image?.medium || "/movie-placeholder.svg";
  const year = movie.premiered ? new Date(movie.premiered).getFullYear() : "N/A";
  const rating = movie.rating?.average || "N/A";

  return (
    <article className="movie-card">
      <div className="movie-image-wrapper">
        <img src={image} alt={movie.name} className="movie-image" loading="lazy" />
        <div className="rating-badge">⭐ {rating}</div>
      </div>
      <div className="movie-card-content">
        <h3 title={movie.name}>{movie.name}</h3>
        <div className="movie-meta"><span>📅 {year}</span><span>{movie.genres?.[0] || "Drama"}</span></div>
        <button className="details-button" onClick={() => onDetails(movie)}>See Details</button>
      </div>
    </article>
  );
};

export default MovieCard;