import { Link } from "react-router-dom";

const Hero = () => (
  <section className="hero">
    <div className="hero-overlay">
      <div className="container hero-content">
        <p className="hero-subtitle">WELCOME TO MOVIE EXPLORER</p>
        <h1>Discover Your Next<span> Favorite Show</span></h1>
        <p className="hero-description">Explore amazing shows, discover new stories, check ratings, genres, release dates and more.</p>
        <div className="hero-buttons">
          <Link to="/movies" className="primary-button">Explore Now →</Link>
          <a href="https://www.tvmaze.com/" target="_blank" rel="noreferrer" className="secondary-button">TVMaze</a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;