import { useEffect } from "react";

const MovieModal = ({ movie, onClose }) => {
  useEffect(() => {
    const escape = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", escape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", escape);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!movie) return null;

  const image = movie.image?.original || movie.image?.medium || "/movie-placeholder.svg";
  const year = movie.premiered ? new Date(movie.premiered).getFullYear() : "N/A";
  const summary = movie.summary ? movie.summary.replace(/<[^>]*>/g, "") : "No description available.";

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-image-container">
          <img src={image} alt={movie.name} className="modal-image" />
          <div className="modal-image-overlay"></div>
        </div>
        <div className="modal-content">
          <p className="modal-label">MOVIE DETAILS</p>
          <h2>{movie.name}</h2>
          <div className="modal-info">
            <span>⭐ {movie.rating?.average || "N/A"}</span>
            <span>📅 {year}</span>
            <span>🎬 {movie.type || "Show"}</span>
          </div>
          <div className="genres">{movie.genres?.map((g) => <span key={g}>{g}</span>)}</div>
          <h3>Overview</h3>
          <p className="summary">{summary}</p>
          <div className="extra-info">
            <div><strong>Status</strong><span>{movie.status || "N/A"}</span></div>
            <div><strong>Language</strong><span>{movie.language || "N/A"}</span></div>
            <div><strong>Runtime</strong><span>{movie.runtime ? `${movie.runtime} min` : "N/A"}</span></div>
          </div>
          {movie.officialSite && <a className="official-button" href={movie.officialSite} target="_blank" rel="noreferrer">Visit Official Site →</a>}
        </div>
      </div>
    </div>
  );
};

export default MovieModal;